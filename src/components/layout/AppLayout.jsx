import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { getUserInfo } from "../../services/chat-service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";

const AppLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUserInfo().then(response => dispatch(setUser(response)))
    },[])
    return <div style={{
        padding: '50px 0px 0px 250px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
