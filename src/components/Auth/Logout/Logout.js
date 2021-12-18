import { useEffect } from "react";
import { useHistory } from "react-router-dom"

import { useAuthContext } from "../../../contexts/AuthContext";

import * as userService from '../../../services/userServices';

const Logout = () => {
    const history= useHistory();
    
    const {user, logout} = useAuthContext();

    useEffect(() => {
        userService.logout(user.accessToken)
        .then(()=>{
            logout();
            history.push('/');
        })
    })

    return null;
}

export default Logout;