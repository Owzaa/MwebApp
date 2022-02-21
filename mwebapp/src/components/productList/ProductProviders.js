import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const providers = [
  {
  name :"Evotel" 
  },
  { 
   name: "OpenServe"
    },
  {
    name: "Web Connect"
  },
  {
      name: "Link Africa"
  },
  {
   name: "Century City Connect"
  },
  {
    name: "MFN"
  },
  {
    name: "Frogfoot"
  },
  {
    name: "ClearAccess"
  },
  {
    name: "Lightstruck"
  },
  {
   name: "Vumatel"
  },
  {
    name:  "Octotel"
  },
  
  { 
    name:"TT Connect"
  },
    
  { 
    name:"Link Layer"
  },
  
  {
    name:"ZoomFibre"
  },
  
  {

    name: "Vodacom",
  }
]



class ProductProviders extends Component {
    
    render() {
return (
            
  <FormGroup row>
  {providers.map((p) => (
           <FormControlLabel key={p.name}
            control={
              <Checkbox   onChange={p.name} name= {p.name}  />
            }
  label = {p.name}/>    
           ))}
  </FormGroup>  
  );
}
}
export default ProductProviders;