//  For Adding Item to Cart

export const addCart = (product: any) => {
    return {
        type: "ADDCART",
        payload: product
    }
}

//  For Delete Item to Cart

export const deleteCart = (id: any) => {
    return {
        type: "DELETECART",
        payload: id
    }
}

// const handleButton = () => {}