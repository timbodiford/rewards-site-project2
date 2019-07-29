
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';






export default class users extends Component {

    state = {
        users: [],
        newUser: {
            firstName: '',
            lastName: '',
            email: '',
            isAdmin: false,
            pointsBalance: '',
            userName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        currentUser: {
            firstName: '',
            lastName: '',
            email: '',
            isAdmin: '',
            pointsBalance: '',
            userName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        isCreateFormDisplayed: false,

    }



    componentDidMount() {

        this.getAllUsers()

    }

    getAllUsers() {
        axios.get('/api/users')
            .then((res) => {
                this.setState({ users: res.data })
            })
    }

    handleToggleCreateForm = () => {
        this.setState((state) => {
            return { isCreateFormDisplayed: !state.isCreateFormDisplayed }
        })

    }

    handleCreate = (event) => {
        event.preventDefault()

        axios.post('/api/users', this.state.newUser)
            .then((res) => {
                this.setState({ isCreateFormDisplayed: false })
                this.getAllUsers()
            })
    }

    handleInputCreate = (event) => {

        const copiedUser = { ...this.state.newUser }
        copiedUser[event.target.name] = event.target.value

        this.setState({ newUser: copiedUser })
    }

    handleSelectUser = (event) => {
        console.log(event.target.value)
        axios.get(`/api/users/${event.target.value}`)
            .then((res) => {
                this.setState({ currentUser: res.data })
                console.log(this.state.currentUser)
            })

    }




    render() {

        let usersList = this.state.users.map((user) => {
            return (
                <div key={user._id}>
                    <Link key={user._id} to={`/users/${user._id}`}> {`${user.firstName} ${user.lastName}`}</Link>
                    <p>{user.pointsBalance} Available Points</p>
                </div>
            )
        })

        // let users = this.state.users.map((user) => {
        //     return (

        //         <option key={user._id} value={user._id}>{user.firstName} {user.lastName} {user.pointsBalance} points</option>

        //     )
        // })
        return (

            this.state.isCreateFormDisplayed
                ?
                <div>
                    <form id="adduser" onSubmit={this.handleCreate}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.firstName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.lastName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.email}
                            margin="normal"
                            variant="outlined"
                        />


                        <FormControl >
                            <InputLabel htmlFor="isAdmin" className="isadmin">Is Admin?</InputLabel>
                            <Select
                                value={this.state.newUser.isAdmin || false}
                                onChange={this.handleInputCreate}
                                inputProps={{
                                    name: 'isAdmin',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="pointsBalance"
                            label="Points Balance"
                            name="pointsBalance"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.pointsBalance}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="userName"
                            label="User Name"
                            name="userName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.userName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="address"
                            label="Address"
                            name="address"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.address}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="city"
                            label="City"
                            name="city"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.city}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="state"
                            label="State"
                            name="state"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.state}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="zip"
                            label="Zip Code"
                            name="zip"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.zip}
                            margin="normal"
                            variant="outlined"
                        />

                    </form>
                    <div className="form-buttons">

                        <Button variant="contained" type="submit" form="adduser">Add User</Button>
                        <Button variant="contained" onClick={this.handleToggleCreateForm}>Cancel</Button>
                    </div>
                </div>
                :
                <div className="top-buttons">
                    <Button variant="contained" onClick={this.handleToggleCreateForm}>Add New User</Button>
                    {/* <p>Welcome: {this.state.currentUser.firstName}!</p>
                    <p>You have {this.state.currentUser.pointsBalance} points.</p>
                    <h4>Select an existing user below</h4>


                    <form>
                        <select value={this.state.value} onChange={this.handleSelectUser}>
                            {users}
                        </select>
                        <button onClick={this.currentUser}>View User</button>

                    </form> */}
                    {/* <Button variant="contained" key={this.state.currentUser._id} to={`/users/${this.state.currentUser._id}`}>Edit User</Button> */}
                    
                    <div className="userslist">
                    {usersList}
                    </div>

                </div>
        )
    }
}