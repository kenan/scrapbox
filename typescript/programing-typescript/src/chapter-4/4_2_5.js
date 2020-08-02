var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = { value: 'a' };
var b = { value: 'b', isLeaf: true };
var c = { value: 'c', children: [b] };
var a1 = mapNode(a, function (_) { return _.toUpperCase(); }); // TreeNode
var b1 = mapNode(b, function (_) { return _.toUpperCase(); }); // LeafNode
var c1 = mapNode(c, function (_) { return _.toUpperCase(); });
function mapNode(node, f) {
    return __assign(__assign({}, node), { value: f(node.value) });
}
function logPerimeter(s) {
    console.log(s.numberOfSides * s.sideLength);
    return s;
}
// 制限付きポリモーフィズムを使って、可変長引数をモデル化する
function call(f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
}
function fill(length, value) {
    return Array.from({ length: length }, function () { return value; });
}
call(fill, 10, 'a'); // 10個の'a'からなる配列と評価れます
/* node .\4_2_5.js
[
  'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a',
  'a', 'a'
]
*/
