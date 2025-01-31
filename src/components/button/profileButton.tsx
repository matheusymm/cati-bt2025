const ProfileButton = () => {
  return (
    <button className="flex flex-row items-center space-x-2 cursor-pointer">
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
