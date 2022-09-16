import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import useAuth from "../hooks/useAuth";

const DashHeader = () => {
  const {logout} = useAuth()
  const navigate = useNavigate();
  const onPostsClicked = () => navigate("/index/posts");
  const onlogoutClicked = ()=>logout()  ;
  
  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        <Link to="/index">
          <h1 className="dash-header__title">
            <FontAwesomeIcon icon={faHouse} />
          </h1>
        </Link>
        <nav className="dash-header__nav">
          <button  onClick={onPostsClicked} className="icon-button" title="Posts">
            Posts
          </button>
          <button  onClick={onlogoutClicked} className="icon-button" title="Posts">
          <FontAwesomeIcon icon={faRightFromBracket} />

          </button>
        </nav>

      </div>
    </header>
  );

  return content;
};
export default DashHeader;
