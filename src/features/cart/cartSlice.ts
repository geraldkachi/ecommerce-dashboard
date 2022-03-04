import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface CartState {
    cart: Array<{}>;
  }
  
  const initialState: CartState = {
    cart: [],    
  };