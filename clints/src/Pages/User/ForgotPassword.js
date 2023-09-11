
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Loader from "../../compponate/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
;

const ForgotPassword = () => {
  const dispatch = useDispatch();


  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, toast, message]);

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

                  <h2 className="card-title">Forgot Password</h2>
                </div>

                <div className="card-body">
                  <form
                    className="forgotPasswordForm"
                    onSubmit={forgotPasswordSubmit}
                  >

                    <div className="md-form  mb-2">

                      <div className='Input-box align-center '>
                        <i className="fa fa-envelope prefix text-primary"></i>
                        <input type="email"
                          placeholder="Your Email"
                          required

                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="defaultForm-pass" className="form-control validate" />

                      </div>

                    </div>



                    <input
                      type="submit"
                      value="Send"

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

export default ForgotPassword;
