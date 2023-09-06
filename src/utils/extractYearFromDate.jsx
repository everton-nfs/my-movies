export function extractYearFromDate(date){
  const year = date.split("-")[0];
  return parseInt(year);
}