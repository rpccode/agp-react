/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/Modal"

import { PuntoCorteForm } from "../components/PuntoCorteForm";
import { starkCreatePuntoCorte } from "../slices/puntoCorteThunk";
import { setSelectedPuntoCorte } from "../slices/puntoCorteSlice";


export const PuntoCortePage = () => {
    const dispatch = useDispatch();
    const { PuntoCortes } = useSelector((state) => state.puntoCorte);
    // console.log(PuntoCortes)
    // console.log(montos)
    const onSave = () => {
        dispatch(starkCreatePuntoCorte())
    }

    const onClose = () => {
        dispatch(setSelectedPuntoCorte({
            id: "",
            punto_max: 0,
            punto_min: 0,
            estado: "",
            fecha: null

        }))
    }

    const updateCriterio = (criterio) => {
        dispatch(setSelectedPuntoCorte(criterio))
    }


    return (
        <><div className="card">
            <div className="card-body">
                <h4 className="card-title">Lista de Punto de Corte</h4>
                {/* <h6 className="card-subtitle"></h6> */}
                <div className="table-responsive">
                    <div>
                        <button type="button" className="btn btn-info " data-toggle="modal" data-target="#add-contact">Nuevo Punto de Corte</button>

                        <Modal title='Agregar un Nuevo Punto de Corte' onSave={onSave} onClose={onClose}>
                            <PuntoCorteForm />
                        </Modal>
                    </div>
                    <table className="table table-bordered">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Punto Maximo</th>
                                <th>Punto Minimo</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                                <th className="text-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PuntoCortes.map(punto => (
                                    // console.log(punto.id)
                                    <tr key={punto.id} className="text-center">
                                        <td>{punto.id}</td>
                                        <td>{punto.punto_max}</td>
                                        <td>
                                            {punto.punto_min}
                                        </td>
                                        <td ><span className={(punto.estado === 'Activo' ? 'label  label-success' : 'label  label-danger')}>{punto.estado}</span></td>
                                        <td>{punto.fecha}</td>
                                        <td className="text-nowrap">
                                            <a href="#" data-toggle="modal" data-target="#add-contact" onClick={() => updateCriterio(punto)}> <i className="fa fa-pencil text-inverse m-r-10" /> </a>
                                            <a href="#" data-toggle="tooltip" data-original-title="Close"> <i className="fa fa-close text-danger" /> </a>
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
