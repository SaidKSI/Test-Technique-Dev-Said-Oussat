import  { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function useAuth() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function logout(){
        localStorage.removeItem('user') 
        setUser(null)  
        navigate("/") 
        
    }
    return {logout}
}
