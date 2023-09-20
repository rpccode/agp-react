// export const startNewMonto = () => {
//     return async (dispatch, getState) => {

import clienteAxios from "../../../conf/Axios";
import { newMonto, setMontos, setSelectedMonto } from "./montoSlices";

export const startGetMontos = () => {
    return async (dispatch) => {
        try {
            const { data } = await clienteAxios('/montos/')
            // console.log(data);
            dispatch(setMontos(data))
        } catch (error) {
            return { error: 'Error al obtener los Estados' };
        }

    }
}

export const starkCreateMonto = () => {
    return async (dispatch, getState) => {
        const { selecionada: monto } = getState().montos;
        try {
            await clienteAxios.post('/montos/', monto)
            // console.log(data);
            console.log(monto)
            dispatch(newMonto(monto))
            dispatch(setSelectedMonto({
                id: "",
                puntuacion: 0,
                monto_min: 0,
                monto_max: 0,
                fecha: ''
            }))
        } catch (error) {
            return { error: 'Error al crear el Monto' };
        }
    }
}