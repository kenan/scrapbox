"use strict";
// 非nullアサーション
function chapter6_6_2() {
    function closeDialog(dialog) {
        if (!dialog.id) {
            return;
        }
        setTimeout(() => removeFromDOM(dialog, document.querySelector('#' + dialog.id)));
    }
    function removeFromDOM(dialog, element) {
        element.parentNode.removeChild(element);
        delete dialog.id;
    }
    function closeDialog2(dialog) {
        if (!('id' in dialog)) {
            return;
        }
        setTimeout(() => removeFromDOM(dialog, document.querySelector('#' + dialog.id)));
    }
    function removeFromDOM2(dialog, element) {
        element.parentNode.removeChild(element);
        delete dialog.id;
    }
}
//# sourceMappingURL=6_6_2.js.map