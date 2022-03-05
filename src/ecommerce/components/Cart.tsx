import produce from 'immer'
import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart } from '../redux/actions'

const Cart = () => {
    const state = useSelector((state: any) => state.handleCart)
    const dispatch = useDispatch()

    // const [product, setProduct] = useState<any>([])
    // const [loading, setLoading] = useState(false)
    // // const { id } = useParams()

    // // const addProduct = (product: any) => dispatch(addCart(product))

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true)
    //         const response = await fetch(`https://fakestoreapi.com/products/`);
    //         setProduct(await response.json())
    //         setLoading(false)
    //     }
    //     getProducts()
    // }, [])

    const Loading = () => <>
        <div className="col-md-12 pb-5">
            <Skeleton height={400} />
        </div>
    </>

    const handleClose = (item: any) => dispatch(deleteCart(item))


    const handleButton = (product: any) => dispatch((product))

    const cartItems = (cartItem: any) => {
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="conatiner py-4">
                <button onClick={() => handleClose(cartItem)} className="btn-close float-end"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        {/* <img src="ttps://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="image" /> */}
                        <img src={cartItem.image} alt={cartItem.title} width="180px" height="200px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <div className="lead fw-bold">${cartItem.price}</div>
                    </div>
                </div>
            </div>
        </div>
    }

    const emptyCart =()=> (
        <div className="rounded px-4 my-5 bg-light">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Car is Empty!!</h3>
                </div>
            </div>
        </div>
    )

    const Button =()=> (
            <div className="container py-4">
                <div className="row">
                    <Link to="/checkout">Process to Checkout</Link>
                </div>
            </div>
    
    )

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && Button()}
        </>
    )
}

export default Cart






// return (
//     <div className="row container mx-auto">
//         <div className="col-md-4">
//             <img src={product.image} alt={product.title} height="200px" width="180px" />
//         </div>
//         <div className="col-md-4">
//             <h3>{product.title}</h3>
//             <p className="lead fw-bold">
//                 {product.qty} X ${product.price} = ${product.qty * product.price}
//             </p>
//             <button onClick={() => handleButton(product)} className="btn btn-outline-dark me-4"><i className="fa fa-minus"></i> icon -</button>
//             <button onClick={() => handleButton(product)} className="btn btn-outline-dark me-4"><i className="fa fa-plus"></i> icon +</button>

//         </div>
//     </div>
// )