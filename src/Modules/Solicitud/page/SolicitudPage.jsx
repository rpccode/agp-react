
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { starkSetMontosAprobados } from "../../configuracion/slices/solicitudThunk";
import { ValoresBox } from "../components/ValoresBox"

export const SolicitudPage = () => {
    const dispatch = useDispatch();
    const { solicitudes, selecionado: solicitud, montoAprobado } = useSelector((state) => state.solicitud);

    const {
        estado_solicitud,
        nombre_solicitante,
        apellido_solicitante,
        garantias_colaterales_validas,
        fecha_solicitud,
        completa_firmada,
        documento_valido,
        tipo_documento,
        puntuacion_credito,
        puntuacion_solvencia,

    } = useForm(solicitud)

    // useEffect(() => {
    //     dispatch(starkSetMontosAprobados())
    // }, [solicitud])


    return (
        <>
            <div className="card">
                <div className={`card-header ${estado_solicitud === 'Aprobado' ? 'bg-success' : estado_solicitud === 'Rechazado' ? 'bg-danger' : 'bg-warning'}`}>
                    <h4 className="m-b-0 text-white">Informacion de la Solicitud</h4>
                </div>
                <div className="card-body">
                    <form className="form-horizontal" role="form">
                        <div className="form-body">
                            {/* <h3 className="box-title">Informacion Personal</h3> */}
                            <div className="col-md-12">
                                <div className="row">
                                    <h3 className="box-title">Informacion Personal</h3>
                                    <div className="col-md-9 ">
                                        <h2 className="text-right font-bolt text-warning"> {estado_solicitud}</h2>
                                    </div>
                                </div>
                            </div>
                            <hr className="m-t-0 m-b-40" />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3">Nombre:</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static">{nombre_solicitante}</p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3">Apellidos:</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static"> {apellido_solicitante}</p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                            {/*/row*/}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3">Genero</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static"> Male </p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3">Fecha  Solicitud:</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static">{fecha_solicitud}</p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                            {/*/row*/}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3">Tipo Doc:</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static"> Cedula </p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-3"># Documento:</label>
                                        <div className="col-md-9">
                                            <p className="form-control-static">{tipo_documento}</p>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                            {/*/row*/}
                            <h3 className="box-title">Inforamcion Financiera</h3>
                            <hr className="m-t-0 m-b-40" />
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-6">Firmada:</label>
                                        <div className="col-md-6">
                                            <p className="form-control-static text-success"> {(completa_firmada) ? 'Validada' : "Sin Validar"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-6">Doc Valido:</label>
                                        <div className="col-md-6">
                                            <p className="form-control-static">{documento_valido}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <label className="control-label text-right col-md-6">Garnt Validas:</label>
                                        <div className="col-md-6">
                                            <p className="form-control-static">{garantias_colaterales_validas} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                          
                            <ValoresBox title='Ingresos' value={ingresos} color="info" width={4} />
                            <ValoresBox title='Gastos' value={gastos} color="danger" width={4} />
                            <ValoresBox title='Indice Endeudamiento' value={`${indice_endeudamiento}%`} color="warning" width={4} />
                           
                        </div> */}
                            {/*/row*/}
                            <div className="row">
                                <ValoresBox title='Puntuacion Criterios' value={puntuacion_credito} color='warning' />
                                {/* <ValoresBox title='Puntuacion Solvencia' value={puntuacion_solvencia} /> */}
                                <ValoresBox title='Punt Capacidad Pago' value={0} />
                                {/* <ValoresBox title='Puntuacion Crediticia' value={0} /> */}
                                <ValoresBox title='Puntunacion Total' value={puntuacion_credito + puntuacion_solvencia} color="info" width={4} />
                                {/*/span*/}
                            </div>

                        </div>
                        {/* <div className="form-actions">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-9">
                                        <button type="submit" className="btn btn-danger"> <i className="fa fa-pencil" /> Edit</button>
                                        <button type="button" className="btn btn-inverse">Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"> </div>
                        </div>
                    </div> */}
                    </form>

                </div>


            </div>
            {
                (solicitud.estado_solicitud === 'Aprobado') && (
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <ValoresBox title='Monto Minimo Aprobado' value={"$" + solicitud.monto_final_aprobado} lg={6} />
                                <ValoresBox title='Monto Maximo Aprobado' value={"$" + solicitud.monto_maximo_aprobado} color="danger" lg={6} />
                                {/*/span*/}
                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}
