import React, {useRef} from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { CloseSharp } from '@material-ui/icons';
import './login.css';
import CommonButton from "./space.style";


export const LoginForm = ({ showLogin, setShowLogin }) => {
    const thisWidth = {
        width: '10rem'
    }
    const bg = {
        backgroundColor: "#fff",
        height: "max-content",
        width: "30rem",
        textAlign: "center",
        top: "5rem",
        zIndex: 100,
    };
    const myStyle = {
        fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
        textAlign: "center",
        textTransform: "uppercase",
    }; 

    const linkStyle = {
        textDecoration: "none",
    };
    const linkLine = {
        textAlign: "center",
    };

    const modalRef = useRef()

    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowLogin(!showLogin);
        }
    }



    return <>
        {
            showLogin ?
                <div className="rearBackground" ref={modalRef} onClick={closeModal}>
                    <div className="whiteField container-sm mt-3" style={bg}>
                        <div className="row exit">
                            <button className="btn btn-danger" style={{ width: "50px" }} onClick={() => {
                                setShowLogin(!showLogin);
                            }} >
                                <CloseSharp />
                            </button>

                        </div>

                        <div className="row p-4 opt" style={myStyle}>
                            <h2>sign in</h2>
                        </div>

                        <div className="row p-4">
                            <TextField
                                label="Username/Email"
                                color="primary"
                                sx={{ input: { color: "black" } }}
                                type="email"
                                required
                            />
                        </div>
                        <div className="row p-4">
                            <TextField
                                label="Password"
                                color="primary"
                                sx={{ input: { color: "white" } }}
                                type="password"
                                required
                            />
                        </div>

                        <div className="row p-4">
                            <CommonButton variant="contained" sx={myStyle}>
                                Login
                            </CommonButton>
                        </div>


                        <div className="row p-4" style={linkLine}>
                            <p>
                                Don't have an account?{" "}
                                <a href="" style={linkStyle}>
                                    Sign Up Here.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                : null
        }


    </>
}
