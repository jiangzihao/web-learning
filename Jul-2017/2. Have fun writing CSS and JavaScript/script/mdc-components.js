var components = [
  'mdc-dialog',
  'mdc-textfield'
]

for (var component of components) {
  document.write(`<script src="./script/${component}.js" type="text/javascript"></script>`)
}