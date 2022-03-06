import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

// interface ProductDatatype {
//     product: {
//         image: TexImageSource
//     }
// }

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        let componentMounted = true
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products?limit=5'")
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
            }
            return () => componentMounted = false

        }
        getProducts()
    }, [])


    const Loading = () => <>
        <div className="col-md-3 pb-5">
            <Skeleton height={350} />
        </div>
        <div className="col-md-3 pb-5">
            <Skeleton height={350} />
        </div>
        <div className="col-md-3 pb-5">
            <Skeleton height={350} />
        </div>
        <div className="col-md-3 pb-5">
            <Skeleton height={350} />
        </div>
    </>

    const filterProduct = (item: string) => {
        const updatedList = data.filter((x: any) => x.category === item)
        setFilter(updatedList)
    }

    const ShowProducts = () => (
        <>
            <div className="buttons justify-content-center align-items-center mb-5 pb-5 mx-auto">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronic</button>
            </div>
            {filter.map((product: any) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={product.id}>
                    <div className="card h-100 text-center p-4 rounded">
                        <img src={product?.image} className="card-img-top" height="250px" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bolder">${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Lastest Products</h1>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    {loading ? <Loading /> : ShowProducts()}
                </div>
            </div>
        </div>
    )
}

export default Products
