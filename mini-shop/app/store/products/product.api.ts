import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct } from './product.types'

export const productApi = createApi({
    // путь до редюсера 
    reducerPath: 'api/products',
    // базовая ссылка для запросов апи
    baseQuery: fetchBaseQuery({baseUrl: 'http://fakestoreapi.com/'}),
    // эндпоинты для получения товаров и т.д.
    endpoints: build => ({
        getProducts: build.query<IProduct[], number>({query: (limit = 5) => `products?limit=${limit}`})
    }) 
})

//экспорт хука для получения товаров(генерируется автоматически)
export const {useGetProductsQuery} = productApi