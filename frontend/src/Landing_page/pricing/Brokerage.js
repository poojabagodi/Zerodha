import React from 'react';


function Brokerage() {
    return (  
       <div className='container'>
        <div className='row p-5 mt-5 text center border-top'>
            <div className='col-8 p-4'>
                <a href='' style={{textDecoration: 'none'}}>
                    <h3 className='fs-5'>Brokerage calculator</h3> </a>
                    <ul className='text-muted' style={{lineHeight: '2'}}>
                    <li>Securities/Commodities transaction tax</li>
                       <li>Transaction/Turnover Charges</li>
                       <li>Call & trade</li>
                        <li>Stamp charges</li>
                       <li> NRI brokerage charges</li>
                       <li> Margin Trading Facility (MTF)</li>
                       <li> Corporate action order charges</li>
                       <li> Delayed Payment Charges</li>
                    </ul>
               

            </div>
            <div className='col-4 p-4'>
               <a href='' style={{textDecoration: 'none'}}>
                  <h3 className='fs-5'>List of charges</h3>
               </a>
            </div>
        </div>
        </div>
    );
}

export default Brokerage;