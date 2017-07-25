function dialog_cancel () {
  close_dialog()
}

function dialog_accept () {
  close_dialog()
}

function dialog_background_onClick () {
  close_dialog()
}

function close_dialog() {
  document.body.classList.remove('mdc-dialog-scroll-lock')
  var dialogOpening = document.getElementsByClassName('mdc-dialog-open')
  for (var dialog of dialogOpening) {
    dialog.classList.remove('mdc-dialog-open')
  }
}