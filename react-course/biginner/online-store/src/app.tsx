import * as React from 'react';
import Login from './components/auth/login';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {


    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Login></Login>
            </Box>
        </Container>
    );
}

export default App;