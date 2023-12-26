// App.js
import React from 'react';
import withTheme from './withTheme';
import ExampleComponent from './ExampleComponent';
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <div className="App">
      <ExampleComponent />
    </div>
    </div>
  );
};

export default withTheme(App);





// import  { useMemo, useState } from "react";
// import Input1 from "./Input1";
// import Input2 from "./Input2";
// import Input3 from "./Input3";
// import React from 'react';
// import withTheme from './withTheme';
// import ExampleComponent from './ExampleComponent';
// import "./style.css";

// export const AppProvider = React.createContext(null);

// export default function App() {
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");
//   const [input4, setInput4] = useState("");

//   const fetchData = useMemo(() => { });

//   return (
//     <AppProvider.Provider
//       value={{ input1, setInput1, input2, setInput2, input3, setInput3 }}
//     >
//       <div className="container">
//         <div className="inputs">
//           <Input1 />
//           <Input2 />
//           <Input3 />
//  </div>

//         <div className="App">

//           <div className="them">
//             <h1>My App</h1>
//             <ExampleComponent />
//             < withTheme/>
//           </div>

//         </div>
//       </div>
//     </AppProvider.Provider>
//   );
// }

