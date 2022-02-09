const { api } = require("@/redux/api/apiSlice");

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        postUsers: builder.mutation({
            query: (data) => ({
                url: '/user/create-user',
                method: "POST",
                body: data
            })
        }),
        singleUser: builder.query({
            query: (id) => `/user/${id}`
        })
    })
})
export const { usePostUsersMutation, useSingleUserQuery } = userApi
