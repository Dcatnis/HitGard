import React,{useState} from "react";
import "../tabsstyle.css"


function PoartaBatanta (){


    let Images=[ "images/tab3/gard5-tab3.png" ,
    "images/tab3/gard2-tab3.png" ,
    "images/tab3/gard3-tab3.png" ,
    "images/tab3/gard4-tab3.png",
    "images/tab3/gard1-tab3.png" ]


    const [selectedimg,setSelectedimg]=useState(Images[0])

    return (
        <div>
   <section class="galeria">
                        <div class="my-wrapper">
                            <div class="galeria-row">
                                <div class="galeria-col-slider">
                                    <div class="galeria-block">
                                        <div class="img-big-block">
                                        <img  src={selectedimg} class="gall-big-img" alt=""/>
                                        </div>
                                        <div class="thumb3">

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
                                            Acest tip classic de poartă este apreciat pentru simplitatea și durabilitatea sa. Este confecționat din cadru de metal în combinație cu panou gard bordurat, după care este vopsit cu vopsea polimerică în câmp electrostatic. Datorită, tehnologiei de vopsire în câmp electrostatic cu vopsea polimerică, gardul nu-și pierde culoarea de la soare, îngheț sau ploi. Nu ruginește și nu necesită să fie vopsit din nou. 
                                          </div>
                                      

                                    </div>
                                </div>
                            </div>
                        </div>
                      </section>
        </div>
    );
}
export default PoartaBatanta ;