import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../redux/actions'

const Product = () => {
    const [product, setProduct] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const dispatch = useDispatch()
    const addProduct = (product: any) => dispatch(addCart(product))

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false)
            console.log(product, "productproductproductproduct")
        }
        getProducts()
    }, [])

    const Loading = () => <>
        <div className="col-md-6 pb-5">
            <Skeleton height={400} />
        </div>
        <div className="col-md-6 pb-5">
            <Skeleton height={50} width={300} />
            <Skeleton height={70} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={400} style={{ marginLeft: 0 }} />
        </div>
    </>

    console.log(product, "productproductproduct")

    const ShowProducts = () => (
        <>
            <div className="col-md-6 my-3">
                <img src={product.image} className="card-img-top" height="400px" width="400px" alt={product.title} />
            </div>
            <div className="col-md-6 my-3">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}</p>
                <i className="fa fa-star"></i>
                <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button onClick={() => addProduct(product)} className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-3 px-4 py-2">Go To Cart</NavLink>
            </div>
        </>
    )



    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : ShowProducts()}
            </div>
        </div>
    )
}

export default Product