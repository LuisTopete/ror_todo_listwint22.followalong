import NoteShow from './NoteShow';

const NoteList = ({ notes, updateNote, deleteNote }) => (
  <>
    { notes.map( n => 
      <NoteShow
        key={n.id}
        {...n}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    )}
  </>
)

export default NoteList;