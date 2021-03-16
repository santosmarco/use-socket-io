import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SocketCtx } from "../contexts";
var SocketProvider = function (_a) {
    var uri = _a.uri, autoConnect = _a.autoConnect, onConnect = _a.onConnect, onDisconnect = _a.onDisconnect, children = _a.children;
    var _b = useState(io()), socket = _b[0], setSocket = _b[1];
    var _c = useState(false), shouldUpdate = _c[0], setShouldUpdate = _c[1];
    var forceUpdate = useCallback(function () { return setShouldUpdate(true); }, []);
    useEffect(function () {
        if (shouldUpdate) {
            setShouldUpdate(false);
        }
    }, [shouldUpdate]);
    useEffect(function () {
        var newSocket = io(uri);
        newSocket.on("connect", function () {
            forceUpdate();
            if (onConnect) {
                onConnect();
            }
        });
        newSocket.on("disconnect", function () {
            if (onDisconnect) {
                onDisconnect();
            }
            forceUpdate();
        });
        if (autoConnect) {
            newSocket.connect();
        }
        setSocket(newSocket);
        return function () {
            newSocket.disconnect();
        };
    }, [uri, onConnect, onDisconnect, autoConnect, forceUpdate]);
    return (<SocketCtx.Provider value={{ socket: socket, shouldUpdate: shouldUpdate }}>
      {children}
    </SocketCtx.Provider>);
};
export default SocketProvider;
//# sourceMappingURL=SocketProvider.jsx.map