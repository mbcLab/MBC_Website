import { auth } from "../../firebase";
import { useNavigate as UseNavigate } from 'react-router-dom';
const LogoutUser = () => {
    auth.signOut();
    UseNavigate("/");
}
export default LogoutUser;