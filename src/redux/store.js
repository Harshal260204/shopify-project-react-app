import { configureStore } from "@reduxjs/toolkit";

import cartSystem from "../redux/slice"




const store = configureStore({

    reducer:{
        cart:cartSystem
    }
})

export default store;