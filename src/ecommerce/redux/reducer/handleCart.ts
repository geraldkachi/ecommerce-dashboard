const cart: any = [];

const handleCart = (state = cart, action: any) => {
    // const product: any = action.product
    switch (action) {
        case "ADDITEM":
            return [...state, action.payload]
            // Check id Product Already exist
            // const exist = state.find((x: any) => x.id === product.id)
            // if (exist) {
            //     return state.map((x: any) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            // } else {
            //     const product: any = action.product
            //     return [
            //         ...state,
            //         {
            //             ...product,
            //             qty: 1
            //         }
            //     ]
            // }            
        case "DELETEITEM":

            return state = state.map((x: any) => x.id === action.payload.id)
            // const existdel = state.find((x: any) => x.id === product.id)
            // if (existdel.qty === 1) {
            //     return state =  state.filter((x: any) => x.id !== existdel.id)
            // } else {
            //     return state.map((x: any) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            // }

        default:
            return state;    
    }
}

export default handleCart