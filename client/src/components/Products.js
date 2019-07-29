import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import { Hidden } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import { blue } from '@material-ui/core/colors';



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
                this.setState({ isCreateFormDisplayed: false })
                this.getAllProducts()
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
                // <Card >
                //     <CardActionArea>
                //         <CardMedia
                //             image={product.productImage}
                //             title="Product Image"
                //         />
                //         <CardContent>
                //             <Typography gutterBottom variant="h5" component="h2">
                //                 {product.productName}
                //             </Typography>
                //             <Typography variant="body2" color="textSecondary" component="p">
                //                 {product.productDescription}
                //             </Typography>
                //         </CardContent>
                //     </CardActionArea>
                //     <CardActions>
                //         <Button size="small" color="primary">
                //             Share
                //         </Button>
                //         <Button size="small" color="primary">
                //             Learn More
                //         </Button>
                //     </CardActions>
                // </Card >

                <Card style={{ width: 250, height: 400, margin: 8 }} >
                    <CardActionArea>

                        <Link key={product._id} to={`/products/${product._id}`}>
                            {
                                <img src={product.productImage} height='150' alt="#"></img>
                            }
                        </Link>
                        {/* <CardMedia
                            component="img"
                            alt="Product Image"
                            // width="150 px"
                            height="140"
                            image={product.productImage}
                            title="Product Image"

                        /> */}
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



                // <Paper style={{ width: "250px", height: "320px", overflow: "hidden", margin: "8px" }} >
                //     <Grid container spacing={2}>
                //         <Grid item>
                // <Link
                //     key={product._id}
                //     to={`/products/${product._id}`}
                // >
                //     {
                //         <img src={product.productImage} width='150'></img>
                //     }
                // </Link>
                //         </Grid>
                //         <Grid item xs={12} sm container>
                //             <Grid item xs container direction="column" spacing={2}>
                //                 <Grid item xs>
                //                     <Typography gutterBottom variant="subtitle1">
                //                         {product.productName}
                //                     </Typography>
                //                     <Typography variant="body2" color="textSecondary">
                //                         {product.productDescription}
                //                     </Typography>
                //                 </Grid>
                //             </Grid>
                //             <Grid item>
                //                 <Typography variant="subtitle1">{product.pointsRequired} pointsRequired</Typography>
                //             </Grid>
                //         </Grid>
                //     </Grid>
                // </Paper>

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
                        <Button type="submit" form="addproduct">Add Product</Button>
                        <Button onClick={this.handleToggleCreateForm}>Cancel</Button>
                    </div>
                </div >
                :
                <div >


                    <Button onClick={this.handleToggleCreateForm}>Add New Product</Button>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#6497b1' }}>{productsList}</div>


                </div>
        )
    }
}




