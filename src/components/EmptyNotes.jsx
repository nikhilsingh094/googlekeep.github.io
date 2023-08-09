import React from 'react'
import { LightModeOutlined as LightBulb } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'


const WrapperLight = styled(LightBulb)`
    font-size:120px;
    color:#f5f5f5;
`;

const Text =styled(Typography)`
    color:#80868b;
    font-size:25px;
`

const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20vh;
`

const EmptyNotes = () => {
  return (
    <Container>
        <WrapperLight/>
        <Text>Add Notes Here</Text>
    </Container>
  )
}

export default EmptyNotes
