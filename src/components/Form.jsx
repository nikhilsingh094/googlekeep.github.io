import styled from "@emotion/styled";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import { useContext, useRef, useState } from "react";

import { DataContext } from "../context/DataProvider";
import { v4 as uuid} from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 5px;
  border-color: #e0e0e0;
  margin: auto;
  min-heigth:30px;
`;

const note = {
    id:'',
    heading:'',
    text:''
}

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);

  const [addNote,setAddNote] = useState({...note,id: uuid() })

  const {setNotes} = useContext(DataContext);

  const containerRef = useRef();

  const handleTextField = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight ='100px';
  };

  const handleAwayClick = () => {

    setShowTextField(false);
    containerRef.current.style.minHeight ='30px';
    
    setAddNote( {...note, id: uuid() })
    
    if(addNote.heading || addNote.text){
        setNotes(prevArray => [addNote,...prevArray]);
    }
  };

  const onTextChange = (e) =>{
     let noteChange =  {...addNote,[e.target.name]:e.target.value}
     setAddNote(noteChange);
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleAwayClick}>
        <Container ref = {containerRef}>
          {showTextField && (
            <TextField
              placeholder="Title"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              style={{ marginBottom: 10 }}
              onChange={(e)=>onTextChange(e)}
              name='heading'
              value={addNote.heading}
            />
          )}
          <TextField
            placeholder="Take a note..."
            multiline
            maxRows={Infinity}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onClick={handleTextField}
            onChange={(e)=>onTextChange(e)}
            name='text'
            value={addNote.text}
          />
        </Container>
      </ClickAwayListener>
    </>
  );
};

export default Form;
