import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Loader from "../../compponate/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import { useNavigate } from "react-router-dom";
import TopNav from "../../compponate/UserProfile/userTopNav";
import './user.css';
import SideMenu from "../../compponate/UserProfile/SideMenu";

const UpdatePassword = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePasswordSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);

        dispatch(updatePassword(myForm));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            toast.success("Profile Updated Successfully");

            navigate("me/acount");

            dispatch({
                type: UPDATE_PASSWORD_RESET,
            });
        }
    }, [dispatch, error, toast, navigate, isUpdated]);

    const [toggleClass, settoggleClass] = useState(false)

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="vh-100 profile-section">
                        <div className="container  h-100">

                            <TopNav click={() => settoggleClass(!toggleClass)}/>
                            <div id="wrapper" className={toggleClass ? 'toggled-2' : null}>

                                <SideMenu />
                                <div className="d-flex align-items-center p-4 justify-content-center">
                                    <div className="card d-inline-block text-center p-5">
                                        <div className="card-hedrer">

                                            <h2 className="resetPasswordHeading">Update Password</h2>
                                        </div>

                                        <div className="card-body">
                                            <form
                                                className="forgotPasswordForm"
                                                onSubmit={updatePasswordSubmit}
                                            >
                                                <div className="md-form mb-2 ">

                                                    <div className='Input-box align-center '>
                                                        <i className="fa fa-envelope prefix text-primary"></i>
                                                        <input type="password"
                                                            placeholder="Old Password"
                                                            required
                                                            value={oldPassword}
                                                            onChange={(e) => setOldPassword(e.target.value)} id="defaultForm-pass" className="form-control validate" />

                                                    </div>

                                                </div>
                                                <div className="md-form mb-2 ">

                                                    <div className='Input-box align-center '>
                                                        <i className="fa fa-envelope prefix text-primary"></i>
                                                        <input type="password"
                                                            placeholder="New Password"
                                                            required
                                                            value={newPassword}
                                                            onChange={(e) => setNewPassword(e.target.value)} id="defaultForm-pass" className="form-control validate" />

                                                    </div>

                                                </div>

                                                <div className="md-form mb-2">

                                                    <div className='Input-box align-center '>
                                                        <i className="fa fa-envelope prefix text-primary"></i>
                                                        <input type="password"
                                                            placeholder="Confirm Password"
                                                            required
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                            id="defaultForm-pass" className="form-control validate" />

                                                    </div>

                                                </div>

                                                <input type="submit" value="Change"
                                                    className="btn btn-primary"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default UpdatePassword;
