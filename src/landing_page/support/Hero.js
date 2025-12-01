import React from 'react'
function Hero() {
    return ( 
    <section className="container-fluid" id='supportHero'>
      <div className="p-5 " id='supportWrapper'>
        <h5>Support Portal</h5>
        <a href=''>Track Tickets</a>
      </div>
       <div className=" row p-5 m-3" >
        <div className='col-6 p-5'>
            <h2>Search for an answer or browse help topics</h2>
            <input placeholder='example'></input>
            <br/>
            <a href=''>Track Account opening</a>
            <a href=''> Track segment Activation</a>
            <a href=''> Intraday Margins</a>
            <a href=''> Kite User Manual</a>
        </div>
        <div className='col-6 p-5'>
            <h2>Featured</h2>
            <ol>
                <li><a href=''>current TakeOvers</a></li>
                <li><a href=''>latest Intraday levrages</a></li>
            </ol>
        </div>
      </div>
    </section>
);
}

export default Hero;