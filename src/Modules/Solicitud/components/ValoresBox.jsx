/* eslint-disable react/prop-types */


export const ValoresBox = ({ title, value, color = 'success', width = 2, lg = 4, md = 6 }) => {
    return (
        <div className={`col-md-${md} col-lg-${lg} col-xlg-${width}`}>
            <div className="card">
                <div className={`box bg-${color} text-center`}>
                    <h6 className="text-white">{title}</h6>
                    <h1 className="font-light text-white">{value}</h1>
                </div>
            </div>
        </div>
    )
}
