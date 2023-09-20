/* eslint-disable react/prop-types */


export const CajaPuntuacion = ({ valor, title, width = 4 }) => {
    return (
        <div className={`col-md-${width}`}>
            <div className="form-group row">
                <label className="control-label text-right col-md-6">{title}:</label>
                <div className="col-md-6">
                    <p className="form-control-static">{valor} </p>
                </div>
            </div>
        </div>
    )
}
