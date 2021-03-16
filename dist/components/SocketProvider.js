var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SocketCtx } from "../contexts";
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
    return (_jsx(SocketCtx.Provider, __assign({ value: { socket: socket, shouldUpdate: shouldUpdate } }, { children: children }), void 0));
};
export default SocketProvider;
//# sourceMappingURL=SocketProvider.js.map