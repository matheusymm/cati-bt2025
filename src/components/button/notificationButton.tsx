const NotificationButton = () => {
  return (
    <button className="flex justify-center items-center cursor-pointer hover:bg-liver active:bg-dark-charcoal rounded-[2px] p-1 2-8 h-8">
      <img
        src="/src/assets/icons/NotificationButton.svg"
        alt="Notification"
        width={32}
        height={33}
      />
    </button>
  );
};

export default NotificationButton;
