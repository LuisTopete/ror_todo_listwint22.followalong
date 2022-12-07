import { useState, useEffect } from 'react';

const NoteForm = ({ addNote, id, subject, body, updateNote, setEdit }) => {
  const [note, setNote] = useState({ subject: '', body: '' })

  useEffect( () => {
    if (id) {
      setNote({ subject, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(id, note)
      setEdit(false)
    } else {
      addNote(note)
    }
    setNote({ subject: '', body: '' })
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Note</h1>
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input
          name='subject'
          value={note.subject}
          onChange={(e) => setNote({...note, subject: e.target.value})}
          required
        />
        <label>Body</label>
        <textarea
          name='body'
          value={note.body}
          onChange={(e) => setNote({...note, body: e.target.value})}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default NoteForm;