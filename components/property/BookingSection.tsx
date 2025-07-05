import { useEffect, useState } from "react";

const BookingSection: React.FC<{ price: number; discount?: string }> = ({
  price,
  discount,
}) => {
  const disc: string = discount
    ? `-$${(+discount / 100) * price}`
    : "No Discounts";
  const service: string = `-$${((4.52 / 100) * price).toFixed(2)}`;

  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
    const [dayDifference, setDayDifference] = useState<number | null>(null);

  const HandleStartDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStartDate(e.target.value);
    console.log(selectedStartDate, selectedEndDate);
  };

  const HandleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEndDate(e.target.value);
    console.log(selectedStartDate, selectedEndDate);
  };

  useEffect(() => {
    if (!selectedStartDate || !selectedEndDate) {
      setDayDifference(null);
      return;
    }

    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);

    if (
      isNaN(start.getTime()) || 
      isNaN(end.getTime()) || 
      end <= start
    ) {
      setDayDifference(null);
      return;
    }


    const diffInDays = Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDayDifference(diffInDays);
  }, [selectedStartDate, selectedEndDate]);

  return (
    <div className="bg-white  p-6 shadow-md rounded-lg md:mr-10">
      <h3 className="text-xl font-semibold text-black">${price}/night</h3>
      <div className="mt-4">
        <label className="text-black font-bold">Check-in</label>
        <input
          type="date"
          value={selectedStartDate}
          onChange={HandleStartDayChange}
          className="border  p-2 outline-[#929292] text-[#929292] font-bold w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-black font-bold">Check-out</label>
        <input
          type="date"
          value={selectedEndDate}
          onChange={HandleEndDateChange}
          className="border text-[#929292] font-bold p-2 w-full mt-2 placeholder-gray-400::placeholder"
        />
      </div>

      {/* Total payment */}
      <div className="mt-6 flex flex-col gap-6  text-[14px] ">
        <span className="flex justify-between align-baseline items-center">
          <p className="text-[#929292] font-bold">{`$${price} x ${(dayDifference ?? 0)} day(s)`}</p>
          <p className="text-black font-bold">{`$${price * (dayDifference ?? 0)}`}</p>
        </span>
        <span className="flex justify-between align-baseline items-center">
          <p className="text-[#929292] font-bold">Weekly Discounts</p>
          <p className="text-black font-bold">{disc}</p>
        </span>
        <span className="flex justify-between align-baseline items-center">
          <p className="text-[#929292] font-bold">Service fee</p>
          <p className="text-black font-bold">{service}</p>
        </span>
        <p className="text-[#929292] font-bold">
          Total payment:{" "}
          <strong className="text-[#34967C]">${price * (dayDifference ?? 0)}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 bg-[#34967C] text-white w-full py-2 px-4 rounded-md cursor-grab">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
