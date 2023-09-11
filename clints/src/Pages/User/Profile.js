import React, { useEffect, useState } from "react";
import Loader from "../../compponate/Loader/Loader";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import TopNav from "../../compponate/UserProfile/userTopNav";

import './user.css';
import SideMenu from "../../compponate/UserProfile/SideMenu";

const Profile = () => {
    const navigate = useNavigate();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/loginSinup");
        }
    }, [navigate, user, isAuthenticated]);


    const [toggleClass, settoggleClass] = useState(false)

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="vh-100 profile-section">
                        <div className="container  h-100">
                            <TopNav click={()=>settoggleClass(!toggleClass)} />
                            <div id="wrapper" className={toggleClass ? 'toggled-2' : null}>
                             
                                 <SideMenu/>
                                {/* <!-- Page Content --> */}
                                <div id="page-content-wrapper">
                                    <div className=" xyz">
                                        <div className="row  justify-content-center align-items-center h-100">
                                            <div className=" col-lg-12 mb-4 mb-lg-0">
                                                <div className="card mb-3" >
                                                    <div className="row g-0">
                                                        <div className="col-md-4  gradient-custom text-center text-white"
                                                        >
                                                            <img src={user?.avatar?.url} alt={user.name} className="img-fluid m-2" />
                                                            <h3 className="text-primary mt-3 text-capitalize">{user.name}</h3>

                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body p-4">

                                                                <h6><i className="fa fa-edit mb-5"></i> <Link to="/me/update">Edit Profile</Link></h6>
                                                                <hr className="mt-0 mb-4" />
                                                                <div className="row pt-1">
                                                                    <div className="col-md-7 mb-3">
                                                                        <h6>Email</h6>
                                                                        <p className="text-muted">{user.email}</p>
                                                                    </div>
                                                                    <div className="col-md-5 mb-3">
                                                                        <h6>Phone</h6>
                                                                        <p className="text-muted">{user.phone}</p>
                                                                    </div>
                                                                </div>
                                                                <h6>Projects</h6>
                                                                <hr className="mt-0 mb-4" />
                                                                <div className="row pt-1">
                                                                    <div className="col-6 mb-3">
                                                                        <h6>Viewed Orders</h6>
                                                                        <p className="text-muted"><Link to={"/me/order"}>My Orders</Link></p>

                                                                    </div>
                                                                    <div className="col-6 mb-3">
                                                                        <h6>Password</h6>
                                                                        <p className="text-muted"> <Link to="/password/update">Change Password</Link></p>

                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-start">
                                                                    <p className="text-muted mr-3">Joind On</p>
                                                                    <p className="text-muted">{String(user.createdAt).substr(0, 10)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* <!-- /#page-content-wrapper --> */}
                            </div>
                        </div>
                    </section>

                </>
            )}
        </>
    );
};

export default Profile;
