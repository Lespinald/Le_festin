import {createSlice} from '@reduxjs/toolkit';

export const infoSlice = createSlice({
    name:'info',
    initialState:{
        uid:null,
        email:null,
        fecha:null,
        displayName:null,
        photoUrl:null,
        errorMessage:null
    },
    reducers:{
        guardar:(state,{payload}) =>{
            state.uid= payload.uid,
            state.email= payload.email,
            state.fecha= payload.creationTime,
            state.displayName= payload.displayName,
            state.photoUrl=payload.photoURL,
            state.errorMessage=null
        },
        borrado:(state) =>{
            state.uid= null,
            state.email= null,
            state.fecha= null,
            state.displayName= null,
            state.photoUrl=null,
            state.errorMessage=null

        }
    }
});

export const {guardar,borrado,guardarPhoto} = infoSlice.actions;    