import React from "react";
import { AppProvider } from "./App";

const Input1 = React.memo(() => {
  const { input1, setInput1 } = React.useContext(AppProvider);
  React.useEffect(() => {
    console.log("first");
  }, [input1]);
  return (
    <form>
      <input
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        type="text"
      />
    </form>
  );
});

export default Input1;
