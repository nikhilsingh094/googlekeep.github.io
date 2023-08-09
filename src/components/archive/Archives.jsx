import { Box, Grid } from "@mui/material" 
import styled from "@emotion/styled";


import { DataContext } from '../../context/DataProvider';
import { useContext } from "react";
import Archive from "./Archive";


 const Archives = () =>{

    const  {archive} = useContext(DataContext)

    return (
      
        <Box sx={{ display:'flex',width:'100%' }}>
            <Box sx={{ p:3,width:'100%',marginTop:'5rem'}}>
            
                <Grid container style={{marginTop:'20px'}}>
                {
                    archive.map(archive=>{
                        return(
                            <Grid item>
                                <Archive note ={archive}/>
                            </Grid>
                        )
                        
                    })
                }
                </Grid> 
             
               
            </Box>
        </Box>
        
    )
 }

 export default Archives;