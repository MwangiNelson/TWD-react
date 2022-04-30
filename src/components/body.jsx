import React, { Component } from 'react';
import '../body.css'
import { SearchRounded, ArrowDownwardRounded } from '@material-ui/icons';

const Body = () => {


    const styles = {
        paddingTop: '100px',
        backgroundImage: 'url(/rd_car.jpg)',
        backgroundSize: 'cover',
        textAlign: 'left',
        height: 'max-content'

    }

    const myStyle = {
        fontFamily: [
            'Barlow Condensed',
            'sans-serif'
        ].join(',')
    }

    const inputStyle = {
        input: {
            color: 'white'
        }
    }

    const textfontStyle = {
        '&:label': {
            fontFamily: [
                'Barlow Condensed',
                'sans-serif'
            ].join(',')
        }
    }



    return (

        <div className="entireBody">
            <div className="main-body w-100" style={styles}>



                <div className="container body" style={{ padding: '5rem' }}>
                    <h2>
                        FIND THE ENGINE THAT WILL TAKE YOU TO YOUR DESTINATION IN STYLE.
                    </h2>
                </div>

                <div className="justify-content-center m-4 p-4" style={{ textAlign: 'center' }} >
                    <button className="btn btn-danger">
                        RENT A RIDE
                    </button>
                </div>



                <div className="input-group w-100 justify-content-center" style={{ textAlign: 'center' }}>

                   


                
                </div>




                <div className="explore justify-content-center w-100">

                    <h3 style={{ fontSize: '20sp' }} className="link2 w-100 p-2">Explore</h3>
                    <ArrowDownwardRounded />

                </div>

            </div>
        </div>

    )
}

export default Body;
