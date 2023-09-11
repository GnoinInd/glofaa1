import React, { useEffect, useState, useRef } from "react";


import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from "../../actions/userAction";


const UserOptions = ({ user }) => {
    // const { cartItem } = useSelector((state) => state.cart);

    const [IsopenDropdown, setIsopenDropdown] = useState(false)
    let userMenuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!userMenuRef.current.contains(e.target)) {
                setIsopenDropdown(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const options = [
        { name: "Orders", func: orders },
        { name: "Profile", func: account },



        { name: "Logout", func: logoutUser },
    ];
    if (user.role === "user") {
        options.unshift({
            name: `Cart`,
            func: cart,
        });
    }
    if (user.role === "admin") {
        options.unshift({

            name: "Dashboard",
            func: dashboard,
        });
    }

    function dashboard() {
        navigate("/admin/DashBord")

    }

    function orders() {
        navigate("/me/order")

    }
    function account() {
        navigate("/me/acount")


    }
    function cart() {
        navigate("/me/cart")

    }
    function logoutUser() {
        dispatch(logout());
        toast.success("Logout Successfully..");
    }

    return (
        <>



            <div className="d-flex justify-content-end dropdown align-items-center me-2 mx-2 " onClick={() => { setIsopenDropdown(!IsopenDropdown); }}>
                <div className='Logo ' style={{ width: "30px" }}>
                    <img
                        className="speedDialIcon"
                        src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                        alt="Profile"
                    />
                </div>

                <ul ref={userMenuRef} className={IsopenDropdown ? "dropdown-menu dropdown-menu-right d-block" : "dropdown-menu dropdown-menu-right"} aria-labelledby="navbarDropdownMenuLink">
                    {options.map((item) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <li key={item.name} className="dropdown-item"><a onClick={item.func}>{item.name}</a></li>

                    ))}

                </ul>
            </div>





        </>
    );
};

export default UserOptions;
