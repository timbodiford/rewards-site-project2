import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'


export default class Products extends Component {

    state = {
        products: [],
        newProduct: {
            productName: '',
            productDescription: '',
            pointsRequired: '',
            productImage: '',
            category: ''
        }
    }

    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts() {
        axios.get('/api/products')
            .then((res) => {
                this.setState({ products: res.data })
            })
    }

    handleToggleCreateForm = () => {
        this.setState((state) => {
            return { isCreateFormDisplayed: !state.isCreateFormDisplayed }
        })

    }

    handleCreate = (event) => {
        event.preventDefault()

        axios.post('/api/products', this.state.newProduct)
        .then((res) => {
            this.setState({ isCreateFormDisplayed: false})
        })
    }

    handleInputCreate = (event) => {
        const copiedProduct = { ...this.state.newProduct }
        copiedProduct[event.target.name] = event.target.value

        this.setState({ newProduct: copiedProduct })
        this.getAllProducts()
    }


    render() {

        let productsList = this.state.products.map((product) => {
            return <Link key={product._id} to={`/products/${product._id}`}>{`${product.productName}`}</Link>
        })
        return (
            this.state.isCreateFormDisplayed
                ?
                <div>
                    <form onSubmit={this.handleCreate}>

                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productName}
                        />

                        <label htmlFor="productDescription">Product Description</label>
                        <input
                            type="text"
                            id="productDescription"
                            name="productDescription"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productDescription}
                        />

                        <label htmlFor="pointsRequired">Points Required</label>
                        <input
                            type="text"
                            id="pointsRequired"
                            name="pointsRequired"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.pointsRequired}
                        />

                        <label htmlFor="productImage">Product Image</label>
                        <input
                            type="text"
                            id="productImage"
                            name="productImage"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productImage}
                        />

                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.category}
                        />
                        <input type="submit" value="Add User" />
                    </form>
                    <button onClick={this.handleToggleCreateForm}>Cancel</button>
                </div>
                :
                <div>
                    This will be the products page



                <div>{productsList}</div>

                    <button onClick={this.handleToggleCreateForm}>Add New Product</button>
                    <Link to='/'>
                        <button type="button">Back to Products</button>
                    </Link>
                </div>
        )
    }
}
