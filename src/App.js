import ArchitectHeader from './components/ArchitectHeader';
import ArchitectForm from "./components/ArchitectForm";
import {Container, CssBaseline } from '@mui/material';

import "./index.css";

const App = () => (
    <Container>
      <CssBaseline />
        <ArchitectHeader/>
        { <ArchitectForm/> }
    </Container>
);
export default App;

