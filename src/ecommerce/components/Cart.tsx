import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    // const state = useSelector(state => state.handleCart())

    const [product, setProduct] = useState<any>([])
    const [loading, setLoading] = useState(false)
    // const { id } = useParams()

    const dispatch = useDispatch()
    // const addProduct = (product: any) => dispatch(addCart(product))

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/`);
            setProduct(await response.json())
            setLoading(false)
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

    const handleButton = (product: any) => dispatch((product))

  return (
    <div className="row">
        <div className="col-md-4">
            <img src={product.image} alt={product.title} height="200px" width="180px" />
        </div>
        <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
                {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
            <button onClick={()=>handleButton(product)} className="btn btn-outline-dark me-4"><i className="fa fa-minus"></i> icon -</button>
            <button onClick={()=>handleButton(product)} className="btn btn-outline-dark me-4"><i className="fa fa-plus"></i> icon +</button>

        </div>
    </div>
  )
}

export default Cart