import React, { useState } from 'react';
import './App.css';
import { notes as initialNotes } from './data';
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (content) => {
    const newNote = {
      id: Date.now(),
      content: content
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, newContent) => {
    const newNotes = notes.map(note => 
      note.id === id ? { ...note, content: newContent } : note
    );
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Notes CRUD</h1>
      <AddNoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onUpdate={updateNote} />
    </div>
  );
}

export default App;