/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "@/types/common/common"
import { baseApi } from "../baseApi"
import { IBlog } from "@/types/blog/blog"

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllBlog: build.query({
            query: (args: Record<string, any>) => ({
                url: '/blog',
                method: 'GET',
                params: args
            }),
            transformResponse: (response: IResponse<IBlog[]>) => {
                return {
                    data: response.data,
                    meta: response?.meta
                }
            },
        }),
        getSingleBlog: build.query({
            query: (id: string) => ({
                url: `/blog/${id}`,
                method: 'GET'
            }),
            transformResponse: (response: IResponse<IBlog>) => {

                return {
                    data: response.data
                }
            },
        }),
    })
})

export const { useGetAllBlogQuery, useGetSingleBlogQuery } = blogApi