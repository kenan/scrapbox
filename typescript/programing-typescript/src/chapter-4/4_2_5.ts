function hoge425() {
  type TreeNode = {
    value: string
  }
  type LeafNode = TreeNode & {
    isLeaf: true
  }
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }
  
  let a: TreeNode = {value: 'a'}
  let b: LeafNode = {value: 'b', isLeaf: true}
  let c: InnerNode = {value: 'c', children: [b]}
  
  let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
  let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
  let c1 = mapNode(c, _ => _.toUpperCase())
  
  function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
    return {
      ...node,
      value: f(node.value)
    }
  }
  
  // 複数の制約を持つ制限付きポリモーフィズム
  type HasSides = {numberOfSides: number}
  type SidesHaveLength = {sideLength: number}
  
  function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
  }
  
  // 制限付きポリモーフィズムを使って、可変長引数をモデル化する
  // function call(
  //   f: (...args: unknown[]) => unknown,
  //   ...args: unknown[]
  // ): unknown {
  //   return f(...args)
  // }
  
  function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
  }
  
  // call(fill, 10, 'a') // 10個の'a'からなる配列と評価れます
  
  /* node .\4_2_5.js   
  [
    'a', 'a', 'a', 'a',
    'a', 'a', 'a', 'a',
    'a', 'a'
  ]
  */
  
  function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
  ): R {
    return f(...args)
  }
  
  let e = call(fill, 10, 'a')
  // let f = call(fill, 10)
  // let g = call(fill, 10, 'a', 'z')
  
}
