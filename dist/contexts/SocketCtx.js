import { createContext } from "react";
import { io } from "socket.io-client";
var SocketCtx = createContext({
    socket: io(),
    shouldUpdate: false,
});
export default SocketCtx;
//# sourceMappingURL=SocketCtx.js.map