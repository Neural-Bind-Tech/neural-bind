import { IClient } from "@/types/client/client"
import { baseApi } from "../baseApi"

const clientApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createClient: build.mutation({
            query: (body: IClient) => ({
                url: `/client`,
                method: 'POST',
                data: body
            }),
        }),
    })
})

export const { useCreateClientMutation } = clientApi