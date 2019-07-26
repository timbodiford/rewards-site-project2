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
// import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div class="navwrapper">
                    <div>
                        <img width="300 px" src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-delta-skymiles.png" />
                    </div>
                    <div>
                        <h1>Rewards Site</h1>
                    </div>
                </div>
                <div class="navcontainer">
                    <Grid container spacing={4}>

                        <Grid style={{ margin: 20}} item xs={12}>
                            <ButtonGroup variant="contained" color="primary" fullWidth aria-label="full width outlined button group" >
                                <Button href="/">Users</Button>
                                <Button href="/products">Products</Button>
                                <Button >TBD</Button>

                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>

            </div>






        )
    }
}
