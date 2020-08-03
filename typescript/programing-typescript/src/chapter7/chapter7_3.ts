function chapter7_3() {
  function parse(birthday: string): Date[] {
    const date = new Date(birthday)
    if (!isValid(date)) {
      return []
    }
    return [date]
  }

  let date = parse(ask())
  date
  .map(_ => _.toISOString())
  .forEach(_ => console.info('Date is', _))

  function ask() {
    const result = prompt('When is your birthday?')
    if (result === null) {
      return []
    }
    return [result]
  }

  ask()
  .map(parse)
  .map(date => date.toISOString())
  .forEach(date => console.info('Date is', date))

  flatten(ask())
  .map(parse)
  .map(date => date.toISOString())
  .forEach(date => console.info('Date is', date))

  function flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat.apply([], array)
  }

  ask()
  .flatMap(parse)
  .flatMap(date => new Some(date.toISOString()))
  .flatMap(date => new Some('Date is ' + date))
  .getOrElse('Error parsing date for some reason')


  // interface Option<T> {}
  // class Some<T> implements Option<T> {
  //   constructor(private value: T) {}
  // }
  // class None implements Option<never> {}
  
  // interface Option<T> {
  //   flatMap<U>(f: (value: T) => Option<U>): Option<U>
  //   getOrElse(value: T): T
  // }
  // class Some<T> extends Option<T> {
  //   constructor(private value: T) {}
  // }
  // class None extends Option<never> {}

  // interface Option<T> {
  //   flatMap<U>(f: (value: T) => Option<U>): Option<U>
  //   getOrElse(value: T): T
  // }
  // class Some<T> implements Option<T> {
  //   constructor(private value: T) {}
  //   flatMap<U>(f: (value: T) => Option<U>): Option<U> {
  //     return f(this.value)
  //   }
  //   getOrElse(): T {
  //     return this.value
  //   }
  // }
  // class None implements Option<never> {
  //   flatMap<U>(): Option<U> {
  //     return this
  //   }
  //   getOrElse<U>(value: U): U {
  //     return value
  //   }
  // }
  interface Option<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
  }

  class Some<T> implements Option<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
      return f(this.value)
    }
  }

  class None implements Option<never> {
    flatMap(): None {
      return this
    }
    getOrElse<U>(value: U): U {
      return value
    }
  }

  function Option<T>(value: null | undefined): None
  function Option<T>(value: T): Some<T>
  function Option<T>(value: T): Option<T> {
    if (value == null) {
      return new None
    }
    return new Some(value)
  }

  let result = Option(6)
    .flatMap(n => Option(n * 3))
    .flatMap(n => new None)
    .getOrElse(7)

  // ask()
  // .flatMap(parse)
  // .flatMap(date => new Some(date.toISOString()))
  // .flatMap(date => new Some('Date is ' + date))
  // .getOrElse('Error parsing date for some reason')

}