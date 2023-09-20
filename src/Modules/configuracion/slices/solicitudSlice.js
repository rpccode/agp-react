import { createSlice } from '@reduxjs/toolkit';
export const solicitudSlice = createSlice({
    name: 'solicitud',
    initialState: {
        isSaving: false,
        isUpdate: false,
        mensageSave: "",
        solicitudes: [],
        nueva: {
            id: "",
            tipo: "",
            monto: 0,

        },
        selecionado: {
            "solicitud_id": 0,
            "fecha_solicitud": "",
            "completa_firmada": "",
            "nombre_solicitante": "",
            "apellido_solicitante": "",
            "email_solicitante": "",
            "direccion_solicitante": "",
            "ciudad_solicitante": "",
            "provincia_solicitante": "",
            "pais_solicitante": "",
            "tipo_documento": null,
            "documento_valido": null,
            "puntuacion_credito": 0,
            "garantias_colaterales_validas": null,
            "valor_garantias": null,
            "calidad_garantias": null,
            "puntuacion_solvencia": null,
            "ingresos": null,
            "gastos": null,
            "indice_endeudamiento": null,
            "monto_maximo_aprobado": 0,
            "monto_final_aprobado": 0,
            "estado_solicitud": ""
        },
        montoAprobado: {
            id: '',
            id_solicitud: '',
            monto_maximo_aprobado: 0,
            monto_final_aprobado: 0,
            fecha_aprobacion: '',
            otros_detalles: ''
        }
    },
    reducers: {
        setMontoAprobado: (state, { payload }) => {
            state.montoAprobado = payload
        },
        setSolicitudes: (state, { payload }) => {
            state.solicitudes = payload
        },
        newSolicitud: (state, { payload }) => {
            state.solicitudes.push(payload)
            state.isSaving = false;
            // state.mensageSave = `Solicitud ${payload.solicitud_id}, Creado Correctamente`
        },
        setSelectedSolicitud: (state, { payload }) => {
            state.isUpdate = true;
            state.selecionado = payload
        },
        setUpdate: (state, { payload }) => {
            state.isSaving = false;
            state.solicitudes = state.solicitudes.map(m => {

                if (m.id === payload.id) {
                    return payload;
                }
                return m;

            })
            // state.messageSave = `PuntoCorte ${payload.nombre}, Actualizada Correctamente`;

        },
        setNueva: (state, { payload }) => {
            state.nueva = payload
        },
        clearSolicitudesByLogout: (state) => {
            state.isSaving = false;
            state.isUpdate = false;
            state.mensageSave = "";
            state.solicitudes = [];
            state.selecionado = null;
        },
        deleteSolicitudesById: (state, { payload }) => {
            state.solicitudes = state.solicitudes.filter(m => m.id !== payload.id)
            state.selecionada = null;
        }
    }
});
export const { setNueva, setSolicitudes, setSelectedSolicitud, newSolicitud, setUpdate, clearSolicitudesByLogout, deleteSolicitudesById, setMontoAprobados } = solicitudSlice.actions;