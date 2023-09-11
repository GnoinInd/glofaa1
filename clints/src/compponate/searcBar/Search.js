import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAdminProduct } from "../../actions/adminProductAction";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate =useNavigate();
    const {
        products,
        loading, error
      } = useSelector((state) => state.adminproduct);
    

 
    const handleOnSelect = (products) => {
        navigate (`/product/${products._id}`)
        console.log(products)
    }
 
    const dispatch = useDispatch();

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      dispatch(getAdminProduct(error));
    }, [dispatch, error,]);
  

    return (
        <div className='search-bar' style={{ width: "35%", zIndex: "100" }}>

            <ReactSearchAutocomplete
                items={products}
                fuseOptions={{ keys: ["name", "catogery"] }} // Search on both fields
                resultStringKeyName="name" // String to display in the results
                onSelect={handleOnSelect}
                placeholder='Search'

                styling={{
                    height: "35px",
                    cursor:'pointer',
                    hoverBackgroundColor: "lightblue",
                    color: "darkblue",
                    iconColor: "#807CE1",
                    lineColor: "#807CE1",
                    placeholderColor: "darkblue",
                    fontFamily: 'Poppins',
                    placeholderfontFamily:'Poppins',
                    fontStyle: "normal",
                    fontWeight: 500,
                    zIndex: 2,
                }}
            />
        </div>
    )
}

export default Search