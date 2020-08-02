function chapter6_5_3() {
  type A = number | string
  type B = string
  type C = Exclude<A, B>

  type A1 = number | string
  type B1 = string
  type C1 = Extract<A, B>

  type A2 = {a?: number | null}
  type B2 = NonNullable<A2['a']>

  type F = (a: number) => string
  type R = ReturnType<F>
  
  type A3 = {new(): B2}
  type B3 = {b: number}
  type I = InstanceType<A3>

}
