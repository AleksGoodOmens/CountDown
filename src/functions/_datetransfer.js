const getDateInDigits = () => {
  const getDays = (value) => Math.floor(value / (1000 * 60 * 60 * 24));
  const getHours = (value) =>
    Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const getMinutes = (value) =>
    Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
  const getSeconds = (value) => Math.floor((value % (1000 * 60)) / 1000);

  return { getDays, getHours, getMinutes, getSeconds };
};

export default getDateInDigits;
