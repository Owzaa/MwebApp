import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

  let campaignsURL = "https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public"
    


function Campaigns () { 
  
   React.useEffect(() => {
    fetch("https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public")
    .then((response) => response.json())
    .then((data) => {
        return(data);
    })
},[])

return (                
      

     <FormControl>    
   

      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="controlled-radio-buttons-group"
        
      >  
   
    <FormControlLabel value="defaultValue"   control={<Radio />} label="FREE setup and FREE router" />
    <FormControlLabel value="FREE setup and FREE router"  control={<Radio />} label="FREE setup and FREE router" />
    <FormControlLabel  value="Prepaid Fibre" control={<Radio />} label="Prepaid Fibre" />

   
      </RadioGroup>  

       
    

    </FormControl>
    )
}

export default Campaigns;
