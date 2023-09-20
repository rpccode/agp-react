

export const SalesOverview = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                                    <h3 className="card-title m-b-5"><span className="lstick" />Sales Overview </h3>
                                </div>
                                <div className="ml-auto">
                                    <select className="custom-select b-0">
                                        <option value={0}>January 2017</option>
                                        <option value={1}>February 2017</option>
                                        <option value={2}>March 2017</option>
                                        <option value={3}>April 2017</option>
                                    </select>
                                </div>
                            </div>
                            <div id="sales-overview2" className="p-relative" style={{ height: '360px' }} />
                            <div className="stats-bar">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">Total Sales</h6>
                                            <h3 className="m-b-0">$10,345</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">This Month</h6>
                                            <h3 className="m-b-0">$7,589</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">This Week</h6>
                                            <h3 className="m-b-0">$1,476</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                                    <h3 className="card-title m-b-5"><span className="lstick" />Sales Overview </h3>
                                </div>
                                <div className="ml-auto">
                                    <select className="custom-select b-0">
                                        <option value={0}>January 2017</option>
                                        <option value={1}>February 2017</option>
                                        <option value={2}>March 2017</option>
                                        <option value={3}>April 2017</option>
                                    </select>
                                </div>
                            </div>
                            <div id="ct-sales3-chart" className="p-relative" style={{ height: '360px' }} />
                            <div className="stats-bar">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">Total Sales</h6>
                                            <h3 className="m-b-0">$10,345</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">This Month</h6>
                                            <h3 className="m-b-0">$7,589</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="p-20">
                                            <h6 className="m-b-0">This Week</h6>
                                            <h3 className="m-b-0">$1,476</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
