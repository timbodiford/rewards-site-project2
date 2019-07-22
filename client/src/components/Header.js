import React, { Component } from 'react'
import { Redirect, Router, Switch, Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div>
                This will be the Header
                <Link to={'/'}>Users</Link>

                <Link to={'/products'}>Products</Link>
            </div>
        )
    }
}
