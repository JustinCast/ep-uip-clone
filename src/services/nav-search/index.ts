import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import {
  GET_CATEGORIES_BY_TITLE,
  GET_WIKIS_BY_TITLE,
} from '@/services/nav-search/queries'
import config from '@/config'

export type WikiTitle = {
  id: string
  title: string
  summary?: string
  content: string
  tags?: {
    id: string
  }[]
  images?: {
    id: string
  }[]
}

export type Category = {
  id: string
  title: string
  description: string
  cardImage: string
  heroImage: string
  icon: string
}

type GetWikisByTitleResponse = {
  wikisByTitle: WikiTitle[]
}

type GetCategoriesByTitleResponse = {
  categoryByTitle: Category[]
}

export const navSearchApi = createApi({
  reducerPath: 'navSearchApi',
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
    return null
  },
  baseQuery: graphqlRequestBaseQuery({ url: config.graphqlUrl }),
  endpoints: builder => ({
    getWikisByTitle: builder.query<WikiTitle[], string>({
      query: (title: string) => ({
        document: GET_WIKIS_BY_TITLE,
        variables: { title },
      }),
      transformResponse: (response: GetWikisByTitleResponse) =>
        response.wikisByTitle,
    }),
    getCategoriesByTitle: builder.query<Category[], string>({
      query: (title: string) => ({
        document: GET_CATEGORIES_BY_TITLE,
        variables: { title },
      }),
      transformResponse: (response: GetCategoriesByTitleResponse) =>
        response.categoryByTitle,
    }),
  }),
})

export const {
  useGetWikisByTitleQuery,
  useGetCategoriesByTitleQuery,
  util: { getRunningOperationPromises },
} = navSearchApi

export const { getWikisByTitle, getCategoriesByTitle } = navSearchApi.endpoints
