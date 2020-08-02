declare global {
  interface Array<T> {
    zip<U>(list: U[]): [T, U][]
  }  
}

// zipを実装
Array.prototype.zip = function(list) {
  return this.map((v, k) =>
  [v, list[k]]
  )
}