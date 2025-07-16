import React from "react";
import './CreateTicket.css'; // Assuming you have a CSS file for styling
function CreateTicket() {
    return (
        <div className="container" >
            <div className="row p-5 "  >
                <p className="text-muted fs-4 mb-3" >To create a ticket, select a relevant topic </p>
                 <div className="col-4 mt-3" >
                    <p className="fs-4"><i class="fa-solid fa-square-plus"></i> Account Opening</p>
                   
                        <ul style={{listStyleType: "none",color:"#387ed1"}}>
                            
                            <li className="mb-2">Resident individual</li>
                            <li className="mb-2">Minor</li>
                            <li className="mb-2">Non Resident Indian (NRI)</li>
                            <li className="mb-2">Company, Partnership, HUF and LLP</li>
                            <li className="mb-2">Glossary</li>
                        </ul>
                
                 </div>
                 <div className="col-4 mt-3">
                    <p className="fs-4"> <i class="fa-solid fa-user"></i> Your Zerodha Account</p>

                    
                        <ul style={{listStyleType: "none",color:"#387ed1"}}>
                            
                            <li className="mb-2">Your Profile</li>
                            <li className="mb-2">Account modification</li>
                            <li className="mb-2">Client Master Report (CMR) and Depository Participant (DP)</li>
                            <li className="mb-2">Nomination</li>
                            <li className="mb-2">Transfer and conversion of securities</li>
                        </ul>
                    
                 </div>

                 <div className="col-4 mt-3">
                    <p className="fs-4"><i class="fa-solid fa-chart-simple"></i> Kite</p>

                   
                        <ul style={{listStyleType: "none",color:"#387ed1"}}>
                            
                            <li className="mb-2">IPO</li>
                            <li className="mb-2">Trading FAQs</li>
                            <li className="mb-2">Margin Trading Facility (MTF) and Margins</li>
                            <li className="mb-2">Charts and orders</li>
                            <li className="mb-2">Alerts and Nudges</li>
                             <li className="mb-2">General</li>
                        </ul>
                    
                 </div>
            </div>
            <div className="row " style={{marginLeft:"30px"}}>
                 <div className="col-4 ">
                    <p className="fs-4"><i class="fa-solid fa-wallet"></i>  Funds</p>
                   
                        <ul style={{listStyleType: "none",color:"#387ed1"}}>
                            
                            <li className="mb-2">Add money</li>
                            <li className="mb-2">Withdraw money</li>
                            <li className="mb-2">Add bank accounts</li>
                            <li className="mb-2">eMandates</li>
                            
                        </ul>
                    
                 </div>
                 <div className="col-4 mt-3">
                    <p className="fs-4"> <i class="fa-solid fa-terminal"></i> Console</p>

                    <a href="" style={{ textDecoration: "none",color:"#387ed1" }}>
                        <ul style={{listStyleType: "none"}}>
                            
                            <li className="mb-2">Portfolio</li>
                            <li className="mb-2">Corporate actions</li>
                            <li className="mb-2">Funds statement</li>
                            <li className="mb-2">Reports</li>
                            <li className="mb-2">Profile</li>
                            <li className="mb-2">Segments</li>
                        </ul>
                    </a>
                 </div>

                 <div className="col-4 mt-3">
                    <p className="fs-4"><i class="fa-solid fa-coins"></i> Coin</p>

                    <a href="" style={{ textDecoration: "none" ,color:"#387ed1"}}>
                        <ul style={{listStyleType: "none"}}>
                            
                            <li className="mb-2">Mutual funds</li>
                            <li className="mb-2">National Pension Scheme (NPS)</li>
                            <li className="mb-2">Features on Coin</li>
                            <li className="mb-2">Payments and Orders</li>
                            <li className="mb-2">General</li>
                            
                        </ul>
                    </a>
                 </div>

            </div>
        </div>
    );
}
export default CreateTicket;