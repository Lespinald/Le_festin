import {createSlice} from '@reduxjs/toolkit';

export const pageSlice = createSlice({
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

export const { foro,favoritos,perfil } = pageSlice.actions;    