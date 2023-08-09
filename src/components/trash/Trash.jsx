import styled from '@emotion/styled'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { RestoreFromTrashOutlined as RestoreArchive, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
const StyleCard = styled(Card)`
    width:200px;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:5px;
`;


const Trash = ({note}) => {
const { notes, setNotes, setArchive,deleteNotes,setDeleteNotes} = useContext(DataContext);

  const restoreNote = (note) =>{
    const updateNotes = deleteNotes.filter(data=> data.id !== note.id)
    setDeleteNotes(updateNotes);
    setNotes(prevArray => [note,...prevArray])
  }

  const deleteNote = (note) =>{
    const updateNotes = notes.filter(data => data.id !== note.id)
    setDeleteNotes(updateNotes);
}

  return (
    <StyleCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>

        <CardActions>
            <Delete style={{marginLeft:'auto'}}
                onClick={()=> deleteNote(note)}
            />
            <RestoreArchive 
            onClick={()=> restoreNote(note)}/>
            
        </CardActions>
    </StyleCard >
  )
}

export default Trash
