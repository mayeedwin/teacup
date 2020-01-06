// getting the timestamp and formatting
export const Timestamp = doc => {
  // get date & time posted
  let time = doc.data().timestamp;
  let date = time.toDate();
  let shortDate = date.toDateString();
  let shortTime = date.toLocaleTimeString();
  let fullDate = `${shortDate}, ${shortTime}`;

  return fullDate;
};
