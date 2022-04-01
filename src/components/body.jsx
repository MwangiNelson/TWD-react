import React, { Component } from 'react';
import '../body.css'
import { Button, TextField } from '@mui/material';
import { Input } from '@mui/material';
import { SearchRounded, ArrowForward, ArrowDownwardRounded } from '@material-ui/icons';


class Body
    extends Component {
    state = {}

    styles = {
        paddingTop: '100px',
        backgroundImage: 'url(/rd_car.jpg)',
        backgroundSize: 'cover',
        textAlign: 'left',
        height: 'max-content'
    };

    copts = [
        {
            text: 'Hello'
        },
        {
            text: 'Hello'
        },
        {
            text: 'Hello'
        }
    ]





    render() {
        return (

            <div className="main-body w-100" style={this.styles}>

                <div className="gap"></div>


                <div className="container body" style={{ padding: '5rem' }}>
                    <h2>
                        FIND THE ENGINE THAT WILL TAKE YOU TO YOUR DESTINATION IN STYLE.
                    </h2>
                </div>


                <div className="justify-content-center m-4" style={{ textAlign: 'center' }}>

                    <Button
                        variant='contained'
                        color='error'
                        className='centerBtn'

                    >RENT A RIDE.</Button>
                </div>



                <div className="input-group w-100 justify-content-center" style={{ textAlign: 'center' }}>
                    <TextField
                        color='error'
                        variant='outlined'
                        sx={{ width: '300px', borderColor: 'red', input: { color: 'white' } }}
                        label='Find your ride'
                    />
                    <Button
                        variant='contained'
                        color='error'
                    >
                        <SearchRounded />
                    </Button>


                </div>



                <div className="explore justify-content-center w-100">

                    <h3 style={{ fontSize: '20sp' }} className="link2 w-100 p-2">Explore</h3>
                    <ArrowDownwardRounded />

                    <div className="explore justify-content-center w-100" style={{ textAlign: '-webkit-center', color: 'white', textTransform: 'uppercase', font: '20px', padding: '300px' }}>

                        <h3 className="link2 w-100 p-2">Explore</h3>
                        <ArrowForward />


                    </div>
                </div>
            </div>




        );
    }
}

export default Body
    ;
