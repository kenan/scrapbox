function chapter6_5_1() {
  type ToArray<T> = T[]
  // type A = ToArray<number> // number[]
  type B = ToArray<number | string> // (number | string)[]

  type ToArray2<T> = T extends unknown ? T[] : T[]
  type A = ToArray2<number> // number[]
  type B2 = ToArray2<number | string> // number[] | string[]

  type Without<T, U> = T extends U ? never : T

 type A0 = Without<boolean | number | string, boolean>

  type A1 = Without<boolean, boolean>
        | Without<number, boolean>
        | Without<string, boolean>
  
  type A2 = (boolean extends boolean ? never : boolean)
         | (number extends boolean ? never : number)
         | (string extends boolean ? never : string)
  type A3 = never
          | number
          | string
  type A4 = number | string
}
