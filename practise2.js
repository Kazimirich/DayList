const input1 = document.getElementById('input1')
const addBtn = document.getElementById('addBtn')
const mainList = document.getElementById('mainList')
const notes = []
function render() {
  mainList.innerHTML = ''
  if (notes.length === 0) {
    mainList.innerHTML = '<p class="zeroItemsFont"> THERE IS NO ELEMENTS <p/>'
  }
  for (let index in notes) {
    const note = notes[index]
    mainList.insertAdjacentHTML('beforeend', getNoteTemplate(note, index))
  }
}
render()
addBtn.onclick = function () {
  if (input1.value.trim().length === 0) {
    return
  }
  const newNote = {
    title: input1.value,
    completed: false,
  }
  mainList.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
  notes.push(newNote)
  render()
  input1.value = ''
}
mainList.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
      console.log('toggle', index)
    } else if (type === 'remove') {
      console.log('remove', index)
      notes.splice(index, 1)
    }
  }
  render()
}
function getNoteTemplate (note, index) {
  return ` <li class="listBlock listItem ${note.completed ? 'completed' : ''}">
             <span class="dataFolder mainFont noteTitle"  > ${note.title} </span>
             <span class="flexBtn">
               <span data-index='${index}' data-type='toggle' class="greenRedBtn mainFont mark  ">&check;</span>
               <span data-index='${index}' data-type='remove' class="greenRedBtn mainFont cross  " >&times;</span>
             </span>
          </li>`
}









