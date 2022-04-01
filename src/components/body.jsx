import React, { Component } from 'react';
import '../body.css'
import { Button, TextField } from '@mui/material';
import { Input } from '@mui/material';
<<<<<<< HEAD
import { SearchRounded ,ArrowForward, ArrowDownwardRounded} from '@material-ui/icons';
=======
import { SearchRounded ,ArrowForward} from '@material-ui/icons';
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002


class Body
    extends Component {
    state = {}

    styles = {
<<<<<<< HEAD
        paddingTop:'100px',
        backgroundImage: 'url(/rd_car.jpg)',
        backgroundSize: 'cover',
        textAlign: 'left',
        height: 'max-content'
    }
    
=======
        backgroundImage: 'url(/rd_car.jpg)',
        backgroundSize: 'cover',
        textAlign: 'left',
        height: '100vh'
    }
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002

    copts = [
        {
            text:'Hello'
        },
        {
            text:'Hello'
        },
        {
            text:'Hello'
        }
    ]





    render() {
        return (

            <div className="main-body w-100" style={this.styles}>

                <div className="gap"></div>


<<<<<<< HEAD
                <div className="container body" style={{ padding: '5rem' }}>
=======
                <div className="container body" style={{ padding: '100px' }}>
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002
                    <h2>
                        FIND THE ENGINE THAT WILL TAKE YOU TO YOUR DESTINATION IN STYLE.
                    </h2>
                </div>

<<<<<<< HEAD
                <div className="justify-content-center m-4 p-4" style={{ textAlign: 'center' }}>
=======
                <div className="justify-content-center m-4" style={{ textAlign: 'center' }}>
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002
                    <Button
                        variant='contained'
                        color='error'
                        className='centerBtn'

                    >RENT A RIDE.</Button>
                </div>

<<<<<<< HEAD
                <div className="input-group w-100 justify-content-center p-4" style={{ textAlign: 'center' }}>
                    <TextField
                        color='error'
                        variant='outlined'
                        sx={{borderColor:'red', input: { color: 'white' }}}
=======
                <div className="input-group w-100 justify-content-center" style={{ textAlign: 'center' }}>
                    <TextField
                        color='error'
                        variant='outlined'
                        sx={{ width: '300px',borderColor:'red', input: { color: 'white' }}}
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002
                        label='Find your ride'
                    />
                    <Button
                        variant='contained'
                        color='error'
                    >
                        <SearchRounded />
                    </Button>


                </div>


<<<<<<< HEAD
                <div className="explore justify-content-center w-100">
                    
                        <h3 style={{fontSize:'20sp'}} className="link2 w-100 p-2">Explore</h3>
                        <ArrowDownwardRounded   />
=======
                <div className="explore justify-content-center w-100" style={{textAlign:'-webkit-center',color:'white' ,textTransform:'uppercase', font:'20px', padding:'300px'}}>
                    
                        <h3 className="link2 w-100 p-2">Explore</h3>
                        <ArrowForward   />
>>>>>>> 7b54bcd68f5f6d785f7df4e01cc5b02c44e9a002

                    
                </div>
            </div>




        );
    }
}

export default Body
    ;
