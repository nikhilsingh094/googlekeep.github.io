import { Box, Grid } from "@mui/material" 
import styled from "@emotion/styled";

import { DataContext } from '../../context/DataProvider';
import { useContext } from "react";
import Trash from './Trash'

 const Trashs = () =>{

    const  {deleteNotes} = useContext(DataContext)

    return (
      
        <Box sx={{ display:'flex',width:'100%' }}>
            <Box sx={{ p:3,width:'100%',marginTop:'5rem'}}>
            
                <Grid container style={{marginTop:'20px'}}>
                {
                    deleteNotes.map(note=>{
                        return(
                            <Grid item>
                                <Trash note ={note}/>
                            </Grid>
                        )
                        
                    })
                }
                </Grid> 
           
            </Box>
        </Box>
        
    )
 }

 export default Trashs