/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "../../configuracion/components/Modal"
import { setSelectedSolicitud } from "../../configuracion/slices/solicitudSlice";
import { starkCreateSolicitud, startGetSolicitudes } from "../../configuracion/slices/solicitudThunk";
import { SolicitudForm } from "../components/SolicitudForm";

export const SolicitudesPage = () => {
    const dispatch = useDispatch();
    const { solicitudes } = useSelector((state) => state.solicitud);
    const navigate = useNavigate()

    // console.log(navigate);
    // console.log(solicitudes);
    // console.log(montos)
    const onSave = () => {
        dispatch(starkCreateSolicitud())
        navigate('./criterios')


    }

    const onClose = () => {
        dispatch(setSelectedSolicitud({
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
            "estado_solicitud": ""

        }))
    }

    const updateCriterio = (criterio) => {
        dispatch(setSelectedSolicitud(criterio))
    }


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Lista de Solicitudes</h4>
                    {/* <h6 className="card-subtitle"></h6> */}
                    <div className="table-responsive">
                        <div>
                            <button type="button" className="btn btn-info " data-toggle="modal" data-target="#add-contact">Nuevo Solicirud</button>

                            <Modal title='Agregar un Nueva Solicitud' onSave={onSave} onClose={onClose}>
                                <SolicitudForm />
                            </Modal>
                        </div>
                        <table className="table ">

                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Fecha Solicitud</th>
                                    <th>Firmada</th>
                                    <th>Estado</th>
                                    <th className="text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    solicitudes.map(solicitud => (
                                        <tr key={solicitud.solicitud_id}>
                                            <td>{solicitud.nombre_solicitante + " " + solicitud.apellido_solicitante}</td>
                                            <td>{solicitud.email_solicitante}</td>
                                            <td>{solicitud.fecha_solicitud}</td>
                                            <td>{(solicitud.completa_firmada === false) ? 'NO' : 'SI'}</td>
                                            <td ><span className={(solicitud.estado_solicitud === 'Pendiente' ? 'label  label-warning' : solicitud.estado_solicitud === 'Aprobado' ? 'label  label-success' : 'label  label-danger')}>{solicitud.estado_solicitud}</span></td>
                                            <td className="text-nowrap">
                                                <Link to="#" data-toggle="tooltip" data-original-title="Edit"> <i className="fa fa-pencil text-inverse m-r-10" /> </Link>
                                                <Link to="#" data-toggle="tooltip" data-original-title="view"> <i className="fa fa-eye text-warning text-inverse m-r-10" /> </Link>
                                                <Link to="#" data-toggle="tooltip" data-original-title="Close"> <i className="fa fa-close text-danger" /> </Link>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
