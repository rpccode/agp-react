/* eslint-disable react/prop-types */


export const MontosItem = ({ nombre, descripcion, minimo, maximo, }) => {
    return (
        <>
            <td>{nombre}</td>
            <td>
                {descripcion}
            </td>
            <td>{minimo}</td>

            <td>{maximo}</td>
            <td className="text-nowrap">
                <a href="#" data-toggle="tooltip" data-original-title="Edit"> <i className="fa fa-pencil text-inverse m-r-10" /> </a>
                <a href="#" data-toggle="tooltip" data-original-title="Close"> <i className="fa fa-close text-danger" /> </a>
            </td>

        </>
    )
}
