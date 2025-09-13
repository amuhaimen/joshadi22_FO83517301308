import profileImg from "@/public/header/images/profileImg.png";
import NotificationIcon from "@/public/header/NotificationIcon";
import SearchIcon from "@/public/header/SearchIcon";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAuth } from "@/app/context/AuthContext"; // Import useAuth

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { role, logout } = useAuth(); // Get the role and logout from the context

  const handleLogout = () => {
    console.log("Logging out...");
    logout(); // Call logout when the user clicks logout
  };

  const handleLogoutChange = (value: string) => {
    if (value === "logout") {
      handleLogout(); // Trigger logout if "logout" is selected
    }
  };

  return (
    <header className="main_bg shadow-sm py-3 pr-8">
      <div className="flex items-center justify-between p-4">
        <div>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            onClick={onMenuClick}
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-0">
          {/* Notification & Search */}
          <div className="flex gap-2 items-center">
            <div>
              <SearchIcon className="bg-[#232323] p-2 rounded-full cursor-pointer" />
            </div>
            <div className="relative">
              <NotificationIcon className="bg-[#232323] p-2 rounded-full cursor-pointer" />
              <span className="absolute -top-1 -right-[1px] bg-[#EB3D4D] rounded-full text-white text-xs w-3.5 h-3.5 flex justify-center items-center">
                2
              </span>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="border-l-2 border-[#4A4C56] h-6 mx-6 "></div>

          {/* Profile Info */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={profileImg} alt="profile-img" />
            <div>
              <h2 className="text-white text-base">Bryan Adams</h2>
              <div className="flex items-center gap-2">
                <p className="text-sm text-[#D2D2D5]">{role || "Role"}</p> {/* Display dynamic role */}
                <select
                  className="text-xs text-white bg-[#1f1f1f] w-full"
                  onChange={(e) => handleLogoutChange(e.target.value)}
                  defaultValue="profile"
                >
                  <option className="bg-transparent text-white" value="profile">
                    Profile
                  </option>
                  <option
                    className="bg-transparent text-white"
                    value="logout"
                    onClick={handleLogout}
                  >
                    Log out
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
