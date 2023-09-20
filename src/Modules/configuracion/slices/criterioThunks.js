
import clienteAxios from "../../../conf/Axios";
import { newCriterio, setCriterios, setSelectedCriterio } from "./criterioSlice";


export const startGetCriterios = () => {
    return async (dispatch) => {
        try {
            const { data } = await clienteAxios('/criterio/')
            // console.log(data);
            dispatch(setCriterios(data))
        } catch (error) {
            return { error: 'Error al obtener los Criterios' };
        }

    }
}

export const starkCreateCriterio = () => {
    return async (dispatch, getState) => {
        const { selecionada: criterio } = getState().criterios;
        try {
            await clienteAxios.post('/criterio/', criterio)
            // console.log(data);
            console.log(criterio)
            dispatch(newCriterio(criterio))
            dispatch(setSelectedCriterio({
                id_criterio: "",
                nombre_criterio: "",
                descripcion_criterio: "",
                minimo: 0,
                maximo: 0

            }))
        } catch (error) {
            return { error: 'Error al crear los Criterios' };
        }
    }
}