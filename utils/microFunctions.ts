export const timeFormatter = (date: string) => {
  const { format } = require("date-fns");

  const formattedDate = format(new Date(date), "dd MMM, yyyy");
  return formattedDate;
};
