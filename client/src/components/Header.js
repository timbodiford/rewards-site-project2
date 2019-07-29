import React, { Component } from 'react'

import Button from '@material-ui/core/Button';



export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="navwrapper">
                    <div>
                        <img width="300 px" alt="cardimage" src="http://a3papersize.org/wp-content/uploads/2018/09/credit-cards-numbers-1.png" />
                    </div>
                    <div>
                        <h1>Rewards Site</h1>
                    </div>

                </div>
                <div className="navcontainer">

                    <div className="navmenu" style={{ width: '100vw' }}>
                        <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="/">Users</Button>
                        <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="/products">Products</Button>
                        <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="/products">TBD</Button>
                    </div>
                </div>

            </div>






        )
    }
}
