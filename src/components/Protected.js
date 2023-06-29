import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    let { Component } = props
    let history = useNavigate();
    useEffect(()=>{
        let check_login = localStorage.getItem('token')
        if(!check_login){
            history('/login');
            alert("Login first")
        }
    });

    return (
        <>
            <Component />
        </>
    )
}

export default Protected
