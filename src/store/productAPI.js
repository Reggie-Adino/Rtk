import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
    reducerPath:"productAPI",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query:() => 'products'
      })
    })
})

export const{useGetAllProductsQuery} = productsAPI;