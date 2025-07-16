import React from 'react';
function Team() {
    return ( 
    
        <div className='container '>
        <div className='row p-3  mt-5 border-top'>
        <h1 className='fs-3 mt-5 text-center'>
            People
        </h1>
        </div>

        <div className='row p-3  text-muted ' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
           <div className='col-6 p-5'>
             
          <img src='media\nithinKamath.jpg'
           style={{borderRadius:"100%",width:"60%"}}
          />
          <h4 className='mt-5 ' style={{marginLeft:"65px"}}>Nithin Kamath</h4>
          <h6 style={{marginLeft:"90px"}}>Founder,CEO</h6>

           </div>


           <div className='col-6 p-5'>
           <p>Nithin bootstrapped and founded Zerodha
             in 2010 to overcome the hurdles he faced during his decade long stint
              as a trader. Today, Zerodha has changed the landscape of
               the Indian broking industry.</p>
             <br/>
           <p> He is a member of the SEBI Secondary Market 
            Advisory Committee (SMAC)and the Market Data 
            Advisory Committee (MDAC).</p>
            <br/>
           <p>Playing basketball is his zen.</p>
            
            <p>Connect on <a style={{textDecoration:"none"}}>Homepage</a>
             / <a style={{textDecoration:"none"}}>TradingQnA</a> /
              <a style={{textDecoration:"none"}}>Twitter</a></p>
           </div>
        </div>
    </div>

);
}

export default Team;