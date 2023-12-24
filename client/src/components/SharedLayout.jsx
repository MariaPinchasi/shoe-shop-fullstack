import { Outlet } from "react-router"
import { ToastContainer } from 'react-toastify';
import Navbar from "./Navbar";

const SharedLayout = () => {

    return (
        <>
            <div className="container">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <footer className="footer">
                    <p>All Rights Reserved 2023</p>
                </footer>
            </div>
            <ToastContainer />

        </>
    )
}

export default SharedLayout