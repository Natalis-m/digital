export function getDayInfo(date) {
  const datePublication = new Date(date);

  return `${getWeekDay(datePublication)}, ${getWeekOfMonth(datePublication)} неделя ${getMonth(
    datePublication
  )} ${datePublication.getFullYear()} года`;
}

function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[date.getDay()];
}

const getWeekOfMonth = date => {
  let firstDayOfMonthDate = new Date(date);
  firstDayOfMonthDate.setDate(1);

  let firstDayOfMonthDayNumber =
    firstDayOfMonthDate.getDay() - 1 < 0 ? 6 : firstDayOfMonthDate.getDay() - 1;

  let adjustedIndex = date.getDate() - 1 + firstDayOfMonthDayNumber;
  let weekNumbers = ['1', '2', '3', '4', '5', '6'];
  let weekNumberIndex = Math.floor(adjustedIndex / 7);

  return weekNumbers[weekNumberIndex];
};

function getMonth(date) {
  let month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ];
  return month[date.getMonth()];
}
