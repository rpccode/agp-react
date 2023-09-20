/* eslint-disable react/prop-types */

export const Stats = ({ icon = "", text = "", value = "" }) => {
    return (
        <div className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="m-r-20 align-self-center"><img src={icon} alt="Income" /></div>
                        <div className="align-self-center">
                            <h6 className="text-muted m-t-10 m-b-0">{text}</h6>
                            <h2 className="m-t-0">{value}</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
