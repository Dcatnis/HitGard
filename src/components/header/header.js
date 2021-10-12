import React,{useState} from "react";

import './Header.css'
import logoimg from '../images/logo.png'
import { useTranslation } from 'react-i18next';

function Header (){



    const { i18n } = useTranslation();
    
    function handleClick(lang){
      i18n.changeLanguage(lang);
  
    }


    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };

      const [langActiv,setLang]=useState(false)

      const toggleLang = () => {
        setLang(!langActiv);
      };

      let Lang=["RO","RU","EN" ]

      const [selectedLang,setSelectedLang]=useState(Lang[0])



    return (
        <div>
 <header>
        <div class="my-wrapper">
            <div class="header">
                <div class="header-flex">
                      <div class="header-col-logo">
                           <div class="header-logo">
                              <img src={logoimg} /*style="width:230px; height:41px;" */alt="logoimg"/>
                           </div>
                      </div>
                       
                   
                       <div class="header-col-menu">
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#dece">De ce?</a></li>
                                    <li><a href="#galereia">Galeria</a></li>
                                    <li><a href="#contacte">Contacte</a></li>
                                </ul>
                           </div>
                           <a class="header-telefon-mb" href="tel:+37322011025">
                               
                           </a>
                       </div>
                       <div className="language">
                            <div onClick={toggleLang} className="langbtn">{selectedLang}</div>
                            
                            <div  className={langActiv? "langcontainer show  ": "langcontainer"} >
                            {Lang.map((limba, index)=> (
                             <li  key={index}  onClick={()=>  {setSelectedLang(limba);toggleLang();handleClick(limba)} }>{limba  }  </li> ))}
                                        
                               
                                 </div>

                           </div>
                    
                       <div class="header-col-contact">
                            <div class="header-contact">
                                <a href="tel:+40732122442">0732 122 442</a>
                                <a href="tel:+40765332244">076 533 2244</a>
                            </div>
                            <div  onClick={toggleClass} class="hamb-icons"></div>
                       </div>
                       
                    
                </div>
            </div>
        </div>
    </header>
    <div  className={isActive ? "min-header active  ": "min-header "}>
    
    <div class="min-h-row">
        <div class="min-h-menu">Meniu</div>
        <div onClick={toggleClass} class="min-h-close">+</div>
    </div>
    <div class="min-h-block">
        <ul>
            <li><a href="#dece">De ce?</a></li>
            <li><a href="#galereia">Galeria</a></li>
            <li><a href="#contacte">Contacte</a></li>
            
        </ul>

        
        <div class="Dstyle"/*style="margin-top:30px;"*/>
            <a class="header-min-phone" /*style="display:block; width:100%"*/ href="tel:+40732122442">0732 122 442</a>
            <a class="header-min-phone" /*style="display:block; width:100%"*/ href="tel:+40765332244">076 533 2244</a>
        </div>
    </div>
    


</div>
        </div>
    );
}
export default Header;


