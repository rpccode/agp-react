import '../css/style.css'

export const ProgressBar = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body ">
                            <div className="progress">
                                <div className="progress-bar bg-info progress-bar-striped active" role="progressbar" style={{ width: "85%", height: "10px" }}> <span className="sr-only">85% Complete</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">
                                        Hate it
                                    </button>
                                </span>
                                <input type="text" className="form-control" placeholder="Product name" />
                                <span className="input-group-btn">
                                    <button className="btn btn-success" type="button">
                                        Love it
                                    </button>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">

                        </div>
                    </div>
                </div>

            </div>














        </>
    )
}
