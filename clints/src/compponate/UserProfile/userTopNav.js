import React from 'react'
import { useSelector } from "react-redux";
function TopNav(props) {
    const { user, } = useSelector((state) => state.user);


    return (
        <nav className="navbar navbar-default no-margin  ">

            <div className="row fixed-brand">
                {user &&
                    <>
                        <div className="col-3">
                            <div className='profile-image'>
                                <img className="h-100" src={user.avatar.url ? user.avatar.url : "/Profile.png"} alt="profile" />
                            </div>
                        </div>
                        <div className="col-6">

                            <h5 className="text-capletize text-x-small-hegite "><span className="text-x-small">Hello,</span><br />
                                {user.name}</h5>

                        </div>
                    </>
                }


                <div className="col-3">
                    <button onClick={props.click} className="navbar-toggle  in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                        <i className="fas fa-bars me-2 mx-2"></i>
                    </button>
                </div>


            </div>

        </nav>
    )
}

export default TopNav