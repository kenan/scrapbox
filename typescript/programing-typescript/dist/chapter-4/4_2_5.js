"use strict";
function hoge425() {
    let a = { value: 'a' };
    let b = { value: 'b', isLeaf: true };
    let c = { value: 'c', children: [b] };
    let a1 = mapNode(a, _ => _.toUpperCase()); // TreeNode
    let b1 = mapNode(b, _ => _.toUpperCase()); // LeafNode
    let c1 = mapNode(c, _ => _.toUpperCase());
    function mapNode(node, f) {
        return Object.assign(Object.assign({}, node), { value: f(node.value) });
    }
    function logPerimeter(s) {
        console.log(s.numberOfSides * s.sideLength);
        return s;
    }
    // 制限付きポリモーフィズムを使って、可変長引数をモデル化する
    // function call(
    //   f: (...args: unknown[]) => unknown,
    //   ...args: unknown[]
    // ): unknown {
    //   return f(...args)
    // }
    function fill(length, value) {
        return Array.from({ length }, () => value);
    }
    // call(fill, 10, 'a') // 10個の'a'からなる配列と評価れます
    /* node .\4_2_5.js
    [
      'a', 'a', 'a', 'a',
      'a', 'a', 'a', 'a',
      'a', 'a'
    ]
    */
    function call(f, ...args) {
        return f(...args);
    }
    let e = call(fill, 10, 'a');
    // let f = call(fill, 10)
    // let g = call(fill, 10, 'a', 'z')
}
//# sourceMappingURL=4_2_5.js.map