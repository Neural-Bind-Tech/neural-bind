import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-type'
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1` }),
  endpoints: () => ({

  }),
  tagTypes: tagTypesList
})