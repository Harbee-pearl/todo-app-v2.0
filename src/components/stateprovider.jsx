

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export default function StateProvider({children}) {

    const [appData, setAppData] = useState({
        isloggedin:false,
        userId: null,
        userEmail:null,
        todos: []
    })

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setAppData((prevValue) => {
              return {
                  ...prevValue,
                  todos:result
              }
          })
        })
    }, []);

    return(
        <AppContext.Provider value={{state: appData, setState: setAppData}}>
            {children}
        </AppContext.Provider>
    )
}