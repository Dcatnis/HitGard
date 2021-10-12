import './Dimensiuni.css'


function Dimensiuni (){

    return (
        <div>
 <section class="dimensiuni" /*style="padding-top:109px; padding-bottom:20px"*/>
    <div class="my-wrapper">
        <div class="dimensiuni-title">Dimensiuni</div>
        <div class="dimensiuni-big-container">
            <div class="dimensiuni-row">
                <div class="dimensiuni-col-text">
                    <div class="dimensiuni-table-info">
                        <table class="first-table">
                            <tr>
                                <th>H(mm) Înălțime</th>
                                <th>L(mm) Lungime</th>  
                            </tr>
                            <tr>
                                <td>700</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1000</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1200</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1500</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1700</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1700</td>
                                <td>2500</td> 
                            </tr>
                            <tr class="denstyle"/*style="height:43px;"*/>
                                <td></td>
                                <td></td> 
                            </tr>
                            <tr class="denstyle" /*style="height:43px;"*/>
                                <td></td>
                                <td></td> 
                            </tr>
                        </table>
                        <div class="dimensiuni-text-for-table">
                            <div class="text-table1">
                                Dimensiuni Disponibile pentru Gard Bordurat Zincat sau Zincat + Vopsit cu diametrul de 3.5mm sau 4.0mm
                            </div>
                            <a href="http://hitplas.ro/categorie-produs/panou-gard-bordurat/"  class="dimensiuni-btn">Detalii</a>
                        </div>
                    </div>
                </div>
                <div class="dimensiuni-col-img">
                    <div class="dimensiuni-img-container">
                        <div class="d-img-row">
                            <div class="d-img-col-bg">
                                <img class="pc-dimen" src="images/d-big.png"/* style="height: 100%;"*/ alt="" />
                            </div>
                            <div class="d-img-col-sm">
                                <img src="images/d-small1.png" alt="" class="mb-dimen"/>
                                <img src="images/d-small2.png" alt="" class="mb-dimen"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
</section>

<section class="dimensiuni nr2">
    <div class="my-wrapper">
        <div class="dimensiuni-big-container">
            <div class="dimensiuni-row">
                <div class="dimensiuni-col-text">
                    <div class="dimensiuni-table-info">
                        <table class="second-table">
                            <tr>
                                <th>H(mm) Înălțime</th>
                                <th>L(mm) Lungime</th>  
                            </tr>
                            <tr>
                                <th class="styleden" /*style="height:33px; padding:5px 5px;"*/>Stalp</th>
                                <th class="styleden" /*style="height:33px;  padding:5px 5px;"*/>Panou</th>  
                            </tr>
                            <tr>
                                <td>700</td>
                                <td>1500</td> 
                            </tr>
                            <tr>
                                <td>1000</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1200</td>
                                <td>2500</td> 
                            </tr>
                            <tr>
                                <td>1500</td>
                                <td>2500</td> 
                            </tr>
                           
                        </table>
                        <div class="dimensiuni-text-for-table" /*style="background:#DDDDDD"*/>
                          <div class="text-table2">
                            Dimensiuni disponibile pentru Stâlpi 60x40/2.0 (mm) cu dop
                          </div>
                          <a href="https://hitplas.ro/categorie-produs/teava/"  class="dimensiuni-btn">Detalii</a>
                        </div>
                    </div>
                </div>
                <div class="dimensiuni-col-img">
                    <div class="dimensiuni-img-container">
                        <img class="section2img" src="images/d-all-blck.png"/* style="min-height: 278px; width: 100%" */alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
</section>
        </div>
    );
}
export default Dimensiuni;