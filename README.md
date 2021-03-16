# use-socket-io

Access the client-side `Socket` instance of your app with the ease of a single React hook.

---

## Installation

With `npm`:

```sh
npm i --save use-socket-io
```

With `yarn`:

```sh
yarn add use-socket-io
```

---

## Usage

```tsx
import SocketProvider, { useSocket } from "use-socket-io";

const App = () => {
  const socket = useSocket();

  return <div>App</div>;
};

render(
  <SocketProvider uri="http://localhost:8080" autoConnect>
    <App />
  </SocketProvider>,
  document.getElementById("root")
);
```

---

## API reference

### `SocketProvider`

The wrapper component for the `useSocket` hook.

**Props:**

- `uri` _string_ **[REQUIRED]** – Socket's URI.
- `autoConnect` _boolean_ – Whether the component should automatically connect to the Socket upon mounting. _Default:_ `false`
- `onConnect` _function_ – An optional callback function to run upon connection.
- `onDisconnect` _function_ – An optional callback function to run upon disconnection.

**Example:**

```tsx
<SocketProvider uri="http://localhost:8080" autoConnect>
  <App />
</SocketProvider>
```

### `useSocket`

A React hook to access the `Socket` instance anywhere throughout your app.

See _<https://socket.io/docs/v3/client-api/index.html#Socket>_ for a detailed description of the `Socket` instance.

_Must be called from a child of_ `<SocketProvider />`_._
