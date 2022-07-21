import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    phoneNumber: '09128458202',
  },
  reducers: {
    setnum: (state,action) => {
      state.phoneNumber = action.payload
    }
  }
})

export const {setnum} = counterSlice.actions
export default counterSlice.reducer
