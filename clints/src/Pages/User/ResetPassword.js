import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Loader from "../../compponate/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resetPassToken } = useParams();

    const { error, success, loading } = useSelector(
        (state) => state.forgotPassword
    );

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetPasswordSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("password", password);
        myForm.set("confirmPassword", confirmPassword);

        dispatch(resetPassword(resetPassToken, myForm));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            toast.success("Password Updated Successfully");
            navigate("/LoginSinUp");
        }
    }, [dispatch, error, toast,navigate, success]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>


                    <div className="container">
                        <div className="d-flex align-items-center p-4 justify-content-center">
                            <div className="card d-inline-block text-center p-5">
                                <div className="card-hedrer">

                                    <h2 className="resetPasswordHeading">Update Password</h2>
                                </div>

                                <div className="card-body">
                                    <form
                                        className="forgotPasswordForm"
                                        onSubmit={resetPasswordSubmit}
                                    >

                                        <div className="md-form mb-2 ">

                                            <div className='Input-box align-center '>
                                                <i className="fa fa-envelope prefix text-primary"></i>
                                                <input type="password"
                                                    placeholder="New Password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    id="defaultForm-pass" className="form-control validate" />

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

                                        <input type="submit" value="Update"
                                            className="btn btn-primary"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                </>
            )}
        </>
    );
};

export default ResetPassword;
