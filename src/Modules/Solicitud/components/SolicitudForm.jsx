import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { setNueva } from "../../configuracion/slices/solicitudSlice";


export const SolicitudForm = () => {
    const dispatch = useDispatch();
    const { solicitudess, selecionada: solicitud, nueva, messageSave } = useSelector((state) => state.solicitud);
    // console.log(criterio)
    const { id, tipo, monto, formState, onInputChange } = useForm(nueva);

    // console.log(formState)

    useEffect(() => {
        dispatch(setNueva(formState));
    }, [formState]);
    return (
        <form className="form-horizontal form-material">
            <div className="form-group">
                <div className="col-md-12 m-b-20">
                    <input type="text" name='id' value={id} className="form-control" placeholder="Cliente" onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20">
                    <input type="text" name="tipo" value={tipo} className="form-control" placeholder="Tipo PrestamoS" onChange={onInputChange} />
                </div>
                <div className="col-md-12 m-b-20 form-group">
                    <label className="control-label">Monto</label>
                    <input type="number" className="form-control" name="monto" value={monto} onChange={onInputChange} />
                </div>
            </div>

        </form>
    )
}
