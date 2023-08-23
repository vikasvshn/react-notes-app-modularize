// src/NoteItem.js
import React from 'react';

function NoteItem({ note, onDelete, onUpdate }) {
  return (
    <li>
      {note.content}
      <button onClick={() => onDelete(note.id)}>Delete</button>
      <button onClick={() => {
        const newContent = prompt("Edit note:", note.content);
        if (newContent) onUpdate(note.id, newContent);
      }}>Edit</button>
    </li>
  );
}

export default NoteItem;