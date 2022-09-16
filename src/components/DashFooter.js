import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
const DashFooter = () => {
    
const { user } = useContext(UserContext);
    const content = (
        <footer className="dash-footer">
            
            <p>Current User:{ user?.email }</p>
           
        </footer>

    )
    
    return content
}
export default DashFooter