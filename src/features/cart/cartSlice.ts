import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface CartState {
    cart: Array<{}>;
  }
  
  const initialState: CartState = {
    cart: [],    
  };



export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {}    
  });
  
  export const {  } = cartSlice.actions;
  