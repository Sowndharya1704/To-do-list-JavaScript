function message() {
  let item = document.getElementById('todolist').value
  let text = document.createTextNode(item)
  let newItem = document.createElement('li','button')
  newItem.appendChild(text)
  document.getElementById('todoList').appendChild(newItem)
}