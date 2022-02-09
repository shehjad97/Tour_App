const { api } = require("@/redux/api/apiSlice");

const cardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        postCart: builder.mutation({
            query: (data) => ({
                url: '/booking/add-to-cart',
                method: "POST",
                body: data,

            }),
            invalidatesTags: ['cart']
        }),
        getCart: builder.query({
            query: (id) => `/booking/carts/${id}`,
            providesTags: ['cart']
        }),
        deleteCart: builder.mutation({
            query: (id) => ({
                url: `/booking/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['cart']
        })
    })
})
export const { usePostCartMutation, useGetCartQuery, useDeleteCartMutation } = cardApi