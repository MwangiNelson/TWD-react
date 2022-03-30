import React, { Component } from 'react';
import '../navbar.css';
import { Button } from '@mui/material';
import { HomeRounded, AccountCircleRounded } from '@material-ui/icons';
import { height } from '@mui/system';

class Navbar extends Component {
    state = {
    }





    render() {
        return (
            <nav className="home-nav p-0 w-100"
                style={
                    { background: 'black' }
                }
            >
                <div className="row justify-content-between nav p-0 body-head">

                    <div className="col-sm p-2 logo-box"  style={{marginLeft:'5px'}} >
                        <img style={{ width: '200px' , height:'100px',objectFit:'cover'}} src="/The Wheel Deal red.png" />
                    </div>

                    <div className="col-4 justify-content-center">
                        <div className="navbar navbar-expand-md w-100 ml-0 h-100 justify-content-end nav-options">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav w-100 justify-content-end">
                                    <li className="nav-item p-2">
                                        <Button
                                            color='error'
                                            variant='text'
                                        >
                                            <HomeRounded
                                            />
                                            Home
                                        </Button>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Button
                                            color='error'
                                            variant='outlined'

                                        >Download</Button>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Button

                                            color='error'
                                            variant='text'

                                        >
                                            <AccountCircleRounded />
                                            Login
                                        </Button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>




                </div>
            </nav>




        );
    }
}

export default Navbar;