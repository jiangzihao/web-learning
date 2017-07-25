var textfieldFocus = 'mdc-textfield--focus'

function textfield_onFocus () {
  this.parentElement.classList.add(textfieldFocus)
  var labels = document.getElementsByClassName('mdc-textfield-label')
  for (var label of labels) {
    if (label.getAttribute('for') === this.id) {
      label.classList.add('mdc-textfield-label--float-above')
      break
    }
  }
}

function textfield_onBlur () {
  this.parentElement.classList.remove(textfieldFocus)
  if (this.value.length > 0) return;
  var labels = document.getElementsByClassName('mdc-textfield-label')
  for (var label of labels) {
    if (label.getAttribute('for') === this.id) {
      label.classList.remove('mdc-textfield-label--float-above')
      break
    }
  }
}