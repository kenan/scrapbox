function chapter6_5() {
  type IsString<T> = T extends string
    ? true
    : false

  type A = IsString<string> // true
  type B = IsString<number> // false
}