import { Modal } from "../components/Modal"
import { MontosForm } from "../components/MontosForm"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedMonto } from "../slices/montoSlices";
import { starkCreateMonto } from "../slices/montosThunks";


export const MontosPage = () => {
    const dispatch = useDispatch();

    const { montos, selecionada: criterio } = useSelector((state) => state.montos);

    const onSave = () => {
        dispatch(starkCreateMonto())
    }

    const onClose = () => {
        dispatch(setSelectedMonto({
            id: "",
            puntuacion: 0,
            monto_min: 0,
            monto_max: 0,
            fecha: ''

        }))
    }



    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Lista de Montos</h4>
                    {/* <h6 className="card-subtitle"></h6> */}
                    <div className="table-responsive">
                        <div>
                            <button type="button" className="btn btn-info " data-toggle="modal" data-target="#add-contact">Nuevo Montos</button>

                            <Modal title='Agregar un Nuevo Monto' onSave={onSave} onClose={onClose}>
                                <MontosForm />
                            </Modal>
                        </div>
                        <table className="table table-bordered">

                            <thead>
                                <tr className="text-center">
                                    <th>ID</th>
                                    <th>Puntuacion</th>
                                    <th>Rango Minimo</th>
                                    <th>Rango Maximo</th>
                                    <th className="text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    montos.map(monto => (
                                        // console.log(monto.id)
                                        <tr key={monto.id} className="text-center">
                                            <td>{monto.id}</td>
                                            <td>
                                                {monto.puntuacion}
                                            </td>
                                            <td>{monto.monto_min}</td>

                                            <td>{monto.monto_max}</td>
                                            <td className="text-nowrap">
                                                <a href="#" data-toggle="tooltip" data-original-title="Edit"> <i className="fa fa-pencil text-inverse m-r-10" /> </a>
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
