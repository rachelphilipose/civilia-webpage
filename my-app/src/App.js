import logo from './logo.svg';
import fs from 'fs';
import './App.css';
import React from 'react';
import 'bulma/css/bulma.min.css';
import {Navbar, Image, Container, Icon, Dropdown, Section, Form, Block, Box, Heading, Button } from 'react-bulma-components'






function App() {
  const routes = {route1: "hello",
                  route2: "bonjour",
                  route3: "hola"}
  

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
      Background

    </Heading>
    <Image
    src="https://www.grt.ca/en/schedules-maps/resources/System-map-web-banner-1016x400px.jpg"
    size= "16"
    py= "7"

    />

    <Heading subtitle>
      Waterloo transit is an important part of the community and people's lives!
    </Heading>
  </Box>
</Section>

<Section>
  <Box>
    <Heading> Routes </Heading>
    {/* NEED TO FID DROPDOWN ICON, CURRENTLY NOTHING SHOWING*/}
    <Dropdown 
    label= "Click to Browse Routes"
    
    icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}>


    </Dropdown>



  </Box>
</Section>




    </div>
  );
}

export default App;
