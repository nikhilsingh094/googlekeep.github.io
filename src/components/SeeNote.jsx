import styled from '@emotion/styled'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ArchitectureOutlined as Archive, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../context/DataProvider';
const StyleCard = styled(Card)`
    width:200px;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:5px;
`;


const SeeNote = ({note}) => {
const { notes, setNotes, setArchive,setDeleteNotes} = useContext(DataContext);

  const archiveNote = (note) =>{
    const updateNotes = notes.filter(data=> data.id !== note.id)
    setNotes(updateNotes);
    setArchive(prevArray => [note,...prevArray])
  }

  const deleteNote = (note) =>{
    const updateNotes = notes.filter(data => data.id !== note.id)
    setNotes(updateNotes);
    setDeleteNotes(prevArray => [note,...prevArray])
  }

  return (
    <StyleCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>

        <CardActions>
            <Archive style={{marginLeft:'auto'}}
            onClick={()=> archiveNote(note)}/>
            <Delete
            onClick={()=> deleteNote(note)}
            />
        </CardActions>
    </StyleCard >
  )
}

export default SeeNote
