import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




export default class SingleProduct extends Component {

    state = {
        product: {}
    }

    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts() {
        axios.get(`/api/products/${this.props.match.params.productId}`)
            .then((res) => {
                this.setState({ product: res.data })
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleEdit = (event) => {
        event.preventDefault()

        axios.put(`/api/products/${this.state.product._id}`, this.state.product)
            .then((res) => {
                this.setState({
                    user: res.data,
                    isEditFormDisplayed: false
                })

            })
    }

    handleInputEdit = (event) => {
        const copiedProduct = { ...this.state.product }
        copiedProduct[event.target.name] = event.target.value

        this.setState({ product: copiedProduct })
    }

    handleDelete = () => {
        axios.delete(`/api/products/${this.state.product._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })
                this.getAllProducts()
            })
    }



    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/api/products' />

        }
        return (

            this.state.isEditFormDisplayed
                ?
                <div>
                    <form id="editProduct" onSubmit={this.handleEdit}>
                        <TextField
                            id="productName"
                            label="Product Name"
                            name="productName"
                            onChange={this.handleInputEdit}
                            value={this.state.product.productName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="productDescription"
                            label="Product Description"
                            name="productDescription"
                            onChange={this.handleInputEdit}
                            value={this.state.product.productDescription}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="pointsRequired"
                            label="Points Required"
                            name="pointsRequired"
                            onChange={this.handleInputEdit}
                            value={this.state.product.pointsRequired}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="productImage"
                            label="Product Image"
                            name="productImage"
                            onChange={this.handleInputEdit}
                            value={this.state.product.productImage}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="category"
                            label="Category"
                            name="category"
                            onChange={this.handleInputEdit}
                            value={this.state.product.category}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                    <div className="form-buttons">

                        <Button variant="contained" type="submit" form="editProduct">Save Changes</Button>

                        <Button variant="contained" onClick={this.handleToggleEditForm}>Cancel</Button>
                    </div>
                </div >
                :
                <div>
                    <div>
                        <p>Individual Product should show here:</p>

                        <h5>{this.state.product.productName}</h5>
                        <p>{this.state.product.productDescription}</p>
                        <p>{this.state.product.pointsRequired} points required</p>
                        <img src={this.state.product.productImage} width='150' alt='img'></img>

                    </div>
                        <Button variant="contained" onClick={this.handleToggleEditForm}>Edit Product</Button>
                        <Button variant="contained" onClick={this.handleDelete}>Delete Product</Button>
                        <Button variant="contained" href='/products'>Back to Products</Button>


                    {/* <Link to='/products'>
                        <button type="button">Back to Products</button>
                    </Link> */}
                </div>
        )
    }
}
