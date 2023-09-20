// import { logo } from '../../../assets/images'

export const Header = () => {
    return (



        // Topbar header - style you can find in pages.scss
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                {/* ============================================================== */}
                {/* Logo */}
                {/* ============================================================== */}
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        {/* Logo icon */}<b>
                            {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                            {/* Dark Logo icon */}
                            <img src="../../../src/assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            {/* Light Logo icon */}
                            <img src="../../../src/assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        {/*End Logo icon */}
                        {/* Logo text */}<span>
                            {/* dark Logo text */}
                            <img src="../../../src/assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            {/* Light Logo text */}
                            <img src="../../../src/assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
                </div>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                <div className="navbar-collapse">
                    {/* ============================================================== */}
                    {/* toggle and nav items */}
                    {/* ============================================================== */}
                    <ul className="navbar-nav mr-auto">
                        {/* This is  */}
                        <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="#"><i className="ti-menu" /></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" href="#"><i className="ti-menu" /></a> </li>
                        <li className="nav-item hidden-sm-down" />
                    </ul>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    <ul className="navbar-nav my-lg-0">
                        {/* ============================================================== */}
                        {/* Search */}
                        {/* ============================================================== */}
                        <li className="nav-item hidden-xs-down search-box"> <a className="nav-link hidden-sm-down waves-effect waves-dark" href="#"><i className="ti-search" /></a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a> </form>
                        </li>
                        {/* ============================================================== */}
                        {/* Comment */}
                        {/* ============================================================== */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-message" />
                                <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right mailbox animated fadeIn">
                                <ul>
                                    <li>
                                        <div className="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            {/* Message */}
                                            <a href="#">
                                                <div className="btn btn-danger btn-circle"><i className="fa fa-link" /></div>
                                                <div className="mail-contnet">
                                                    <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="btn btn-success btn-circle"><i className="ti-calendar" /></div>
                                                <div className="mail-contnet">
                                                    <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="btn btn-info btn-circle"><i className="ti-settings" /></div>
                                                <div className="mail-contnet">
                                                    <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="btn btn-primary btn-circle"><i className="ti-user" /></div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center" href="#"> <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* ============================================================== */}
                        {/* End Comment */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Messages */}
                        {/* ============================================================== */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email" />
                                <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                            </a>
                            <div className="dropdown-menu mailbox dropdown-menu-right animated fadeIn" aria-labelledby={2}>
                                <ul>
                                    <li>
                                        <div className="drop-title">You have 4 new messages</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            {/* Message */}
                                            <a href="#">
                                                <div className="user-img"> <img src="../../../src/assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="user-img"> <img src="../../../src/assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                                                <div className="mail-contnet">
                                                    <h5>Sonu Nigam</h5> <span className="mail-desc">Ive sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="user-img"> <img src="../../../src/assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                                                <div className="mail-contnet">
                                                    <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                            </a>
                                            {/* Message */}
                                            <a href="#">
                                                <div className="user-img"> <img src="../../../src/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center" href="#"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* ============================================================== */}
                        {/* End Messages */}
                        {/* ============================================================== */}

                        {/* ============================================================== */}
                        {/* Language */}
                        {/* ============================================================== */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us" /></a>
                            <div className="dropdown-menu dropdown-menu-right animated fadeIn"> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-in" /> India</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr" /> French</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn" /> China</a>                                <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de" /> Dutch</a> </div>
                        </li>
                        {/* ============================================================== */}
                        {/* Profile */}
                        {/* ============================================================== */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../../src/assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
                            <div className="dropdown-menu dropdown-menu-right animated flipInY">
                                <ul className="dropdown-user">
                                    <li>
                                        <div className="dw-user-box">
                                            <div className="u-img"><img src="../../../src/assets/images/users/1.jpg" alt="user" /></div>
                                            <div className="u-text">
                                                <h4>Steave Jobs</h4>
                                                <p className="text-muted">varun@gmail.com</p><a href="pages-profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                        </div>
                                    </li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#"><i className="ti-user" /> My Profile</a></li>
                                    <li><a href="#"><i className="ti-wallet" /> My Balance</a></li>
                                    <li><a href="#"><i className="ti-email" /> Inbox</a></li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#"><i className="ti-settings" /> Account Setting</a></li>
                                    <li role="separator" className="divider" />
                                    <li><a href="#"><i className="fa fa-power-off" /> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        // End Topbar header

    )
}
