const getMonth_Month2 = (month: any) => {
  let currentMonth = month + 1;
  if (currentMonth === 2) return "FEBRUARY";
  if (currentMonth === 3) return "MARCH";
  if (currentMonth === 4) return "APRIL";
  if (currentMonth === 5) return "MAY";
  if (currentMonth === 6) return "JUNE";
  if (currentMonth === 7) return "JULY";
  if (currentMonth === 8) return "AUGUST";
  if (currentMonth === 9) return "SEPTEMBER";
  if (currentMonth === 10) return "OCTOBER";
  if (currentMonth === 11) return "NOVEMBER";
  if (currentMonth === 12) return "DECEMBER";
  if (currentMonth === 13) return "JANUARY";
  return "error in file getMonth_Month2";
};

export default getMonth_Month2;
