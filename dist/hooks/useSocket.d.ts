/**
 * A React hook to access the `Socket` instance anywhere throughout your app.
 *
 * See https://socket.io/docs/v3/client-api/index.html#Socket for a detailed description of the `Socket` instance.
 *
 * _Must be called from a child of _`<SocketProvider />`_._
 */
declare const useSocket: () => import("socket.io-client").Socket<import("socket.io-client/build/typed-events").DefaultEventsMap, import("socket.io-client/build/typed-events").DefaultEventsMap>;
export default useSocket;
//# sourceMappingURL=useSocket.d.ts.map