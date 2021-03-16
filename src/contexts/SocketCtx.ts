import { createContext } from "react";
import { io } from "socket.io-client";

const SocketCtx = createContext({
  socket: io(),
  shouldUpdate: false,
});

export default SocketCtx;
