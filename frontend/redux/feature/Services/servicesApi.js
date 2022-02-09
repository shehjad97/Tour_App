const { api } = require("@/redux/api/apiSlice");

const servicesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: (limit) => {
                if (limit) {
                    return `/services?limit=${limit}`
                } else {
                    return `/services`
                }
            }
        }),
        singleServices: builder.query({
            query: (id) => `/services/${id}`
        }),
        searchServices: builder.query({
            query: ({ city, distance }) => {
                if (city && distance) {
                    return `/services/search-services?city=${city}&distance=${distance}`
                } else if (city) {
                    return `/services/search-services?city=${city}`
                } else if (distance) {
                    return `/services/search-services?distance=${distance}`
                } else {
                    return `/services/search-services`
                }
            }
        })
    })
})

export const { useGetServicesQuery, useSingleServicesQuery, useSearchServicesQuery } = servicesApi
