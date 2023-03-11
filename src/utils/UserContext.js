import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummyName",
    email: "dummy@11gmail.com",
  },
});

export default UserContext;
