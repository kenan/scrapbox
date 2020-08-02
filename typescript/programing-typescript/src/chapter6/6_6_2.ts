// 非nullアサーション
function chapter6_6_2() {
  type Dialog = {
    id?: string
  }

  function closeDialog(dialog: Dialog) {
    if (!dialog.id) {
      return
    }
    setTimeout(() =>
      removeFromDOM(
        dialog,
        document.querySelector('#' + dialog.id)
      )
    )
  }

  function removeFromDOM(dialog: Dialog, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
  }

  type VisibleDialog = {id: string}
  type DestroyedDialog = {}
  type Dialog2 = VisibleDialog | DestroyedDialog
  
  function closeDialog2(dialog: Dialog2) {
    if (!('id' in dialog)) {
      return
    }
    setTimeout(() =>
      removeFromDOM(
        dialog,
        document.querySelector('#' + dialog.id)
      )
    )
  }

  function removeFromDOM2(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
  }
}