import clienteAxios from "../../../conf/Axios";
import { newPuntoCorte, setPuntoCortes, setSelectedPuntoCorte } from "./puntoCorteSlice";



export const startGetPuntoCorte = () => {
    return async (dispatch) => {
        try {
            const { data } = await clienteAxios('/punto-corte/')
            // console.log(data);
            dispatch(setPuntoCortes(data))
        } catch (error) {
            return { error: 'Error al obtener los PuntoCorte' };
        }

    }
}


export const starkCreatePuntoCorte = () => {
    return async (dispatch, getState) => {
        const { selecionada: punto } = getState().puntoCorte;

        const nPuntoCorte = {
            punto_max: punto.punto_max,
            punto_min: punto.punto_min,
            estado: punto.estado,
        }
        console.log(nPuntoCorte)
        try {
            await clienteAxios.post('/punto-corte/', nPuntoCorte)
            // console.log(data);
            dispatch(newPuntoCorte(punto))
            dispatch(setSelectedPuntoCorte({
                id: "",
                punto_max: 0,
                punto_min: 0,
                estado: "",
                fecha: null

            }))
        } catch (error) {
            return { error: 'Error al crear los PuntoCorte' };
        }
    }
}


