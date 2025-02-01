const Footer = () => {
  return (
    <footer className="flex bg-gradient-to-r from-davy to-taupe justify-between items-center w-full h-[75px] py-2.5 px-10 border-b border-liver shadow">
      <button>
        <img
          src="/src/assets/icons/Home.svg"
          alt="Home"
          width={33}
          height={33}
        />
      </button>
      <button>
        <img
          src="/src/assets/icons/NotificationButton.svg"
          alt="Notification"
          width={33}
          height={33}
        />
      </button>
      <button>
        <img
          src="/src/assets/icons/account_circle.svg"
          alt="profile"
          width={33}
          height={33}
        />
      </button>
    </footer>
  );
};

export default Footer;
