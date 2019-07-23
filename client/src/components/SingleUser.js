import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


export default class SingleUser extends Component {

    state = {
        user: {},
        isEditFormDisplayed: false,
        redirectToHome: false

    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers() {
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
        console.log(this.state.user)
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleEdit = (event) => {
        event.preventDefault()

        axios.put(`/api/users/${this.state.user._id}`, this.state.user)
            .then((res) => {
                this.setState({
                    user: res.data,
                    isEditFormDisplayed: false
                })

            })
    }

    handleInputEdit = (event) => {
        const copiedUser = { ...this.state.user }
        copiedUser[event.target.name] = event.target.value

        this.setState({ user: copiedUser})
    }

    handleDelete = () => {
        axios.delete(`/api/users/${this.state.user._id}`)
        .then(() => {
            this.setState({redirectToHome: true})

        })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />

        }
        return (
            this.state.isEditFormDisplayed
                ?
            
                <form onSubmit={this.handleEdit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={this.handleInputEdit}
                        value={this.state.user.firstName}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={this.handleInputEdit}
                        value={this.state.user.lastName}
                    />

                    <label htmlFor='email'>Email Address</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={this.handleInputEdit}
                        value={this.state.user.email}
                    />

                    <label htmlFor='isAdmin'>Admin User?</label>
                    <input
                        type="text"
                        id="isAdmin"
                        name="isAdmin"
                        onChange={this.handleInputEdit}
                        value={this.state.user.isAdmin}
                    />

                    <label htmlFor='pointsBalance'>Points pointsBalance</label>
                    <input
                        type="text"
                        id="pointsBalance"
                        name="pointsBalance"
                        onChange={this.handleInputEdit}
                        value={this.state.user.pointsBalance}
                    />

                    <label htmlFor='userName'>User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        onChange={this.handleInputEdit}
                        value={this.state.user.userName}
                    />

                    <label htmlFor='address'>Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={this.handleInputEdit}
                        value={this.state.user.address}
                    />

                    <label htmlFor='city'>City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={this.handleInputEdit}
                        value={this.state.user.city}
                    />

                    <label htmlFor='state'>state</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        onChange={this.handleInputEdit}
                        value={this.state.user.state}
                    />

                    <label htmlFor='zip'>Zip Code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        onChange={this.handleInputEdit}
                        value={this.state.user.zip}
                    />
                    <input type="submit" value="Save Changes" />
                    <button onClick={this.handleToggleEditForm}>Cancel</button>

                </form>



            :
                <div>
                    <p>Individual User should show here:</p>

                    <h5>{this.state.user.firstName}</h5>
                    <h5>{this.state.user.lastName}</h5>

                    <button onClick={this.handleToggleEditForm}>Edit User</button>
                    <button onClick={this.handleDelete}>Delete User</button>





                    <Link to='/'>
                        <button type="button">Back to Users</button>
                    </Link>
                </div>
        )
    }
}
