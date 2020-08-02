function chapter6_5_2() {
  type ElementType<T> = T extends unknown[] ? T[number] : T
  type A = ElementType<number[]>

  type ElementType2<T> = T extends (infer U)[] ? U : T
  type B = ElementType2<number[]>

  type ElementUgly<T, U> = T extends U[] ? U : T
  // type C = ElementUgly<number[]>
  type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never

  type F = typeof Array['prototype']['slice']
}