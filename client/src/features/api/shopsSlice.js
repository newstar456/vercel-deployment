import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import axios from "axios"
// import {apiSlice} from '../api/api'
// import { useParams } from 'react-router-dom'

// const HOME_URL = 'https://vercel-deployment-five-xi.vercel.app'
const shopsAdapter = createEntityAdapter({sortComparer: (a, b) => a.id.localeCompare(b.id)})
const initialState = shopsAdapter.getInitialState()

export const fetchShops = createAsyncThunk('shops/fetchShops', async () => {
    await axios.get("https://vercel-deployment-five-xi.vercel.app/shops")
      .then((response) => {
        // console.log(response.data);
        return response.data
      });
})

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchShops.fulfilled, (state, action) => {
                shopsAdapter.upsertMany(state, action.payload)
            })
    }
})


export const {
    selectAll: selectAllShops,
    selectById: selectShopById,
    selectIds: selectShopIds
} = shopsAdapter.getSelectors(state => state.shops)

export default shopsSlice.reducer