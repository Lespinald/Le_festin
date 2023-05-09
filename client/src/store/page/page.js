import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'page',
    initialState:{
        ubicacion:'INICIO'
    },
    reducers:{
        foro:(state) =>{
            state.ubicacion = 'FORO'
        },
        favoritos:(state) =>{
            state.ubicacion = 'FAVORITO'
        },
        perfil:(state) =>{
            state.ubicacion = 'PERFIL'
        },
    }
});

export const { foro,favoritos,perfil } = authSlice.actions;    