import React from "react";
import { AppProvider } from "./App";

const Input2 = () => {
  const { input2, setInput2 } = React.useContext(AppProvider);

  React.useEffect(() => {
    console.log("second");
  }, [input2]);
  return (
    <form>
      <input
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default Input2;