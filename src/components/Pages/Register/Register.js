import {
  faEye,
  faEyeSlash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FadeLoader } from "react-spinners";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Register = () => {
  const {
    createNewUser,
    updateUserProfile,
    user,
    setUser,
    logIn,
    googleLogIn,
    githubLogIn,
    facebookLogIn,
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const resetForm = () => {
    setUserInfo({
      name: "",
      photoURL: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    setLoading(true);

    const email = userInfo.email;
    const name = userInfo.name;
    const photoURL = userInfo.photoURL;
    const password = userInfo.password;
    const confirm = userInfo.confirm;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please Provide a Valid Email" });
      return;
    }

    if (password.length < 6) {
      setErrors({
        email: "",
        password: "Password Must Be 6 Character or More",
      });
      return;
    }

    if (confirm !== password) {
      setErrors({ email: "", password: "Your Password Did Not Match" });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        resetForm();
        setErrors({ email: "", password: "" });
        setLoading(false);
        navigate("/");
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.log(error);
        setErrors({ ...errors, email: error.message });
        setLoading(false);
      });
  };

  const handleUpdateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handlePassShowToggle = () => {
    setPasswordShown(!passwordShown);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setUserInfo({ ...userInfo, name: name });
  };

  const handlePhotoChange = (event) => {
    const photoURL = event.target.value;
    setUserInfo({ ...userInfo, photoURL: photoURL });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setUserInfo({ ...userInfo, email: email });
  };

  const handlePassChange = (event) => {
    const password = event.target.value;
    setUserInfo({ ...userInfo, password: password });
  };

  const handleConfirmPassChange = (event) => {
    const confirm = event.target.value;
    setUserInfo({ ...userInfo, confirm: confirm });
  };

  // Login With Google Account
  const googleLogInHandler = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Login With Github Account

  const githubLogInHandler = () => {
    githubLogIn(githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Login With Facebook Account

  const facebookLogInHandler = () => {
    facebookLogIn(facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div>

{
    loading && (
      <div className="flex items-center justify-center">
        <FadeLoader color="blue" className="text-center" />
      </div>
    )
  }
      <div className="flex justify-center items-center py-6">
        <div className="w-[90%] mx-auto max-w-md p-8 space-y-3 rounded-xl  text-black shadow-2xl bg-slate-300">
          <h1 className="text-2xl font-bold text-center mt-3 mb-6">Register</h1>
          <form
            onSubmit={handleCreateUser}
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="flex flex-col mb-2">
              <div className="flex relative mb-4 ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-black shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>

                <input
                  type="Name"
                  value={userInfo.name}
                  onChange={handleNameChange}
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>

              <div className="flex relative mb-4 ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-black shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </span>

                <input
                  type="photo"
                  name="photo"
                  value={userInfo.photoURL}
                  onChange={handlePhotoChange}
                  id="photo"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter Your Photo URL"
                />
              </div>

              <div className="flex relative">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>

                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleEmailChange}
                  id="email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black  shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Type Your Email"
                  required
                />
              </div>
            </div>

            <div className="flex relative">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                value={userInfo.password}
                onChange={handlePassChange}
                id="password"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Type Your Password"
                required
              />{" "}
              <span
                onClick={handlePassShowToggle}
                className="pt-2 absolute right-1 cursor-pointer"
              >
                {passwordShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>

            <div className="flex relative">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                name="confirm"
                value={userInfo.confirm}
                onChange={handleConfirmPassChange}
                id="confirm"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Confirm Your Password"
                required
              />
              <span
                onClick={handlePassShowToggle}
                className="pt-2 absolute right-1 cursor-pointer"
              >
                {passwordShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className=" block w-full p-3 text-center rounded-sm text-white bg-black  hover:bg-teal-400 hover:text-black"
            >
              Register
            </button>
          </form>

          <>
            {errors?.email && (
              <p className="text-red-500 text-lg font-semibold text-center">
                {errors.email}
                <span className="pl-1">
                  {" "}
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </span>
              </p>
            )}

            {errors?.password && (
              <p className="text-red-500 text-lg font-semibold text-center">
                {errors.password}
                <span className="pl-1">
                  {" "}
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </span>
              </p>
            )}
          </>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 ">Register With Social Accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={googleLogInHandler}
              aria-label="Log in with Google"
              className="p-3 rounded-sm hover:text-blue-700  flex flex-col justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Google</p>
            </button>

            <button
              onClick={githubLogInHandler}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm  hover:text-blue-700  flex flex-col justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>GitHub</p>
            </button>

            <button
              onClick={facebookLogInHandler}
              aria-label="Log in with Facebook"
              className="p-3 rounded-sm  hover:text-blue-700  flex flex-col justify-center items-center"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 w-5  h-5 fill-current"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              <p>Facebook</p>
            </button>
          </div>
          <p className="text-center sm:px-6 text-gray-600">
            Already Have An Account?
            <Link to="/login" className=" text-gray-800 m-2">
              {" "}
              <button className="btn bg-black text-white px-2 py-1">
                Login{" "}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
