// import { createContext, useState } from "react";

// const ContextGlobal = createContext();

// const ContextGlobalProvider = (props) => {
//   const { state, setState } = useState({
//     name: null,
//     isLogin: false,
//     time: false,
//   });

//   const change = (name, isLogin, time) => {
//     setState(...state, { name, isLogin, time });
//   };

//   return (
//     <ContextGlobal.Provider value={{ state, change }}>
//       {props.children}
//     </ContextGlobal.Provider>
//   );
// };

// export default ;

const initialState = {
  name: null,
  isLogin: false,
  time: false,
};
