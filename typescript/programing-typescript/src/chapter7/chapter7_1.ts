function chapter7_1() {
  class InvalidDateFormatError extends RangeError{}
  class DateIsInTheFurureError extends RangeError{}

  function ask() {
    return prompt('When is your birthday?')
  }

  /**
   * @throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
   * @throws {DateIsInTheFurureError} ユーザーが未来の日付を入力した
   * @param birthday 
   */
  function parse(birthday: string): Date {
    const date = new Date(birthday)
    if (!isValid(date)) {
      throw new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
      throw new DateIsInTheFurureError('Are you a timelord')
    }
    return date
  }

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
  }

  try {
    const date = parse(ask())
    console.info('Date is', date.toISOString())
  } catch(e) {
    if (e instanceof InvalidDateFormatError) {
      console.error(e.message)
    } else if (e instanceof DateIsInTheFurureError) {
      console.info(e.message)
    } else {
      throw e
    }
  }

  
}