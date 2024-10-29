import { createContext, useContext } from "react";

const userContext = createContext({});
const signin = createContext(false);

export {userContext,signin}