/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';

export const montoSlice = createSlice({
    name: 'monto',
    initialState: {
        isSave: false,
        isUpdate: false,
        mensageSave: "",
        montos: [],
        selecionada: {
            id: "",
            puntuacion: 0,
            monto_min: 0,
            monto_max: 0,
            fecha: ''

        }
    },
    reducers: {
        setMontos: (state, { payload }) => {
            state.montos = payload
        },
        newMonto: (state, { payload }) => {
            state.montos.push(payload)
            state.isSaving = false;
        },
        setSelectedMonto: (state, { payload }) => {
            state.isUpdate = true;
            state.selecionada = payload
        },
        setUpdate: (state, { payload }) => {
            state.isSaving = false;
            state.montos = state.montos.map(m => {

                if (m.id === payload.id) {
                    return payload;
                }
                return m;

            })
            state.messageSave = `Criterio ${payload.nombre}, Actualizada Correctamente`;

        },

        clearMontosByLogout: (state) => {
            state.isSaving = false;
            state.isUpdate = false;
            state.mensageSave = "";
            state.montos = [];
            state.selecionada = null;
        },
        deleteMontosById: (state, { payload }) => {
            state.montos = state.montos.filter(m => m.id !== payload.id)
            state.selecionada = null;
        }
    }
});
export const { setMontos, newMonto, clearMontosByLogout, setUpdate, setSelectedMonto, deleteMontosById } = montoSlice.actions;



