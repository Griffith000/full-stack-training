// // import  CalculSimple from './component/CalculSimple'
// import { useState,createContext,useContext } from 'react';
// // import Counter from './component/Counter'
// // import Parent from './component/Parent'
// // here is like we said that we gona create a global variable 
// const UserContent=createContext<string | undefined>(undefined)
// function Component1(){
// const [username,setUsername]=useState<string>("linux")
// return (
//   <UserContent.Provider value={username}>
//     {/* to make sure ennou every component has access to the context lezemha tkoun inside the provider */}
//    <div>
//     <h2>Component 1</h2>
//     <p>Username: {username}</p>
//    <Component2 />
//   </div>

//   </UserContent.Provider>
 
// )

// }
// function Component2(){
//   return (
//     <div>
//       <h2>Component 2 : i dont need the user props so i am not gonna takes it as a prop</h2>
//       <Component3  />
//     </div>
//   )
// }
// function Component3(){
//   const username=useContext(UserContent)
//   return (
//     <div>
//       <h2>compoenennt3 i need te global variable so </h2>
//       <p>Username: {username} again</p>
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       {/* <Counter />
//       <Parent /> */}
//       {/* <CalculSimple /> */}
//       <Component1 />
//     </div>
//   )
// }

// export default App

import React from 'react'
// import ChatBot from './component/ChatBot'
const App = () => {
 const styledB={
  backgroundColor:"blue",
  color:"white",
  padding:"10px",
  borderRadius:"5px",
  textAlign:"center" as const,
 }
  return (
    <div>
      {/* <ChatBot /> */}
      <div style={styledB}>click </div>
    </div>
  )
}

export default App