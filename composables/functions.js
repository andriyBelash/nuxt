
// convert date anf time
export function dataParse(date, type) {
  if (!date) return '-'
  const parse = Date.parse(date)
  const d = new Date(parse)
  const yyyy = d.getFullYear();
  let mm = d.getMonth() + 1; // Months start at 0!
  let dd = d.getDate();
  let hh = d.getHours()
  let ii = d.getMinutes()
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (ii < 10) ii = '0' + ii;
  const i = '/'
  if (type === 'onlyTime') {
    return hh + ":" + ii
  } else if (type === 'YMD') {
    return dd+ i +mm+ i +yyyy
  } else {
    return dd+ i +mm+ i +yyyy + "  " + hh + ":" + ii
  }
}

//debounce

export function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

