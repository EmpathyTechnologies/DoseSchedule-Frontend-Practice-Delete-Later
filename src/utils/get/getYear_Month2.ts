const getYear_Month2 = async (year: any, month: any) => {
  if (month === 12) return year + 1;
  return year;
};

export default getYear_Month2;
