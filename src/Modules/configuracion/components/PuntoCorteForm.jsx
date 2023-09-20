/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { useEffect } from "react";
import { setSelectedPuntoCorte } from "../slices/puntoCorteSlice";


export const PuntoCorteForm = () => {
    const dispatch = useDispatch();
    const { puntoCortes, selecionada: puntoCorte, messageSave } = useSelector((state) => state.puntoCorte);
    // console.log(criterio)
    const { id, punto_max, punto_min, estado, fecha, formState, onInputChange } = useForm(puntoCorte);

    // console.log(formState)

    useEffect(() => {
        dispatch(setSelectedPuntoCorte(formState));
    }, [formState]);
    return (
        <form className="form-horizontal form-material">
            <div className="form-group">

                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Punto Minimo</label>
                    <input type="number" className="form-control" name='punto_max' value={punto_max} onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Punto Maximo</label>
                    <input type="number" className="form-control" name="punto_min" value={punto_min} onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Punto Maximo</label>
                    <select className="custom-select col-12" id="inlineFormCustomSelect" name="estado" value={estado} onChange={onInputChange} >
                        <option defaultValue>--- Estados ---</option>
                        <option value={1}>Activo</option>
                        <option value={2}>Inactivo</option>

                    </select>
                </div>
            </div>

        </form>
    )
}
