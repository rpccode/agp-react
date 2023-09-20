/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
export const PuntoCorteSlice = createSlice({
    name: 'puntoCorte',
    initialState: {
        isSaving: false,
        isUpdate: false,
        mensageSave: "",
        PuntoCortes: [],
        selecionada: {
            id: "",
            punto_max: 0,
            punto_min: 0,
            estado: "",
            fecha: ""

        }
    },
    reducers: {
        setPuntoCortes: (state, { payload }) => {
            state.PuntoCortes = payload
        },
        newPuntoCorte: (state, { payload }) => {
            state.PuntoCortes.push(payload)
            state.isSaving = false;
            state.mensageSave = `PuntoCorte ${payload.id}, Creado Correctamente`
        },
        setSelectedPuntoCorte: (state, { payload }) => {
            state.isUpdate = true;
            state.selecionada = payload
        },
        setUpdate: (state, { payload }) => {
            state.isSaving = false;
            state.PuntoCortes = state.PuntoCortes.map(m => {

                if (m.id === payload.id) {
                    return payload;
                }
                return m;

            })
            state.messageSave = `PuntoCorte ${payload.nombre}, Actualizada Correctamente`;

        },

        clearPuntoCortesByLogout: (state) => {
            state.isSaving = false;
            state.isUpdate = false;
            state.mensageSave = "";
            state.PuntoCortes = [];
            state.selecionada = null;
        },
        deletePuntoCortesById: (state, { payload }) => {
            state.PuntoCortes = state.PuntoCortes.filter(m => m.id !== payload.id)
            state.selecionada = null;
        }
    }
});
export const { setPuntoCortes, setSelectedPuntoCorte, setUpdate, clearPuntoCortesByLogout, deletePuntoCortesById, newPuntoCorte } = PuntoCorteSlice.actions;