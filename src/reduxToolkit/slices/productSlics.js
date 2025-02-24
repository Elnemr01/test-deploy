import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchProducts =createAsyncThunk("productSlice/fetchProducts",async ()=> {
    let res=await fetch("https://fakestoreapi.com/products");
    let data=await res.json();
    return data;
})



let productSlice=createSlice({
    initialState :[],
    name:"productSlice",
    reducers :{
        add : (state,action) => {
            return state.push(action.payload);
        }
    },

    extraReducers :(builder)=> {
        builder.addCase(fetchProducts.fulfilled,(state,action)=> {
            state=action.payload;
            return state;
        })

        // builder.addCase(fetchProducts.pending,(state,action)=> {
        //     return <h1>loading...</h1>
        // })
    }
})

export let {add} =productSlice.actions;
export default productSlice.reducer;