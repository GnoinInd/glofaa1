import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";


function SideMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
// user Option///////////
    const Ueroptions = [
        { name: "My Orders", func: oders, icon:'fa fa-dashboard' },
        {
            name: "Profile Seting", func: dropDown, icon:'fa fa-dashboard',
            SubOption: [
                { subName: 'Personal Information', func: account },
                { subName: 'Manage Addresses', func: account },
                { subName: 'PAN Card Information', func: account },
                { subName: 'Change Password', func: changePassword }
            ]
        },
        {
            name: "Payment", func: dropDown,icon:'fa fa-solid fa-wallet',
            SubOption: [
                { subName: 'Gift Card', func: account },
                { subName: 'saved UPI', func: account },
                { subName: 'Saved Cards', func: account }
            ]
        },
       
        { name: "My Reviews", func: logoutUser, icon:'fa fa-dashboard' },
        { name: "Logout", func: logoutUser, icon:'fa fa-power-off' },
       
    ];

    function account() {
        navigate("/me/acount")

    }
    function oders() {
        navigate("/me/order")

    }
    function changePassword(){
        navigate("/password/update")
    }
    function logoutUser() {
        dispatch(logout());
        toast.success("Logout Successfully");

    }


    const [DropDwonList, setDropDwonList] = useState(true)
    function dropDown(i) {
        setDropDwonList(!DropDwonList)
    }
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                {Ueroptions.map((item, i) => (
                    <li key={item.name} className="active">
                        <a onClick={item.func}>
                            <span className="fa-stack fa-lg pull-left"><i className={`${item.icon} fa-stack-1x`}></i>
                            </span>{item.name}
                        </a>
                       

                        {item.SubOption &&
                            <ul className={DropDwonList ? "nav-pills nav-stacked d-block" : "nav-pills nav-stacked d-none"} >
                                {item.SubOption.map((option) => (

                                    <li key={option.subName}><a onClick={option.func}>{option.subName}</a></li>
                                ))}
                            </ul>}

                           
                    </li>


                ))}


            </ul>
        </div>
    )
}

export default SideMenu