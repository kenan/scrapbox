function myArray() {

  let a = [1, 2, 3];
  var b = ['a', 'b']
  let c: string[] = ['a']
  let d = [1, 'a']
  const e = [2, 'b']
  
  let f = ['red']
  f.push('blue')
  // f.push(true) error 
  
  let g = []
  g.push(1)
  g.push('red')
  
  let h: number[] = []
  h.push(1)
  // h.push('red') error
  
  d.map(_ => {
    if (typeof _ === 'number') {
      return _ * 3
    }
    return _.toUpperCase()
  })
  
  function buildArray() {
    let a = [] // any[]
    a.push(1) // any[]
    a.push('x') // any[]
    return a // (string|number) []
  }
  
  let localArray = buildArray() // (string|number)[]
  // localArray.push(true) // trueを割り当てられません
}
