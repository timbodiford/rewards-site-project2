import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="#">Privacy Policy</Button>
                <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="#">About Us</Button>
                <Button style={{ width: 250, color: 'white', fontWeight: 'bold' }} href="#">Contact Us</Button>
            </footer>

        )
    }
}
