import { createContext, useState } from "react";
import Main from './../components/main';

export const CoursesContext = createContext();

const ContextProvider = () => {



    return ( 
    <CoursesContext.Provider
    value={{}}>
       <Main/>
    </CoursesContext.Provider> 
    );
}
 
export default ContextProvider;