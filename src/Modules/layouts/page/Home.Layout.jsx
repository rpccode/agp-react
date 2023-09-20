import { Outlet } from "react-router-dom"
import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SiderBar } from "../components/SiderBar"


const HomeLayout = () => {
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <SiderBar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        {/* <!-- Bread crumb and right sidebar toggle --> */}
                        <BreadCrumb />
                        {/* <!-- End Bread crumb and right sidebar toggle --> */}
                        {/* ============================================================== */}
                        {/* Start Page Content */}
                        {/* ============================================================== */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card-primary">
                                    <div className="card-body ">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* End PAge Content */}
                        {/* ============================================================== */}

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomeLayout