import { configureStore } from '@reduxjs/toolkit'
import { criterioSlice } from '../Modules/configuracion/slices/criterioSlice'
import { montoSlice } from '../Modules/configuracion/slices/montoSlices'
import { PuntoCorteSlice } from '../Modules/configuracion/slices/puntoCorteSlice'
import { solicitudSlice } from '../Modules/configuracion/slices/solicitudSlice'

export const store = configureStore({
    reducer: {
        criterios: criterioSlice.reducer,
        montos: montoSlice.reducer,
        puntoCorte: PuntoCorteSlice.reducer,
        solicitud: solicitudSlice.reducer
    },
})