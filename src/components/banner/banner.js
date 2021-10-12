import './banner.css'
import React,{useState} from "react";
import Forma from "../Forma/Forma"
import { useTranslation } from 'react-i18next';


function Banner (){

    
    let Images=[ "images/incolor-gard-min.png" ,
    "images/green-gard-min.png" ,
    "images/grey-gard-min.png" ,
    "images/red-gard-min.png" ,
    "images/black-gard-min.png" ]

    const [selectedimg,setSelectedimg]=useState(Images[0])


const [img,setColor]=useState('')
const { t } = useTranslation();
  


     
    
    return(
<div>

<section class="banner">
    <div  class="banner-bg" style={{background:img}}  >
        <div class="my-wrapper">
            <div class="about-p">
                 <div class="banner-title">{t('Header.title')}</div>
                 <div class="banner-sub-title-first">{t('Header.subtitle1')}</div>
                 <div class="banner-sub-title">{t('Header.subtitle2')}</div>
            </div>
            <div class="about-p-min">
                <div class="banner-title">PANOU DE GARD BORDURAT (EUROGARD)</div>
                <div class="banner-sub-title-first">Zincat și vopsit</div>
                <div class="banner-sub-title">Se elimina (EUROGARD) de la 40,00 lei/panou</div>
           </div>
            <div class="banner-img-min"  >
                <img class="incolor-gard active simpleArr" src={selectedimg}  alt=""/>
                
            </div>
            
             <div class="banner-blck-flex">
                 
                    <div class="choose-block">
                        <div class="choose-flex">
                            <div class="text-popular-color">Culori Populare</div>
                            <div class="colors-flex">
                                <div  onClick={() => setColor("url('../images/incolor-gard.png')")}  class="color-blck">
                                    <img  onClick={()=> setSelectedimg(Images[0]) }  class="incolor-color" src="images/incolor-color.png" alt=""/>
                                    <div class="code-color"></div>
                                    <div class="name-color">ZINCAT</div>
                                </div>
                                <div  onClick={() => setColor("url('../images/green-gard.png')")}   class="color-blck">
                                    <img  onClick={()=> setSelectedimg(Images[1]) }  class="green-color" src="images/green-color.png" alt=""/>
                                    <div class="code-color">RAL 6005</div>
                                    <div class="name-color">VERDE</div>
                                </div>
                                <div  onClick={() => setColor("url('../images/grey-gard.png')")}    class="color-blck">
                                    <img onClick={()=> setSelectedimg(Images[2]) }  class="grey-color" src="/images/grey-color.png" alt=""/>
                                    <div class="code-color">RAL 7016</div>
                                    <div class="name-color">GRI ANTROCIT</div>
                                </div>
                                <div  onClick={() => setColor("url('../images/red-gard.png')")}  class="color-blck">
                                    <img  onClick={()=> setSelectedimg(Images[3]) }  class="red-color" src="/images/red-color.png" alt=""/>
                                    <div class="code-color">RAL 8017</div>
                                    <div class="name-color">MARO</div>
                                </div>
                                <div  onClick={() => setColor("url('../images/black-gard.png')")}   class="color-blck">
                                    <img   onClick={()=> setSelectedimg(Images[4]) }  class="black-color" src="/images/black-color.png" alt=""/>
                                    <div class="code-color">RAL 9005</div>
                                    <div class="name-color">NEGRU</div>
                                </div>
                            </div>
                            <div class="text-displ-color">Sunt disponibele si alte culori la comandă</div>
                        </div>
                   </div>
                   <div class="text-popular-color-min" /*style="height:60px; line-height: 2;"*/>Culori Populare</div>
                    
                   <Forma />
            </div>  
          
        </div>
             
            
        
    </div>
   
  
</section>

</div>

    )
}

export default Banner;