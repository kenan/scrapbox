function practice_tuple() {
  let a: [number] = [1]

  let b: [string, string, number] = ['malcolm', 'gloadwell', 1963]
  
  //  b = ['queen', 'elizabeth', 'ii', 1926] // stringにnumberを割り当てられません

  let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
  ]

  // 上と定義は同じ
  let moreTrainsFares: ([number] | [number, number])[] = [

  ]

  // ...string[]は可変長
  let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Clarie']

  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]

  //as.push(6) // pushはreadonlyにはない

  type A = readonly string[]
  type B = ReadonlyArray<string>
  type C = Readonly<string[]>
  type D = readonly [number, string]
  type E = Readonly<[number, string]>
  
}
