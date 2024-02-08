import React, { useState } from "react";
import "../../style/pages/login.css";
import logo from "../../image/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";

export const Login = () => {
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const LoginFetchUserData = async (useData) => {
    setIsloading(true);
    try {
      const { data } = await axios.post("http://localhost:5180/users", useData);
      if (data.email == "") {
        toast.error("Email Or Password Null");
        setIsloading(false);
      } else {
        setTimeout(() => {
          toast.success("Thanks You..!");
          setIsloading(false);
          navigate("/home");
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response.data);
      setIsloading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginFetchUserData(userData);
    console.log(userData);
  };
  const handleChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData({ ...newUserData });
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control inputLogin border-0 ">
              <label htmlFor="email">الايميل</label>
              <input
                onChange={handleChange}
                id="email"
                name="email"
                placeholder="الايميل"
                className="form-control "
                type="email"
              ></input>
            </div>
            <div className="form-control inputLogin border-0">
              <label htmlFor="password">الرقم السري</label>
              <input
                onChange={handleChange}
                id="password"
                name="password"
                placeholder="الرقم السري"
                className="form-control "
                type="password"
              ></input>
              <a href="#" className="forget fst-italic text-body-secondary ">
                نسيت الياسورد
              </a>
            </div>
            <button type="submit" className="submit-btn btn btn-dark">
              {isLoading ? <LuLoader2 className="loader" /> : "تسجيل الدخول"}
            </button>
            <h6>
              <Link to={"/register"}>لا يوجد لدي حساب! </Link>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
};
