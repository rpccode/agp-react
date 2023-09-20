/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
export const criterioSlice = createSlice({
    name: 'criterio',
    initialState: {
        isSaving: false,
        isUpdate: false,
        mensageSave: "",
        cantC: 0,
        criterios: [],
        selecionada: {
            id_criterio: "",
            nombre_criterio: "",
            descripcion_criterio: "",
            minimo: 0,
            maximo: 0

        }
    },
    reducers: {
        setCriterios: (state, { payload }) => {
            state.criterios = payload
            state.cantC = state.criterios.length
        },
        newCriterio: (state, { payload }) => {
            state.criterios.push(payload)
            state.cantC = state.criterios.length
            state.isSaving = false;
            state.mensageSave = `Criterio ${payload.nombre}, Creado Correctamente`
        },
        setSelectedCriterio: (state, { payload }) => {
            state.isUpdate = true;
            state.selecionada = payload
        },
        setUpdate: (state, { payload }) => {
            state.isSaving = false;
            state.criterios = state.criterios.map(m => {

                if (m.id === payload.id) {
                    return payload;
                }
                return m;

            })
            state.messageSave = `Criterio ${payload.nombre}, Actualizada Correctamente`;

        },

        clearCriteriosByLogout: (state) => {
            state.isSaving = false;
            state.isUpdate = false;
            state.mensageSave = "";
            state.criterios = [];
            state.selecionada = null;
        },
        deleteCriteriosById: (state, { payload }) => {
            state.criterios = state.criterios.filter(m => m.id !== payload.id)
            state.selecionada = null;
        }
    }
});
export const { setCriterios, setSelectedCriterio, setUpdate, clearCriteriosByLogout, deleteCriteriosById, newCriterio } = criterioSlice.actions;