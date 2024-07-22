import React from "react";
import CustomerAuthUI from "./components/CustomerAuthUI";
import WorkerAuthUI from "./components/WorkerAuthUI";

function App() {
  return (
    <div>
      <div>
        <h1>authentication ui </h1>
        <CustomerAuthUI />
        <WorkerAuthUI />
      </div>
    </div>
  );
}

export default App;
