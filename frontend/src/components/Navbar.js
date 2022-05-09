import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NotificationBadge, { Effect } from "react-notification-badge";
import Style from "style-it";

function Navbar() {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("EcomUserId");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3009/count/${user_id}`).then((response) => {
      setCount(response.data.response[0].ncount);
      console.log(response.data.response[0].ncount);
      console.log("count", count);
    });
  }, []);

  function login() {
    navigate(`/`);
  }

  function register() {
    navigate("/register");
  }

  const home = () => {
    navigate("/home");
    window.location.reload();
  };

  const order = () => {
    navigate(`/orderHistory/${user_id}`);
  };
  let container = {
    marginTop: "7px",
  };

  return (
    <>
      {/* <nav
        className="navbar fixed-top navbar-dark bg-dark"
        style={{ height: "85px" }}
      >
        <div className="container-fluid">
          <a>
            <img
              src="assets/img/bg-rm-logo.png"
              alt="logo"
              style={{ height: "80px" }}
            />
          </a>
          <p className="mr-5">kush</p>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a>
            <img
              src="/assets/img/bg-rm-logo.png"
              alt="logo"
              style={{ height: "80px" }}
              onClick={home}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Style>
                  {`
                  .nav-links{
                    color: white;
                    font-family: "Lucida Console", "Courier New", monospace;
                    font-size: 16px;
                    font-weight: bold;
                    padding-left: 20px;
                  }
                    .nav-links:hover {
                      color: Orange; 
                      }
                  `}
                </Style>
                <Link to="" className="nav-links">
                  <span onClick={home}>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/viewproduct">
                  Shop
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <div className="social-icons">
                <ul>
                  <li>
                    <span>
                      <NotificationBadge
                        style={container}
                        count={count}
                        effect={Effect.SCALE}
                      />
                    </span>
                    <Link to="/cart">
                      <i className="fas fa-shopping-cart"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-sign-out-alt"></i>
                    </Link>
                  </li>
                  <ll>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="bordered-btn" type="submit" onClick={order}>
                      My Order
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </ll>
                </ul>
              </div>
            ) : (
              <div>
                <a onClick={login} className="bordered-btn" type="submit">
                  Login
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a onClick={register} className="bordered-btn" type="submit">
                  Sign-up
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
