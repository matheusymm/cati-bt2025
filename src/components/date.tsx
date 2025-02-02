interface DateProps {
  date: string;
  isEdit: boolean;
}

const DateComponent = ({ date, isEdit }: DateProps) => {
  const dateToPtBr = new window.Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const [day, month, year] = dateToPtBr.split(" de ");
  const formattedDate = `${day} ${month
    .toUpperCase()
    .replace(".", "")}, ${year}`;

  return (
    <div>
      {isEdit ? (
        <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 text-white">
          <img
            src="/src/assets/icons/BsFillCalendarWeekFill.svg"
            alt="Calendar"
          />
          <p className=" font-semibold text-sm">{formattedDate}</p>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-sm bg-chinese-white">
          <img
            src="/src/assets/icons/BsFillCalendarWeekFill.svg"
            alt="Calendar"
          />
          <p className="text-dim-grey font-semibold text-sm">{formattedDate}</p>
        </div>
      )}
    </div>
  );
};

export default DateComponent;
