import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js'

const app = document.querySelector('#app');
const view = new NotesView(app, {
  onNoteAdd(){
    console.log('Add a new note')
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  }
})

view.updateNoteList(NotesAPI.getAllNotes())