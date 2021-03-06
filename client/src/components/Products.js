import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




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

     refreshPage() {
        window.location.reload(false);
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
                this.setState({ isCreateFormDisplayed: false })
                this.setState({newproduct: {} })
                this.getAllProducts()
                // this.refreshPage()

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
            return (


                <Card key={product._id} style={{ width: 250, height: 400, margin: 8 }} >
                    <CardActionArea>

                        <Link key={product._id} to={`/products/${product._id}`}>
                            {
                                <img src={product.productImage} height='150' alt="#"></img>
                            }
                        </Link>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {`${product.productName.substring(0, 20)}  `}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                {product.pointsRequired} points
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {`${product.productDescription.substring(0, 100)} ...`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button style={{ width: "300px" }}>Buy</Button>
                    </CardActions>
                </Card>



            )
        })


        return (
            this.state.isCreateFormDisplayed
                ?
                <div>
                    <form id="addproduct" onSubmit={this.handleCreate}>

                        <TextField
                            id="productName"
                            label="Product Name"
                            name="productName"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="productDescription"
                            label="Product Description"
                            name="productDescription"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productDescription}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="pointsRequired"
                            label="Points Required"
                            name="pointsRequired"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.pointsRequired}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="productImage"
                            name="productImage"
                            label="Image Link"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.productImage}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="category"
                            name="category"
                            label="Category"
                            onChange={this.handleInputCreate}
                            value={this.state.newProduct.category}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                    <div className="form-buttons">
                        <Button variant="contained" type="submit" form="addproduct">Add Product</Button>
                        <Button variant="contained" onClick={this.handleToggleCreateForm}>Cancel</Button>
                    </div>
                </div >
                :
                <div >


                    <Button variant="contained" onClick={this.handleToggleCreateForm}>Add New Product</Button>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#6497b1' }}>{productsList}</div>


                </div>
        )
    }
}




