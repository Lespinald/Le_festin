import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './auth/authslice'
import { pageSlice } from './page/page'
import { infoSlice } from './infoUsuario/authslice'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        page: pageSlice.reducer,
        info: infoSlice.reducer
    },
})