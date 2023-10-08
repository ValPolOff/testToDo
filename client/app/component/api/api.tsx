import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes:['Task'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),
    endpoints: builder => ({
        getTask: builder.query({
            query:()=>'/post',
        }),
        createTask: builder.mutation({
           query: (post) => ({
            body: post,
            url:'/post',
            method: 'POST'
           })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
             body: {id:id},
             url:'/post',
             method: 'DELETE'
            })
         }),
         updateTask: builder.mutation({
            query: (post) => ({
             body: post,
             url:'/post',
             method: 'PUT'
            })
         }),
    })

})