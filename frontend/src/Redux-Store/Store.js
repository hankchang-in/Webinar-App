import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../Redux-Store/slices/userDetails/userdetails';
export const Store = configureStore({
    reducer: {
        // Reducers
        user: userSlice     
    }

})


