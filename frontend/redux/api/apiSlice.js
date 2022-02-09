import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000/api/v1/" }),
    tagTypes: ['Comments', 'cart'],
    endpoints: () => ({})

})
