import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomeLayout from "./Modules/layouts/page/Home.Layout"
import { DashBoard } from "./Modules/layouts/page/DashBoard"
import { CriterioPage } from "./Modules/configuracion/page/CriterioPage"
import { MontosPage } from "./Modules/configuracion/page/MontosPage"
import { SolicitudesPage } from "./Modules/Solicitud/page/SolicitudesPage"
import { SolicitudPage } from "./Modules/Solicitud/page/SolicitudPage"
import { PuntoCortePage } from "./Modules/configuracion/page/PuntoCortePage"

import { SolicitudCriterio } from "./Modules/Solicitud/page/SolicitudCriterio"
import { startGetSolicitudes } from "./Modules/configuracion/slices/solicitudThunk"
import { startGetCriterios } from "./Modules/configuracion/slices/criterioThunks"
import { startGetMontos } from "./Modules/configuracion/slices/montosThunks"
import { startGetPuntoCorte } from "./Modules/configuracion/slices/puntoCorteThunk"


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetCriterios())
    }, [])
    useEffect(() => {
        dispatch(startGetSolicitudes())
    }, [])
    useEffect(() => {
        dispatch(startGetMontos())
    }, [])
    useEffect(() => {
        dispatch(startGetPuntoCorte())
    }, [])
    return (
        <BrowserRouter>

            <Routes>
                {/* <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="olvide-password" element={<OlvidePassword />} />
                    <Route path="olvide-password/:token" element={<NuevoPassword />} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route> */}

                <Route path="/admin" element={<HomeLayout />}>
                    <Route index path="dashboard" element={<DashBoard />} />
                    <Route path="criterios" element={<CriterioPage />} />
                    <Route path="montos" element={<MontosPage />} />
                    <Route path="solicitud" element={<SolicitudesPage />} />
                    <Route path="punto-corte" element={<PuntoCortePage />} />
                    <Route path="solicitud/informacion" element={<SolicitudPage />} />
                    <Route path="solicitud/criterios" element={<SolicitudCriterio />} />
                    {/* <Route path="cambiar-password" element={<CambiarPassword />} /> */}
                </Route>

                <Route path="/*" element={<DashBoard />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
