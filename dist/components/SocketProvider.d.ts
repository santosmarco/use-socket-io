/// <reference types="react" />
declare type SocketProviderProps = {
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
declare const SocketProvider: React.FC<SocketProviderProps>;
export default SocketProvider;
//# sourceMappingURL=SocketProvider.d.ts.map