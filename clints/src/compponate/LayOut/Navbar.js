/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState,useRef } from 'react'

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import UserOption from "../LayOut/UserOption";
import Search from '../searcBar/Search';
function Navbar() {


    const [Isopen, setIsopen] = useState(false)

    const [fixd, setfixd] = useState(false);
    let menuRef= useRef()

    useEffect(()=>{
        let handler =(e)=>{
        if(!menuRef.current.contains(e.target)){
            setIsopen(false)
        }
        }
        document.addEventListener("mousedown", handler);
        return()=>{
        document.removeEventListener("mousedown", handler)
        }
        })

    const { user, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const { cartItems } = useSelector((state) => state.cart);

    if (typeof window !== "undefined") {
        function setFixed() {
            if (window.scrollY >= 120) {
                setfixd(true)

            } else {
                setfixd(false)

            }
        }
        window.addEventListener("scroll", setFixed)
    }
    return (
        <>
             <header className=" bg-info bg-gradient">
                <div id='topscroll' className={fixd ? "fixed-Nave" : " WithoutFixed"}>
                    <div className='nav-bg-dark'>
                        <div className='container p-0'>
                            <nav className='navbar-1 '>


                                <div className='Logo1'>
                                    <Link to={"/"}>

                                        <img alt="Glofaa" className="img-fuild" src='/images/logo.png' />

                                    </Link>
                                </div>


                               <Search/>

                                <div className='Profesnal-acount d-none  d-md-none d-xl-inline-block '>
                                    <Link className="" to="/LoginSinUp"> Become a Professional</Link>
                                </div>
                                <div className='top-left-nav-item'>
                                    <Link className='cart-icon position-relative' to={"/me/cart"}><img src='/images/icone/cart.png' /><span className='cart-item-count'>{cartItems.length}</span></Link>
                                    {isAuthenticated ? <UserOption user={user} />
                                        :
                                        <Link className='cart-icon' to="/LoginSinUp"><img src='/images/icone/login-icon.png' /></Link>
                                    }
                                    <a onClick={() => { setIsopen(!Isopen); }} className='cart-icon' to={"/me/cart"}><img src='/images/icone/menu-icon.png' /></a>
                                </div>


                            </nav>


                        </div>
                        <div ref={menuRef} id="sidenav-1 " className={Isopen ? " sideNave-left-1000 sidenav" : " sidenav"} role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
                            <ul ref={menuRef} className="sidenav-menu">



                                <li className="sidenav-item-1">
                                    <Link to="/LoginSinUp"><a className="nav-link">Become a Professional</a></Link>
                                </li>

                                <li>
                                    <Link className="sidenav-item" to="/not"><a className="nav-link">Help Center</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/abc"><a className="nav-link">Terms & Conditions</a></Link>
                                </li>
                                <li>

                                    <Link className="sidenav-item" to="PrivecyPolicy"><a className="nav-link">Privacy Policy</a></Link>
                                </li>
                                <li>

                                    <Link className="sidenav-item" to="/abc"><a className="nav-link">Interest-Based Advertising</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/abc"><a className="nav-link">Anti Discrimination Policy</a></Link>
                                </li>
                                <li>

                                    <Link className="sidenav-item" to="/abc"><a className="nav-link">Partner Welfare Policy</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/Review"><a className="nav-link">Review</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/abc"><a className="nav-link">Gift Card</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/Career"><a className="nav-link">Careers</a></Link>

                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/About"><a className="nav-link">About Us</a></Link>


                                </li>
                                <li>
                                    <Link className="sidenav-item" to="/ContactUs"><a className="nav-link">Contact Us</a></Link>
                                </li>
                                <li>


                                    <Link className="sidenav-item" to="/Blog"><a className="nav-link">Blog</a></Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </header>


        </>
    )
}

export default Navbar