export function getDistanceFromToday(mongoDateString) {
  const mongoDate = new Date(mongoDateString);

  const today = new Date();

  const diffInMillis = today - mongoDate;

  const millisInOneDay = 24 * 60 * 60 * 1000;
  const diffInDays = Math.floor(diffInMillis / millisInOneDay);

  return diffInDays;
}
