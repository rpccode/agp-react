

export const ProyectMounts = () => {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div>
                                <h4 className="card-title"><span className="lstick" />Projects of the Month</h4></div>
                            <div className="ml-auto">
                                <select className="custom-select b-0">
                                    <option value={0}>January 2017</option>
                                    <option value={1}>February 2017</option>
                                    <option value={2}>March 2017</option>
                                    <option value={3}>April 2017</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-responsive m-t-20">
                            <table className="table vm no-th-brd pro-of-month">
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Assigned</th>
                                        <th>Name</th>
                                        <th>Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '50px' }}><span className="round"><img src="./src/assets/images/users/1.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small></td>
                                        <td>Elite Admin</td>
                                        <td><span className="label label-success label-rounded">Low</span></td>
                                    </tr>
                                    <tr className="active">
                                        <td><span className="round"><img src="./src/assets/images/users/2.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Andrew</h6><small className="text-muted">Project Manager</small></td>
                                        <td>Real Homes</td>
                                        <td><span className="label label-info label-rounded">Medium</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-success"><img src="./src/assets/images/users/3.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Bhavesh patel</h6><small className="text-muted">Developer</small></td>
                                        <td>MedicalPro Theme</td>
                                        <td><span className="label label-primary label-rounded">High</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-primary"><img src="./src/assets/images/users/4.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small></td>
                                        <td>Elite Admin</td>
                                        <td><span className="label label-danger label-rounded">Low</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-warning"><img src="./src/assets/images/users/5.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small></td>
                                        <td>Helping Hands</td>
                                        <td><span className="label label-success label-rounded">High</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-danger"><img src="./src/assets/images/users/6.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Johnathan</h6><small className="text-muted">Graphic</small></td>
                                        <td>Digital Agency</td>
                                        <td><span className="label label-info label-rounded">High</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-primary"><img src="./src/assets/images/users/4.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small></td>
                                        <td>Elite Admin</td>
                                        <td><span className="label label-danger label-rounded">Low</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
