
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../../compponate/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";

import "./user.css"

import { toast } from 'react-toastify';

const LoginSignUp = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { error, loading, user, isAuthenticated } = useSelector(
        (state) => state.user
    );
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [Newuser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const { name, email, password, phone } = Newuser;

    const [avatar, setAvatar] = useState("https://mdbootstrap.com/img/new/avatars/1.jpg");
    const [avatarPreview, setAvatarPreview] = useState("https://mdbootstrap.com/img/new/avatars/1.jpg");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));

    };

    const registerSubmit = (e) => {
        if (phone.length < 10 || phone.length > 10) {
            toast.error("Phone Number should be 10 digits Long");
            return;
        }
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("phone", phone);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm));

    };
    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setNewUser({ ...Newuser, [e.target.name]: e.target.value });
        }
    };


    //    const  redirect= searchParams.get('LoginSinUp') ? Number(searchParams.get('LoginSinUp')) :"/me/acount";

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            toast.success("Login");
            navigate('/me/acount')
        }

        if (isAuthenticated && user.role === "admin") {
            navigate("/admin/DashBord")
        }
    }, [dispatch, navigate, error, user, isAuthenticated]);

    const [IsRegister, setIsRegister] = useState(false)
    return (
        <>
            {loading ? (
                <Loader />
            ) :
                <div className="Login-Box ">
                    <div className="container h-100 d-block margin-auto">

                        {IsRegister ?

                            <div className=" registraion login-form ">
                                <form onSubmit={registerSubmit}>
                                    <div ><img className="avatar" src={avatarPreview} alt="Avatar Preview" /></div>
                                    <h4 className="modal-title">Craete Your Account</h4>
                                    <div className="form-group">
                                        <div className='Input-box align-center'>
                                            <i className="fa  fa-id-card text-primary prefix grey-text"></i>
                                            <input type="text"
                                                placeholder="Name"
                                                required
                                                name="name"
                                                value={name}
                                                onChange={registerDataChange} id="defaultForm-email" className="form-control validate" /><br />
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="form-group col-md-6">
                                            <div className='Input-box align-center'>
                                                <i className="fa fa-envelope text-primary prefix grey-text"></i>
                                                <input type="email"
                                                    placeholder="Email"
                                                    required
                                                    name="email"
                                                    value={email}
                                                    onChange={registerDataChange} id="defaultForm-email" className="form-control validate" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className='Input-box align-center'>
                                                <i className="fa fa-phone  text-primary prefix grey-text"></i>
                                                <input type="number"
                                                    placeholder="phone"
                                                    required
                                                    name="phone"
                                                    value={phone}
                                                    onChange={registerDataChange} id="defaultForm-email" className="form-control validate" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='Input-box  align-center '>
                                            <i className="fas fa-lock  text-primary prefix grey-text"></i>
                                            <input type="password"
                                                placeholder="Password"
                                                required
                                                name="password"
                                                value={password}
                                                onChange={registerDataChange} id="defaultForm-pass" className="form-control validate" />
                                        </div>
                                    </div>
                                    <div className='form-group'>

                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={registerDataChange} />

                                    </div>
                                    <div className='form-group'>

                                        <p>Gender:</p>
                                        <input type="radio" id="Male" name="Gender" className="validate" value="Male" />
                                        <label for="Male">Male</label>
                                        <input type="radio" id="Female" name="Gender" className="ml-3 validate" value="Female" />
                                        <label for="Female">Female</label>

                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Register" />
                                </form>
                                <div className="text-center small">Already have a member? <a className="poniter" onClick={(e) => setIsRegister(false)} >Sign up</a></div>
                            </div>

                            :
                            <div className="login-form">
                                <form onSubmit={loginSubmit}>
                                    <div ><img className="avatar" src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png" alt="Avatar Preview" /></div>
                                    <h4 className="modal-title">Login to Your Account</h4>
                                    <div className="form-group">
                                        <div className='Input-box  align-center'>
                                            <i className="fas fa-envelope  text-primary prefix "></i>
                                            <input type="email"
                                                placeholder="Email"
                                                required
                                                value={loginEmail}
                                                onChange={(e) => setLoginEmail(e.target.value)} id="defaultForm-email" className="form-control validate" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='Input-box align-center '>
                                            <i className="fas fa-lock  text-primary prefix "></i>
                                            <input type="password"
                                                placeholder="Password"
                                                required
                                                value={loginPassword}
                                                onChange={(e) => setLoginPassword(e.target.value)} id="defaultForm-pass" className="form-control validate" />
                                        </div>
                                    </div>
                                    <div className="form-group small clearfix">
                                        <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
                                        <Link to="/password/forgot "><a className="forgot-link">Forgot Password?</a></Link>

                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" />
                                </form>
                                <div className="text-center small">Don't have an account? <a className="poniter" onClick={(e) => setIsRegister(true)} >Sign up</a></div>
                            </div>


                        }
                    </div>

                </div >
            }
        </>

    )
}

export default LoginSignUp