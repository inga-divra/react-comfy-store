import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <nav>
                <span className="text-10xl text-primary">Comfy</span>
            </nav>
            <Outlet />
        </>
    );
};

export default HomeLayout;
