import { message } from "antd";
import { getCurrentUser } from "../../../api-services/users-service";
import { useEffect, useState } from "react";

function HomePage() {
    const [user, setUser] = useState(null);

    const getData = async () => {
        try {
            const response = await getCurrentUser();
            setUser(response.data);
        } catch (error: any) {
            message.error(error?.response?.data?.message || error.message || "Failed to fetch user data");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>HomePage</div>
    );
}

export default HomePage;
