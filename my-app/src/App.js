import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bulma/css/bulma.min.css';
import {Navbar, Container, Section, Form, Block, Box, Heading, Button } from 'react-bulma-components'




function App() {
  return (
    <div >

<Navbar>
  <Navbar.Brand>
    <Navbar.Item >
     <Heading>
      Waterloo Transit
     </Heading>
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>

</Navbar>

<Section>
  <Box>
    <Heading>
      Waterloo Transit
    </Heading>

  </Box>
</Section>




    </div>
  );
}

export default App;
