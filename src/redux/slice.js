import { createSlice } from "@reduxjs/toolkit";


const cartSystem = createSlice({


    name:"cart",
    initialState:[],

    reducers:{
        addcart(state,action){
            state.push(action.payload)
        },
        removetoCart(state,action){
            state.pop(action.payload)
        }
    }
})

export default cartSystem.reducer

export const {addcart,removetoCart}= cartSystem.actions