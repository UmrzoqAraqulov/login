import { useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { authAction } from "../../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (userInfo.username === "user" && userInfo.password === "12345") {
      dispatch(authAction.login());
      navigate("/user");
    }
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button onClick={loginUser}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
