import  {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    initialState : {
        user : 'No user',
        status : 'idle',
        name : '',
        role : ''
    },

    name : 'userDetails',
    reducers: {
        setUser : (state, action) => {
            state.user = action.payload;
        },

        setStatus : (state, action) => {
            state.status = action.payload;
        },

        setName : (state, action) => {
            state.name = action.payload;
        },

        setRole : (state, action) => {
            state.role = action.payload;
        }
    }
})

console.log(userSlice)

export const {setUser , setStatus , setName , setRole} = userSlice.actions; 
export default userSlice.reducer

