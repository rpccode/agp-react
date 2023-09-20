/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm"
import { useEffect } from "react";
import { setSelectedCriterio } from "../slices/criterioSlice";


export const CriterioForm = () => {
    const dispatch = useDispatch();
    const { criterios, selecionada: criterio, messageSave } = useSelector((state) => state.criterios);
    // console.log(criterio)
    const { id_criterio, nombre_criterio, descripcion_criterio, minimo, maximo, formState, onInputChange } = useForm(criterio);

    // console.log(formState)

    useEffect(() => {
        dispatch(setSelectedCriterio(formState));
    }, [formState]);
    return (
        <form className="form-horizontal form-material">
            <div className="form-group">
                <div className="col-md-12 m-b-20">
                    <input type="text" name='nombre_criterio' value={nombre_criterio} className="form-control" placeholder="Nombre" onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20">
                    <input type="text" name="descripcion_criterio" value={descripcion_criterio} className="form-control" placeholder="Descripcion" onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Rango Minimo</label>
                    <input type="number" className="form-control" name="minimo" value={minimo} onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Rango Maximo</label>
                    <input type="number" className="form-control" name="maximo" value={maximo} onChange={onInputChange} />
                </div>
            </div>

        </form>
    )
}
