import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { setSelectedMonto } from "../slices/montoSlices";


export const MontosForm = () => {
    const dispatch = useDispatch();
    const { montos, selecionada: monto } = useSelector((state) => state.montos);

    // / console.log(criterio)
    const { puntuacion, monto_min, monto_max, fecha, formState, onInputChange } = useForm(monto);

    useEffect(() => {
        dispatch(setSelectedMonto(formState))
    }, [formState])


    return (
        <form className="form-horizontal ">
            <div className="form-group">
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label" >Puntuacion Necesaria</label>
                    <input type="text" className="form-control" name="puntuacion" value={puntuacion} onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Monto Minimo</label>
                    <input type="number" className="form-control" name="monto_min" value={monto_min} onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Monto Maximo</label>
                    <input type="number" className="form-control" name="monto_max" value={monto_max} onChange={onInputChange} />
                </div>
            </div>
        </form>
    )
}
