import React, { Component } from 'react'
import { Redirect, Router, Switch, Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div>
                <p>Rewards Site</p>                
                <Link to={'/'}>Users</Link>

                <Link to={'/products'}>Products</Link>
            </div>
        )
    }
}
