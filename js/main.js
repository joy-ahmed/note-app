import NotesView from './NotesView.js'

const app = document.querySelector('#app');
const view = new NotesView(app, {
  onNoteSelect(){
    console.log('note Selected')
  }
})

