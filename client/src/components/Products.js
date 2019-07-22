import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'


export default class Products extends Component {

    state = {
        products: []
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
    render() {

        let productsList = this.state.products.map((product) => {
            return <Link key={product._id} to={`/products/${product._id}`}>{`${product.productName}`}</Link>
        })
        return (
            <div>
                This will be the products page



                <div>{productsList}</div>


                <Link to='/'>
                    <button type="button">Back to Products</button>
                </Link>
            </div>
        )
    }
}
