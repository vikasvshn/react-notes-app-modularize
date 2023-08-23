// src/AddNoteForm.js
import React, { useState } from 'react';

function AddNoteForm({ onAdd }) {
  const [currentNote, setCurrentNote] = useState("");

  const handleSubmit = () => {
    onAdd(currentNote);
    setCurrentNote("");
  };

  return (
    <div>
      <input 
        value={currentNote} 
        onChange={e => setCurrentNote(e.target.value)} 
        placeholder="Enter note content..."
      />
      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
}

export default AddNoteForm;
