import { useContext } from "react";
import { SocketCtx } from "../contexts";
/**
 * A React hook to access the `Socket` instance anywhere throughout your app.
 *
 * See https://socket.io/docs/v3/client-api/index.html#Socket for a detailed description of the `Socket` instance.
 *
 * _Must be called from a child of _`<SocketProvider />`_._
 */
var useSocket = function () {
    var socket = useContext(SocketCtx).socket;
    return socket;
};
export default useSocket;
//# sourceMappingURL=useSocket.js.map