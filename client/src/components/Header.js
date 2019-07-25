import React, { Component } from 'react'
import { Redirect, Router, Switch, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="img-name">
                    <img src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-delta-skymiles.png" width="155 px" />
                    <h1>Rewards Site</h1>
                </div>
                <a href="/">Users</a>
                <a href="/products">Products</a>
                <div>

                    {/* <Link to={'/'}>Users</Link>

                    <Link to={'/products'}>Products</Link> */}
                </div>
            </div>


        )
    }
}
