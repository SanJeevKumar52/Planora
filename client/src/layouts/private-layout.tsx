import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { getCurrentUser } from "../api-services/users-service";
import { message } from "antd";
import usersGlobalStore, { type UsersStoreType } from "../store/users-store";


function PrivateLayout({ children }: { children: React.ReactNode }) {
   
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false)
    const {setCurrentUser,currentUser}:UsersStoreType =usersGlobalStore() as UsersStoreType;

    const getData = async () => {
        try {
            const response = await getCurrentUser();
            setCurrentUser(response.data);
        } catch (error:any) {
            message.error(error.response?.data?.message || "Failed to fetch user data");
        }
    }
    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
        else {
            getData();
            setShowContent(true);
        }
    }, []);
    return (
        showContent && currentUser  && <div className="flex gap-5 h-screen">
            <Sidebar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}


export default PrivateLayout 