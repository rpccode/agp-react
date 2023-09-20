import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generateInitialData } from '../../configuracion/helpers/generarArray';
import { starkCreateCriterioSolicitud } from '../../configuracion/slices/solicitudThunk';




export const SolicitudCriterio = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { selecionado: solicitud } = useSelector((state) => state.solicitud);

    // Función asincrónica para obtener los datos iniciales
    let initialData = generateInitialData();
    const [tablaData, setTablaData] = useState(initialData);
    const modificarCelda = (filaIndex, campo, nuevoValor) => {
        const nuevaTablaData = [...tablaData];
        nuevaTablaData[filaIndex] = { ...nuevaTablaData[filaIndex], [campo]: nuevoValor };
        setTablaData(nuevaTablaData);

    };
    const handleCriterio = async () => {
        const id = tablaData[0].solicitudid;
        const newArray = tablaData
            .filter(item => !item.noIncluir)
            .map(({ id, min, max, noIncluir }) => ({
                id,
                min,
                max,
                noIncluir
            }));
        const data = {
            criterios: newArray,
            solicitudId: solicitud.solicitud_id
        }
        await dispatch(starkCreateCriterioSolicitud(data))
        // console.log(data)
        navigate('./../informacion')
    }

    return (
        <>
            <div className="row pb-2">
                <div className="col-10">

                </div>
                <div className="col-2 ">
                    <button className='btn btn-block btn-info' onClick={handleCriterio}>Guardar</button>
                </div>
            </div>
            <div className='row'>
                <table className="table bg-white">
                    <thead className="text-center">
                        <tr>
                            <th>Solicitud ID</th>
                            <th>Criterio ID</th>
                            <th>Min</th>
                            <th>Max</th>
                            <th>No Incluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tablaData.map((fila, filaIndex) => (
                            <tr key={filaIndex} className='"'>
                                <td>{fila.solicitudid}</td>
                                <td>{fila.criterioName}</td>
                                <td>
                                    <input
                                        id={`minCheck${filaIndex}`}
                                        type="checkbox"
                                        value={fila.min}
                                        // checked={fila.min}
                                        onChange={e => modificarCelda(filaIndex, 'min', e.target.checked)}
                                    />
                                    <label htmlFor={`minCheck${filaIndex}`}></label>
                                </td>
                                <td>
                                    <input
                                        id={`maxCheck${filaIndex}`}
                                        type="checkbox"
                                        checked={fila.max}
                                        onChange={e => modificarCelda(filaIndex, 'max', e.target.checked)}
                                    />
                                    <label htmlFor={`maxCheck${filaIndex}`}></label>

                                </td>
                                <td>
                                    <input
                                        id={`noIncluirCheck${filaIndex}`}
                                        type="checkbox"
                                        name='noIncluir'
                                        checked={fila.noIncluir}
                                        onChange={e => modificarCelda(filaIndex, 'noIncluir', e.target.checked)}
                                    />
                                    <label htmlFor={`noIncluirCheck${filaIndex}`}></label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {/* <tr>
                            <td colSpan="2">
                                <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                            </td>
                            <td colSpan="7">

                            </td>

                        </tr> */}
                    </tfoot>
                </table>
            </div>
        </>
    );
};

