import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[place,setPlace] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setPlace(false);
    event.preventDefault();
  }

  function handleTextClick(){
   setPlace(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{display:place?true:'none'}}
        />

      {/* 
      
      {place?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{display:place?true:'none'}}
        /> :null } */}



        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleTextClick}
          value={note.content}
          placeholder="Take a note..."
          rows={place?3:1}
        />
        <Zoom in ={place}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
