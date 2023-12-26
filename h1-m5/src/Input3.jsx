import React from "react";
import { AppProvider } from "./App";

const Input3 = () => {
  const { input3, setInput3 } = React.useContext(AppProvider);

  React.useEffect(() => {
    console.log("third");
  }, [input3]);
  return (
    <form>
      <input
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default Input3;
