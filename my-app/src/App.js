import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bulma/css/bulma.min.css';
import {Navbar,Notification, Card, Image, Container, Icon, Dropdown, Section, Form, Columns, Block, Box, Heading, Button } from 'react-bulma-components'
import routes from '/Users/rachelphilipose/my-Dev/civillia-webpage/civilia-webpage/my-app/src/gfts assets/routes.json';






function App() {

console.log(routes);

  return (
  
<div className= "App-header">


<Navbar color= "success" >
  <Navbar.Brand>
    <Navbar.Item hoverable = "false" >
     <Heading textColor= "white">
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
    {/* NEED TO FIND DROPDOWN ICON, CURRENTLY NOTHING SHOWING*/}
    <Columns>
    
    <Columns.Column className= "is-one-third">
      
    <Dropdown
    label= "Click to Browse Routes"
    
    icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}>

      {routes.map ( (value) =>
       <Dropdown.Item
       renderAs="a"
       value= "item"
       >
        {value.route_long_name}
      </Dropdown.Item> )}

      

      



    </Dropdown>
    </Columns.Column>

    <Columns.Column className= "is-two-third">

      <Block >
        <Notification color = "success">

          Click on a Route to Learn More

        </Notification>
      </Block>

    </Columns.Column>



    </Columns>

  </Box>
</Section>




    </div>
  );
}

export default App;
