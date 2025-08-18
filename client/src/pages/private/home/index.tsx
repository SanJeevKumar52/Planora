import type { UsersStoreType } from "../../../store/users-store";
import usersGlobalStore from "../../../store/users-store";

function HomePage() {
    const { currentUser }: UsersStoreType = usersGlobalStore() as UsersStoreType;

    return (
        <div>
            <h1>HomePage</h1>
            <p>Welcome, {currentUser?.name || "Guest"}!</p>


        </div>
    );
}

export default HomePage;
