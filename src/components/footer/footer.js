import Forma from "../Forma/Forma"
import './footer.css'

function Footer (){

    return (
        <div>
 <section class="map" id="contacte">
    
    <iframe src="https://www.google.com/maps/d/embed?mid=1EA_MvLnOg-I85nNJ1hhj2Zxsxku_5ali"  width="100%" height="400" allowTransparency></iframe>
    
</section>



<footer>
    <div class="my-wrapper">
        <div class="big-footer-block">
            <div class="big-footer-row">
                <div class="footer-col-logo">
                    <div id="botForm">
        < Forma />
     </div>
                    <div class="footer-logo">
                        <img src="images/footer-logo.png" /*style="width:424px; height:75px;"*/ alt="" class="logo"/>
                    </div>
                </div>
                <div class="footer-col-contact">
                    <div class="footer-info-block">
                        <div class="footer-menu-blck">
                            <ul class="footer-ul">
                                <li><a href="#dece">De ce?</a></li>
                                <li><a href="#galereia">Galeria</a></li>
                                <li><a href="#contacte">Contacte</a></li>
                            </ul>
                            <div class="footer-block-tel"/* style="width: 105px;"*/>
                                <a href="tel:+40732122442" class="footer-tel" href="">073 212 2442</a>
                                <a href="tel:+40765332244" class="footer-tel" href="">076 533 2244</a>
                         </div>
                        </div>
                        <div class="contact-map-block">
                            <p>Letcani, com. Letcani, Cladirea C3</p>
                            <a class="footer-tel-mb" href="tel:+40732122442">073 212 2442</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="allRight"><span /*style="font-weight:bold"*/>© 2021 Hitplas SRL</span> All rights reserved</div>
                <div class="politica">Politica de confidențialitate</div>
                <a href="https://itsystem.md/" class="our-block"></a>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
}
export default Footer;