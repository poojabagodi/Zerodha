import React from "react";

function Hero() {
    return(
      <section className="container-fluid" id="supporthero">
        <div className=" p-3   " id="supportWrapper">
            <h4 className="mt-5"> Support Portal</h4>
            <a href="" className="mt-5">Track Tickets</a>
        </div>

        <div className="row p-3">
            <div className="col-6 p-3 ">
                <h3 className="fs-3">Search for an answer or browse help topics to create a ticket</h3>
                <input placeholder="  Eg: how do i activate F&O why is my order rejected..." className="mt-2 mb-2" /><i class="fa-solid fa-magnifying-glass" style={{color:"gray"}}></i>
                <br/>

                <a href="" style={{marginLeft:"135px"}}>Track account opening</a>
                <a href="" style={{marginLeft:"10px"}}>Track segment activation</a>
                <a href="" style={{marginLeft:"10px"}}>Intraday margins</a><br/>
                <a href="" style={{marginLeft:"135px"}}>Kite user manual</a>
 
            </div>
            <div className="col-6 ">
                <h3 className="fs-3 ">Featured</h3>
                <ol>
                    <li>  <a  href="">Surveillance measure on scrips - June 2025</a></li>
                    <br/>
                    <li><a href="">Rights Entitlements listing in June 2025</a></li>
                </ol>
               
                

            </div>
        </div>
      </section>
    );
}
export default Hero;