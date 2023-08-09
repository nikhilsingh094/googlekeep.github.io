import styled from '@emotion/styled'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ArchitectureOutlined as Archiveicon, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyleCard = styled(Card)`
    width:200px;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:5px;
`;


const Archive = ({note}) => {
const { notes, setNotes, archive, setArchive,setDeleteNotes} = useContext(DataContext);

  const unArchiveNote = (note) =>{
    const updateNotes = archive.filter(data=> data.id !== note.id)
    setArchive(updateNotes);
    setNotes(prevArray => [note,...prevArray])
  }

  const deleteNote = (note) =>{
    const updateNotes = archive.filter(data => data.id !== note.id)
    setArchive(updateNotes);
    setDeleteNotes(prevArray => [note,...prevArray])
  }

  return (
    <StyleCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>

        <CardActions>
            <Archiveicon style={{marginLeft:'auto'}}
            onClick={()=> unArchiveNote(note)}/>
            <Delete
            onClick={()=> deleteNote(note)}
            />
        </CardActions>
    </StyleCard >
  )
}

export default Archive
