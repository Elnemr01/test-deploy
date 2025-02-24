import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let cartSlice=createSlice({
    initialState :[],
    name:"cartSlice",
    reducers :{
        addToCart : (state,action) => {
            let findProduct=state.find((e)=> e.id===action.payload.id);
            if(findProduct) {
                findProduct.quantity++;
            }
            else {
                let productClone={...action.payload,quantity:1};
                state.push(productClone);
            }
            return state;
        },

        removeFromCart : (state,action) => {
            let newSt=state.filter((ele)=> ele.id!=action.payload.id
            );
            return newSt;
        },

        clearCart : (state,action) => {
            return [];
        }
    },


})

export let {addToCart,clearCart,removeFromCart} =cartSlice.actions;
export default cartSlice.reducer;