import * as React from 'react';
import './App.css';
import ProductList from './components/productList/productList';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Campaigns from './components/campaigns/campaigns';
import ProductProviders from './components/productList/ProductProviders';
import { Link } from '@mui/material';

// Img styling
const Img = styled('img')({
  margin: 'auto',
  display: 'grid',
  maxWidth: '50%',
  maxHeight: '50%',

});


const logoBaseURL = "https://www.mweb.co.za/media/images/providers"
    
const providerInfo = [
    {
      code: 'centurycity',
      name: 'Century City Connect',
      url: `${logoBaseURL}/provider-century.png`
    },
    {
      code: 'evotel',
      name: 'Evotel',
      url: `${logoBaseURL}/provider-evotel.png`
    },
    {
      code: 'octotel',
      name: 'Octotel',
      url: `${logoBaseURL}/provider-octotel.png`
    },
    {
      code: 'vumatel',
      name: 'Vumatel',
      url: `${logoBaseURL}/provider-vuma.png`
    },
    {
      code: 'openserve',
      name: 'Openserve',
      url: `${logoBaseURL}/provider-openserve.png`
    },
    {
      code: 'frogfoot',
      name: 'Frogfoot',
      url: `${logoBaseURL}/provider-frogfoot.png`
    },
    {
      code: 'mfn',
      name: 'MFN',
      url: `${logoBaseURL}/provider-metrofibre.png`
    },
    {
      code: 'vodacom',
      name: 'Vodacom',
      url: `${logoBaseURL}/provider-vodacom.png`
    },
    {
      code: 'linkafrica',
      name: 'Link Africa',
      url: `${logoBaseURL}/provider-linkafrica.png`
    },
    {
      code: 'linklayer',
      name: 'Link Layer',
      url: `${logoBaseURL}/provider-link-layer.png`
    },
    {
      code: 'lightstruck',
      name: 'Lightstruck',
      url: `${logoBaseURL}/provider-lightstruck.png`
    },
    {
      code: 'mitchells',
      name: 'Mitchells Fibre',
      url: `${logoBaseURL}/provider-mitchells.png`
    },
    {
      code: 'vumareach',
      name: 'Vuma Reach',
      url: `${logoBaseURL}/provider-vuma.png`
    }
  ]
  
 
//price Ranges
const priceRanges = [
    {min: 0, max: 699, label: 'R0 - R699'}, 
    {min: 700, max: 999, label: 'R700 - R999'}, 
    {min: 1000, max: 9999, label: 'R1000+'}]

class App extends React.Component {
 //On change of Radio Box Slection
  

//selected campaignCode
 render() {
  return (
    <div className="container">
    
     <h2 className="text-muted text-center"> MWEB FIBRE PRODUCTS </h2>
    <div className='content'>
    <Link > <ImageList row variant="masonry" cols={1} gap={4}>
                    {providerInfo.map((p) => (
                    <ImageListItem key={p.img}>
                    <Img src={p.url}
                    alt= "{p.name}" loading="lazy"/>
                     </ImageListItem> ))}
      </ImageList> </Link>
    </div>    
    
    
    <div className="container">
    <span><h3 classname="text__Header">Select Fibre Campaign </h3> </span>
       <Campaigns/>

    </div>
  
<hr/>

<section className='providers_Details'>
<span><h3 classname="text__Header">Fibre Providers </h3> </span>
<ProductProviders row />
</section>

<section className='price_Details'> 
<h4 className='prices'>
  Price Ranges </h4>
  <div className="price_Range">
  <FormGroup row>
          {priceRanges.map((p) => (
           <FormControlLabel key={p.label}
            control={
              <Checkbox   onChange={p} name= {priceRanges.label}  />
            }
          label = {p.label}/>    
           ))}
  </FormGroup>
  </div>

 </section>


<section className='product_Details'> 
<h1> Products </h1>
 
  <ProductList  />
</section>
      
    </div>
  );
}
}
export default App;
