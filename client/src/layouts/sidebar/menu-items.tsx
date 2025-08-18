import {
  BookCheck,
  CandlestickChart,
  Home,
  icons,
  List,
  LogOut,
  User,
  UsersRound,
} from "lucide-react";
import type { UserType } from "../../interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


function MenuItems({ user }: { user: UserType }) {

  const iconSize = 16;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={iconSize} />,
      isActive: currentPath === "/",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={iconSize} />,
      isActive: currentPath === "/profile",
    },
    {
      name: "Bookings",
      path: "/profile/bookings",
      icon: <List size={iconSize} />,
      isActive: currentPath === "/profile/bookings",
    },
    {
      name: "Reports",
      path: "/profile/reports",
      icon: <CandlestickChart size={iconSize} />,
      isActive: currentPath === "/profile/reports",
    },
    {
      name: "Logout",
      path: "/login",
      icon: <LogOut size={iconSize} />,
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={iconSize} />,
      isActive: currentPath === "/",
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: <List size={iconSize} />,
      isActive: currentPath.includes("/admin/events"),
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: <BookCheck size={iconSize} />,
      isActive: currentPath.includes("/admin/bookings"),
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <UsersRound size={iconSize} />,
      isActive: currentPath.includes("/admin/users"),
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: <CandlestickChart size={iconSize} />,
      isActive: currentPath.includes("/admin/reports"),
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogOut size={iconSize} />,
    },
  ];

  const menuToRender = user?.isAdmin ? adminMenu : userMenu;


  const onLogout = () => {
    Cookies.remove("token");
    toast.success("You have been logged out successfully!");
    navigate("/login");
  };


  return (
    <div className="lg:bg-gray-200 h-full p-5 w-full">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info">
          Sam
          <b className="text-primary font-bold pl-2">EVENTS</b>
        </h1>
        <span className="text-sm text-gray-600">{user.name}</span>
      </div>

      <div className="flex flex-col gap-10 mt-20">
        {menuToRender.map((item: any) => (
          <div
            className={`cursor-pointer px-5 py-3 rounded flex gap-5 text-sm items-center ${item.isActive ? "bg-info text-white" : ""
              }`}
            key={item.name}
            onClick={() => {
              if (item.name === "Logout") {
                onLogout();
              } else {
                navigate(item.path);
              }
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItems