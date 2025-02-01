const ProfileButton = () => {
  return (
    <button className="flex flex-row items-center space-x-2 cursor-pointer hover:bg-liver rounded-[12px] px-1 py-4 w-32 h-9">
      <img
        src="/src/assets/icons/account_circle.svg"
        alt="Account"
        width={32}
        height={32}
      />
      <p className="text-base text-white font-semibold">José</p>
    </button>
  );
};

export default ProfileButton;
