
import {Route} from "react-router-dom"
import PanouZincat from "./PanouZincat/PanouZincat";
import PanouZincatVopsit from "./PanouZincatVopsit/panouZincatVopsit";
import PoartaAutoportanta  from "./PoartaAutoportanta/PoartaAutoportanta";
import PoartaBatanta from "./PoartaBatanta/PoartaBatanta";



function Gallery() {

  
  

    return (
      
      <div id="galereia" >
        
          <Route path='/PanouZincatVopsit' component={PanouZincatVopsit}/>
          <Route path='/PoartaAutoportanta' component={PoartaAutoportanta}/>
          <Route path='/PoartaBatanta' component={PoartaBatanta}/>

        
  
          
          
          
      </div>
    
    );
  }
  
  export default Gallery;