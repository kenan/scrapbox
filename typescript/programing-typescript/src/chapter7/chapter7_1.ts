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
  function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFurureError {
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
    const result = parse(ask())
    if (result instanceof InvalidDateFormatError) {
      console.error(result.message)
    } else if (result instanceof DateIsInTheFurureError) {
      console.error(result.message)
    } else {
      console.info('Date is', result.toISOString())
    }
  } catch(e) {
    if (e instanceof InvalidDateFormatError) {
      console.error(e.message)
    } else if (e instanceof DateIsInTheFurureError) {
      console.info(e.message)
    } else {
      throw e
    }
  }

  // function x(): T | Error1 {
  // }
  // function y(): U | Error1 | Error2 {
  //   let a = x()
  //   if (a instanceof Error) {
  //     return a
  //   }
  // }
  // function z(): U | Error1 | Error2 | Error3 {
  //   let a = y()
  //   if (a instanceof Error) {
  //     return a
  //   }
  // }
}