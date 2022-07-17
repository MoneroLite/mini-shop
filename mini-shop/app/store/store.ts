import { configureStore, } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";
import { productApi } from "./products/product.api";

export const store = configureStore({
    // задаем редюсер, чтоб все сохранялось в сторе
    // {[название того редюсера]: сам редюсер}
    reducer: {[productApi.reducerPath]: productApi.reducer, cart: cartReducer}
})

// экспорт типов для дальнейшего типизирования
// в рутстейте хранится состояние стора
export type TypeRootState = ReturnType<typeof store.getState>