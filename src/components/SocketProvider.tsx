import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SocketCtx } from "../contexts";

type SocketProviderProps = {
  uri: string;
  autoConnect?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
};

/**
 * The wrapper component for the `useSocket` hook.
 *
 * ---
 *
 * Props:
 * - `uri` _string_ **[REQUIRED]** – Socket's URI.
 * - `autoConnect` _boolean_ – Whether the component should automatically connect to the Socket upon mounting. _Default:_ `false`
 * - `onConnect` _function_ – An optional callback function to run upon connection.
 * - `onDisconnect` _function_ – An optional callback function to run upon disconnection.
 *
 * ---
 *
 * Example:
 *
 * ```
 * <SocketProvider uri="http://localhost:8080/" autoConnect>
 *   <App />
 * </SocketProvider>
 * ```
 */
const SocketProvider: React.FC<SocketProviderProps> = ({
  uri,
  autoConnect,
  onConnect,
  onDisconnect,
  children,
}) => {
  const [socket, setSocket] = useState(io());
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const forceUpdate = useCallback(() => setShouldUpdate(true), []);

  useEffect(() => {
    if (shouldUpdate) {
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  useEffect(() => {
    const newSocket = io(uri);

    newSocket.on("connect", () => {
      forceUpdate();
      if (onConnect) {
        onConnect();
      }
    });

    newSocket.on("disconnect", () => {
      if (onDisconnect) {
        onDisconnect();
      }
      forceUpdate();
    });

    if (autoConnect) {
      newSocket.connect();
    }

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [uri, onConnect, onDisconnect, autoConnect, forceUpdate]);

  return (
    <SocketCtx.Provider value={{ socket, shouldUpdate }}>
      {children}
    </SocketCtx.Provider>
  );
};

export default SocketProvider;
