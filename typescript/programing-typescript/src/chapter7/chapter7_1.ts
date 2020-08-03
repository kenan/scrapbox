function chapter7_1() {
  function ask() {
    return prompt('When is your birthday?')
  }

  function parse(birthday: string): Date {
    let date = new Date(birthday)
    if (isValid(date)) {
      throw new RangeError('Enter a date in the from YYYY/MM/DD')
    }
    return date
  }

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
  }

  try {
    let date = parse(ask())
    console.info('Date is', date.toISOString())
  } catch(e) {
    console.error('Error parsing date for some reason')
  }
}