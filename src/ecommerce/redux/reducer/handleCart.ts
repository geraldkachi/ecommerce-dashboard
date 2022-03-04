const cart: any = [];

const handleCart = (state = cart, action: any) => {
    switch (action) {
        case "ADDITEM":
            // Check id Product Already exist
            const product: any = action.product
            const exist = state.find((x: any) => x.id === product.id)
            if (exist) {
                return state.map((x: any) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                const product: any = action.product
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }            
        case "DELETEITEM":
            const existdel = state.find((x: any) => x.id === product.id)
            if (existdel.qty === 1) {
                return state.filter((x: any) => x.id !== existdel.id)
            } else {
                return state.map((x: any) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }

        default:
            return state;    
    }
}

export default handleCart