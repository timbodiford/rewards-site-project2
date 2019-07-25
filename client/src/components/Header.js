import React, { Component } from 'react'
import { Redirect, Router, Switch, Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Rewards Site</h1>
                <div className="navitems">
                    <Link to={'/'}>Users</Link>
                    <Link to={'/products'}>Products</Link>
                </div>
            </div>
        )
    }
}
