import React from 'react';
function Universe() {
    return ( 
       <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='col-4 p-3 mt-5'>
                   <img src='media/smallcaseLogo.png' style={{height:"55px", width:"210px"}}/>
                   <p className='text-small text-muted mt-3'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                    <img src='media/sensibullLogo.svg' style={{height:"45px", width:"220px"}}/>
                   <p className='text-small text-muted mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.


</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                    <img src='media/dittoLogo.png' style={{height:"52px", width:"145px"}}/>
                   <p className='text-small text-muted mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
            </div>


             <div className='col-4 p-3 mt-5'>
                   <img src='media/streakLogo.png'style={{height:"55px", width:"160px"}} />
                   <p className='text-small text-muted mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                    <img src='media/zerodhaFundhouse.png' style={{height:"55px", width:"200px"}}/>
                   <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                    <img src='media/tijori.svg' style={{height:"55px", width:"145px"}}/>
                   <p className='text-small text-muted'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>


        <button className='p-3 btn btn-primary fs-5 mb-5 mt-4' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>

        </div>
       </div>
     );
}

export default Universe;