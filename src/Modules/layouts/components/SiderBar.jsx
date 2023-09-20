import { Link } from "react-router-dom"
import { profile } from "../../../assets/images"

export const SiderBar = () => {
    return (

        <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><img src={profile} alt="user" /><span className="hide-menu">Steave Jobs </span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#" onClick={(e) => e.preventDefault()}>My Profile </a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>My Balance</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Inbox</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Account Setting</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Logout</a></li>
                            </ul>
                        </li>
                        <li className="nav-devider" />
                        <li className="nav-small-cap">PERSONAL</li>
                        <li> <Link className="waves-effect waves-dark" to='dashboard' >
                            <i className="mdi mdi-gauge" />
                            <span className="hide-menu">Dashboard</span>
                        </Link>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="mdi mdi-bullseye" /><span className="hide-menu">Solicitud</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to="solicitud">Solicitudes</Link></li>
                                <li><Link to="solicitud/informacion">Infomacion</Link></li>
                                {/* {/* <li><Link to="#">Support Ticket</Link></li> */}
                                <li><Link to="solicitud/criterios">Solicitud criterio</Link></li>
                                {/* <li><Link to="#">Contact Grid</Link></li>
                                <li><Link to="#">Contact Detail</Link></li> */}
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="ti-settings" /><span className="hide-menu">Configuracion</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to="criterios">Criterios</Link></li>
                                <li><Link to="montos">Montos</Link></li>
                                <li><Link to="punto-corte">Punto Corte</Link></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="mdi mdi-chart-bubble" /><span className="hide-menu">Ui Elements <span className="label label-rouded label-danger pull-right">25</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="ui-cards.html">Cards</a></li>
                                <li><a href="ui-user-card.html">User Cards</a></li>
                                <li><a href="ui-buttons.html">Buttons</a></li>
                                <li><a href="ui-modals.html">Modals</a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    )
}
