import React from 'react'
import {
    Routes,
    Route,
    Link,
    Navigate,
    Outlet,
} from 'react-router-dom';
// import { useSelector } from 'react-redux'



function Protected({ isAllowed, isAuthenticated, redirectPath = '/',
    children }) {

    if (!isAllowed) {
        // return <Navigate to="/" replace />
        return <Navigate to={redirectPath} replace />
    }
    // return children
    return children ? children : <Outlet />;

}
export default Protected