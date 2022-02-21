import './productList.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./productList.css";
import React from 'react';
import { Button, Icon, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
    
class productList extends React.Component{


      // Constructor 
       constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    
    }
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public")
        .then((res) => res.json()).then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            })
    }
       
    render() {
               
            const { DataisLoaded, items } = this.state;
                if (!DataisLoaded) return <>
                <h4> Please kindly wait while we fetch your Products [Data] .... </h4> </> ;
     return (
            <div className="Container">   
               
          
               
            <Grid  sx={{ flexGrow: 1,overflow:'hidden',px:1 }} spacing={1} >  
         {
               items.map((name) =>  (  
                <ol key = { name.id } >
         <Paper elevation={8} container  sx={{ maxWidth: 450, my: 1, mx: "auto", p: 2 }} >
                   
                   
                    <div classname="side_icon_uparrow" id="arrow_container">
                        <Icon className="arrows__Icon" id="Icon__up"><ArrowUpwardIcon/> </Icon>
                        <Icon className="arrows__Icon" id="Icon__down"> <ArrowDownwardIcon/></Icon>
                    </div> 

                    <div id="arrow_Text">
                            <span id="upload"> upload </span> 
                            <span id="download"> Download </span>  
                    </div>
                                               

               <Typography  variant="body2" >{name.promocodes}</Typography> 
               <Typography variant="body1" >{name.promocodes}</Typography> 

                <Button className='check__Average' variant="contained" color="error">
                    Check Coverage
                </Button>
        </Paper>   
                </ol>
                      ))
              } 
            </Grid>            
        
              
            </div>
        );
    }
}
export default productList;