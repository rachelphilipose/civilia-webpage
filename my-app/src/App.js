import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import 'bulma/css/bulma.min.css';
import DropdownA from 'react-bulma-dropdown'
import {Navbar,Notification, Card, Image, Container, Icon, Dropdown, Section, Form, Columns, Block, Box, Heading, Button } from 'react-bulma-components'
import routes from '/Users/rachelphilipose/my-Dev/civillia-webpage/civilia-webpage/my-app/src/gfts assets/routes.json';






function App() {

//console.log(routes);

const [routeInfo, setRouteInfo] = useState();

//console.log(routeInfo);

function onClickRoute (route) {
  setRouteInfo(route) 
};

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
    onChange={(e)=> onClickRoute(e)}
    
    
    
    >
      <div className= "App-dropdown-menu">
      {routes.map ( (value) =>
       <Dropdown.Item
       
       renderAs="a"
       value= {value.route_long_name}
       
       
       >
        {value.route_long_name}
      </Dropdown.Item> )}
      </div>

      

      



    </Dropdown>
    </Columns.Column>

    <Columns.Column className= "is-two-third">

      <Block >
        <Notification color = "success">
          

          
          {routeInfo ? <Block>
            <h3> {routeInfo} </h3>
            <li >
              Stops: 
            </li>
            <li>
              Times:
            </li>
            <li>
              Hours of Operation:
            </li>
            <li>
              Frequency of Run:
            </li>
            </Block>
          
          : <Heading subtitle> Click to Learn More</Heading>}

        </Notification>
      </Block>

    </Columns.Column>



    </Columns>

  </Box>
</Section>

<Section>
  <Box>
    <Heading>
      Contact Waterloo Transit
    </Heading>
  </Box>
</Section>





    </div>
  );
}

export default App;
