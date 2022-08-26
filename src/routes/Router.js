import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Layout from "../pages/Layout";

function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}>
                    </Route>
                    <Route path={'about'} element={<About/>}>
                    </Route>

                    <Route path={'auth'} element={<Auth/>}>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default Router;