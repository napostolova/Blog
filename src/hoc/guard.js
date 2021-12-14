import {useHistory } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';

const Guard = (InnerComponent) => {

    const OuterComponent = (props) => {
            const {isAuth} = useAuthContext();
            const history = useHistory();

            if(!isAuth) {
                history.push('/login');
                return null;
            }

        return <InnerComponent {...props}/>
    }
    
    return OuterComponent;
}

export default Guard;