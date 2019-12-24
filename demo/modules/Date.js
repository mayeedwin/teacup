export const getDate = () => {
  let today = new Date();

  // format date
  let date = today.toDateString();
  let time = today.toLocaleTimeString();
  let dateTime = `${date}, ${time}`;

  // return the formatted date
  return dateTime;
};
