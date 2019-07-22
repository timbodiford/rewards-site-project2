import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


export default class SingleProduct extends Component {

    state = {
        product: {}
    }

    componentDidMount() {
        axios.get(`/api/products/${this.props.match.params.productId}`)
            .then((res) => {
                this.setState({ product: res.data })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />

        }
        return (
            <div>
                <p>Individual Product should show here:</p>
                
                <h5>{this.state.product.productName}</h5>
                <p>{this.state.product.productDescription}</p>
                <p>{this.state.product.pointsRequired} points required</p>
                <img src={this.state.product.productImage} width='150' alt='img'></img>





                <Link to='/'>
                    <button type="button">Back to Products</button>
                </Link>
            </div>
        )
    }
}
