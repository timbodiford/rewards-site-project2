import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


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
            this.setState({redirectToHome: true})

        })
    }



    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/api/products' />

        }
        return (

            this.state.isEditFormDisplayed
                ?
                <form onSubmit={this.handleEdit}>
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        onChange={this.handleInputEdit}
                        value={this.state.product.productName}
                    />

                    <label htmlFor="productDescription">Product Description</label>
                    <input
                        type="text"
                        id="productDescription"
                        name="productDescription"
                        onChange={this.handleInputEdit}
                        value={this.state.product.productDescription}
                    />

                    <label htmlFor="pointsRequired">Points Required</label>
                    <input
                        type="text"
                        id="pointsRequired"
                        name="pointsRequired"
                        onChange={this.handleInputEdit}
                        value={this.state.product.pointsRequired}
                    />

                    <label htmlFor="productImage">Product Image</label>
                    <input
                        type="text"
                        id="productImage"
                        name="productImage"
                        onChange={this.handleInputEdit}
                        value={this.state.product.productImage}
                    />

                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={this.handleInputEdit}
                        value={this.state.product.category}
                    />
                    <input type="submit" value="Add Product" />

                    <button onClick={this.handleToggleEditForm}>Cancel</button>
                </form>
                :
                <div>
                    <p>Individual Product should show here:</p>

                    <h5>{this.state.product.productName}</h5>
                    <p>{this.state.product.productDescription}</p>
                    <p>{this.state.product.pointsRequired} points required</p>
                    <img src={this.state.product.productImage} width='150' alt='img'></img>

                    <button onClick={this.handleToggleEditForm}>Edit Product</button>
                    <button onClick={this.handleDelete}>Delete Product</button>




                    <Link to='/products'>
                        <button type="button">Back to Products</button>
                    </Link>
                </div>
        )
    }
}
