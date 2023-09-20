/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { CriterioForm } from "../components/CriterioForm"

import { Modal } from "../components/Modal"
import { useEffect } from "react";
import { starkCreateCriterio, startGetCriterios } from "../slices/criterioThunks";
import { setSelectedCriterio } from "../slices/criterioSlice";


export const CriterioPage = () => {
    const dispatch = useDispatch();
    const { criterios } = useSelector((state) => state.criterios);

    // console.log(montos)
    const onSave = () => {
        dispatch(starkCreateCriterio())
    }

    const onClose = () => {
        dispatch(setSelectedCriterio({
            id_criterio: "",
            nombre_criterio: "",
            descripcion_criterio: "",
            minimo: 0,
            maximo: 0

        }))
    }

    const updateCriterio = (criterio) => {
        dispatch(setSelectedCriterio(criterio))
    }



    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Lista de Criterios</h4>
                    {/* <h6 className="card-subtitle"></h6> */}
                    <div className="table-responsive">
                        <div>
                            <button type="button" className="btn btn-info " data-toggle="modal" data-target="#add-contact">Nuevo Criterio</button>

                            <Modal title='Agregar un Nuevo Criterio' onSave={onSave} onClose={onClose}>
                                <CriterioForm />
                            </Modal>
                        </div>
                        <table className="table table-bordered">

                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descriccion</th>
                                    <th>Rango Minimo</th>
                                    <th>Rango Maximo</th>
                                    <th className="text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    criterios.map(criterio => (
                                        // console.log(criterio.id)
                                        <tr key={criterio.id_criterio} className="text-center">
                                            <td>{criterio.nombre_criterio}</td>
                                            <td>
                                                {criterio.descripcion_criterio}
                                            </td>
                                            <td>{criterio.minimo}</td>

                                            <td>{criterio.maximo}</td>
                                            <td className="text-nowrap">
                                                <a href="#" data-toggle="modal" data-target="#add-contact" onClick={() => updateCriterio(criterio)}> <i className="fa fa-pencil text-inverse m-r-10" /> </a>
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
