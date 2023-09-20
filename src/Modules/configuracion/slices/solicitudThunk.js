/* eslint-disable react-hooks/rules-of-hooks */

import clienteAxios from "../../../conf/Axios";

import { newSolicitud, setMontoAprobados, setNueva, setSelectedSolicitud, setSolicitudes } from "./solicitudSlice";



export const startGetSolicitudes = () => {
    return async (dispatch) => {
        try {
            const { data } = await clienteAxios('/solicitud/')
            // console.log(data);
            dispatch(setSolicitudes(data.data))
        } catch (error) {
            return { error: 'Error al obtener las Solicitudes' };
        }

    }
}


export const starkCreateSolicitud = () => {
    return async (dispatch, getState) => {
        const { nueva } = getState().solicitud;
        try {
            const result = await clienteAxios.post('/solicitud/', nueva)
            const solicitud = result.data.data
            // console.log(data);
            dispatch(newSolicitud(solicitud))
            dispatch(setSelectedSolicitud(solicitud))
            dispatch(setNueva({
                id: "",
                tipo: "",
                monto: 0,
            }))
        } catch (error) {
            return { error: 'Error al crear la solicitud' };
        }
    }
}

export const starkCreateCriterioSolicitud = (data) => {
    return async (dispatch) => {

        try {
            const result = await clienteAxios.post('/solicitud/criterio/', data)
            const ok = result.data.ok
            // console.log(data);
            if (!ok) {
                return console.error(result.data.msg);
            }


            const solicitud = await clienteAxios.get(`/solicitud/${data.solicitudId}`)

            if (!solicitud.data.ok) {
                return console.error('no se pudo Obtener la Solicitud');
            }
            dispatch(setSelectedSolicitud(solicitud.data.data))



        } catch (error) {
            return { error: 'Error al crear la solicitud' };
        }
    }
}



export const starkSetMontosAprobados = () => {
    return async (dispatch, getState) => {
        const { selecionado: solicitud } = getState().solicitud;
        try {
            const montos = await clienteAxios.get(`/solicitud/monto/${solicitud.solicitud_id}`)
            if (!montos.data.ok) {
                return console.error('no se pudo Obtener los montos');
            }
            console.log(montos.data.data);
            dispatch(setMontoAprobados(montos.data.data))
        } catch (error) {
            return { error: 'Error al crear la solicitud' };
        }


    }


}
