import React, { Component } from 'react'
import axios from 'axios'
import { Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default class SingleUser extends Component {


    state = {
        user: {},
        isEditFormDisplayed: false,
        redirectToHome: false

    }

    componentDidMount() {
        this.getUser()
    }

    getUser() {
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
        console.log(this.state.user)
    }

    refreshPage() {
        window.location.reload(false);
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

        this.setState({ user: copiedUser })
    }

    handleDelete = () => {
        axios.delete(`/api/users/${this.state.user._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })

            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />

        }
        return (
            this.state.isEditFormDisplayed
                ?
                <div>
                    <form id="editUser" onSubmit={this.handleEdit}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleInputEdit}
                            value={this.state.user.firstName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleInputEdit}
                            value={this.state.user.lastName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={this.handleInputEdit}
                            value={this.state.user.email}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="isAdmin"
                            label="Is Admin User?"
                            name="isAdmin"
                            onChange={this.handleInputEdit}
                            value={this.state.user.isAdmin}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="pointsBalance"
                            label="Points Balance"
                            name="pointsBalance"
                            onChange={this.handleInputEdit}
                            value={this.state.user.pointsBalance}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="userName"
                            label="User Name"
                            name="userName"
                            onChange={this.handleInputEdit}
                            value={this.state.user.userName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="Address"
                            id="address"
                            name="address"
                            onChange={this.handleInputEdit}
                            value={this.state.user.address}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="city"
                            label="City"
                            name="city"
                            onChange={this.handleInputEdit}
                            value={this.state.user.city}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="state"
                            label="State"
                            name="state"
                            onChange={this.handleInputEdit}
                            value={this.state.user.state}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="zip"
                            label="Zip Code"
                            name="zip"
                            onChange={this.handleInputEdit}
                            value={this.state.user.zip}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                    <div className="form-buttons">

                        <Button variant="contained" type="submit" form="editUser">Save Changes</Button>
                        <Button variant="contained" onClick={this.handleToggleEditForm}>Cancel</Button>
                    </div>
                </div>



                :
                <div>
                    <p>Individual User should show here:</p>

                    <h5>{this.state.user.firstName}</h5>
                    <h5>{this.state.user.lastName}</h5>

                    <Button variant="contained" onClick={this.handleToggleEditForm}>Edit User</Button>
                    <Button variant="contained" onClick={this.handleDelete}>Delete User</Button>

                    <Button variant="contained" type="button" href='#'>Shop</Button>



                    <Button variant="contained" type="button" href='/'>Back to Users</Button>
                </div>
        )
    }
}
