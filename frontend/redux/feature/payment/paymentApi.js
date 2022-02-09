const { api } = require("@/redux/api/apiSlice");


const paymentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
            query: (data) => ({
                url: `/payment/create-payment-intent`,
                method: "POST",
                body: data,
            }),
        }),
        addPayment: builder.mutation({
            query: (data) => ({
                url: `/payment/add-payment`,
                method: "POST",
                body: data,
            }),
        }),
        paymentByUserId: builder.query({
            query: (id) => `/payment/${id}`,
        }),


    }),
});
export const { useCreatePaymentIntentMutation, useAddPaymentMutation, usePaymentByUserIdQuery } = paymentApi;