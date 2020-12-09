import LocalButton from "./Button";
import React, { useEffect, useState } from "react";

const RemoteButton = React.lazy(() => import("app1/Button"));

// Set up our own currentUser function for local dev:
const currentUser = () => ({
  username: 'App2 Developer'
})

const App = () => {
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>App 2</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
      <LocalButton currentUser={currentUser} />
    </div>
  )
}

export default App;
