import NotificationButton from "./button/notificationButton";
import ProfileButton from "./button/profileButton";

const Header = () => {
  return (
    <header className="flex bg-gradient-to-r from-davy to-taupe justify-between w-full h-[84px] py-3 px-20 border-b border-liver shadow">
      <div className="flex flex-row space-x-1 items-center hover:cursor-pointer">
        <img src="/logo.png" alt="logo" width={55} height={60} />
        <p className="text-base text-white font-semibold break-all">
          Peugeot <br /> Tasks
        </p>
      </div>
      <div className="flex flex-row space-x-3">
        <NotificationButton />
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;
