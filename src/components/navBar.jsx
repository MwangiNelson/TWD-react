import React, { Component } from 'react';
import '../body.css';
import { Button } from '@mui/material';
import { HomeRounded, AccountCircleRounded, MenuSharp, SortSharp } from '@material-ui/icons';


class Navbar extends Component {
    state = {
    }





    render() {
        return (
            <nav className="home-nav p-0 w-100"
                style={
                    { background: 'white' }
                }
            >
                <div className="row justify-content-between nav p-0 body-head">

                    <div className="col-sm p-2 logo-box w-50" style={{ marginLeft: '5px' }} >
                        <img style={{ width: '10rem', height: '5rem', objectFit: 'cover' }} src="/The Wheel Deal red.png" alt="The Wheel Deal Logo" />
                    </div>

                    <div className="col-4 justify-content-center">
                        <div className="navbar navbar-expand-md w-100 ml-0 h-100 justify-content-end nav-options">
                            <div className="collapse navbar-collapse" id='navbarNav'>
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
                            <span className="navbar-toggler ellipsis" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ><MenuSharp /></span>
                        </div>
                    </div>




                </div>
            </nav>




        );
    }
}

export default Navbar;