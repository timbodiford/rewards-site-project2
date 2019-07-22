import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


export default class SingleUser extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
            console.log(this.state.user)
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />

        }
        return (
            <div>
                <p>Individual User should show here:</p>
                
                <h5>{this.state.user.firstName}</h5>
                <h5>{this.state.user.lastName}</h5>




                <Link to='/'>
                    <button type="button">Back to Users</button>
                </Link>
            </div>
        )
    }
}
