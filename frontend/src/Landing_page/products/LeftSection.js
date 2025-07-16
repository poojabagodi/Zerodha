import React from 'react';
function LeftSection({imageURL,productName,productDescription,
    tryDemo,learnMore,googleplay,appStore,}) {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col-6 p-5'>
                   <img src={imageURL}/>
                </div>
                
                <div className='col-6 mt-4 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                      <a href={tryDemo} style={{textDecoration:"none"}}> Try Demo →</a>
                      <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More →</a>

                    </div>
                    <div className='mt-4'>
                        <a href={googleplay}> <img src='media\googlePlayBadge.svg'/></a>
                      <a href={appStore}> <img src='media\appstoreBadge.svg'/></a>
                      
                    </div>
                  
                   
                </div>
            </div>
        </div>
     );
}

export default LeftSection;