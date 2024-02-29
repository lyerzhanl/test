import React from 'react';
import MainNavbar from "../components/nav/MainNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import {useLocation} from "react-router-dom";

const RenderContent = () => {
    const location = useLocation();

    const mainPages = [
        '/home',
        '/exercises',
        '/meal',
        '/training_programs'
    ];
    return (
        <>{mainPages.includes(location.pathname) && (
            <>
                <MainNavbar/>
                <Sidebar/>
            </>
        )}</>
    );
};

export default RenderContent;