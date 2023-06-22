export function convertDateFormat(dateString: string | number) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const convertedDate = day + "/" + month + "/" + year;
  return convertedDate;
}
