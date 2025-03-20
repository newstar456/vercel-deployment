import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vercel-deployment-five-xi.vercel.app' }),
    tagTypes: ['Shop', 'Med', 'Cart', 'MedsShops', 'Orders', 'Customer'],
    endpoints: builder => ({})
})