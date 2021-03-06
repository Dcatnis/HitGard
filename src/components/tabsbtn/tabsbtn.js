import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import './tabsbtn.css'


function Tabsbtn (){
    let Images=[ "images/tab1/gard3-tab1.png" ,
    "images/tab1/gard2-tab1.png" ,
    "images/tab1/gard5-tab1.png" ,
    "images/tab1/gard4-tab1.png" ,
    "images/tab1/gard1-tab1.png" ]


    const [selectedimg,setSelectedimg]=useState(Images[0])
const [bg,changeBgColor]=React.useState(1);

    return (
        <div>
 <div class="my-wrapper">
     <div class="tabs-flex">
     <div class="tabbtn" onClick={()=>changeBgColor(1)}   style={{backgroundColor:bg===1 ? "#A0A0A0" : "#828282"}} >
      <NavLink  to="/panouZincat"  >Panou Zincat</NavLink>
     </div>

     <div class="tabbtn" onClick={()=>changeBgColor(2)}   style={{backgroundColor:bg===2 ? "#A0A0A0" : "#828282"}}   >
     <NavLink  to="/panouZincatVopsit">Panou Zincat + Vopsit</NavLink>
     </div>


     <div class="tabbtn"   onClick={()=>changeBgColor(3)}   style={{backgroundColor:bg===3 ? "#A0A0A0" : "#828282"}}>
     <NavLink  to="/poartaBatanta">Poarta Batanta</NavLink>    
      </div>

     <div class="tabbtn"   onClick={()=>changeBgColor(4)}   style={{backgroundColor:bg===4 ? "#A0A0A0" : "#828282"}}>
     <NavLink  to="/poartaAutoportanta">Poarta autoportanta</NavLink>
     </div>

     </div>
     </div>

     <section class="galeria"  onClick={()=>changeBgColor(1)}   style={{display:bg===1 ? "block" : "none"}}  >
                        <div class="my-wrapper">
                            <div class="galeria-row">
                                <div class="galeria-col-slider">
                                    <div class="galeria-block">
                                        <div  class="img-big-block">
                                            <img  src={selectedimg} class="gall-big-img" alt=""/>
                                        
                                        </div>
                                        <div class="thumb">
                                        {Images.map((img, index)=> (
                                          <img  key={index} src={img} class="gall-sm-img" alt=""
                                          onClick={()=> setSelectedimg(img) }
                                          />
                                        ))}
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="galeria-col-text">
                                    <div class="galeria-text-blck">
                                        <div class="gall-title">Descriere:                                        </div>
                                        <div class="gall-text">
                                            Acest panou de gard bordurat are un aspect estetic pl??cut ??i se caracterizeaz?? prin montarea u??oar?? ??i rapid??. Este bine protejat prin acoperirea cu Zinc ??i se potrive??te pentru ??mprejmuirea terenurilor publice sau private. Rigiditatea panourilor bordurate faciliteaz?? instalarea lor pe st??lpii din o??el cu un sistem de fixare special, fapt ce permite instalarea rapid?? de o calitate ??nalt??, de lung?? durat?? ??i un aspect decorativ frumos.
                                          </div>
                                        <div class="gall-title">Caracteristici Tehnice:                                        </div>
                                        <div class="gall-text">Panoul este sudat din s??rm?? tare zincat??. 
                                            Diametrul s??rmei este de 3.5 mm sau 4.0 mm.<br/> ??n??l??imea variaz?? de la 70 cm p??n?? la 2 m.
                                            Lungimea este de 2.5 m.
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                      </section>
        </div>
    );
}
export default Tabsbtn;