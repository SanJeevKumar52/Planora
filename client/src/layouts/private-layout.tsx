import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


function PrivateLayout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
    }, []);
    return (
        <div>{children}</div>
    )
}

export default PrivateLayout 