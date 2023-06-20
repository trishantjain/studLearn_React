import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    let { Component } = props
    let history = useNavigate();
    useEffect(()=>{
        let check_login = localStorage.getItem('token')
        // let check_login = true;
        if(!check_login){
            // console.log("question route accesed");
            history('/login');
        }
    });

    return (
        <>
            <Component />
        </>
    )
}

export default Protected
