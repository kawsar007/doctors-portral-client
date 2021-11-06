import { useContext } from "react";
import { AuthContext } from "../context/authProvider/authProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;