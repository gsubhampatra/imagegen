import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigation = useNavigate();
  const logOut = async () => {
    await signOut(Auth);
    navigation("/");
  };

  return (
    <>
      <header>
        <h3>ImageGen</h3>
        <div className="menu">
          <Link className="link" to="/">
            Home
          </Link>
          {user && <Link to={"/generate"} className="link" >Generate</Link> }
          {user ? (
            <div className="link">
              <div className="d-flex">
                {user.displayName}{" "}
                <img className="logo" src={user.photoURL} alt="" />
                <button onClick={logOut}>
                  <LogoutIcon />
                </button>
              </div>
            </div>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
