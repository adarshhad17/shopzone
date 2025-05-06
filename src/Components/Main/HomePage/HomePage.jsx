import React from 'react'
import TopSection from "../../../assets/container.png";
import WhatsNew from './WhatsNew';

function Home() {
  return (
    <div style={{flexGrow:1,marginBottom:'5rem'}} >
        <section style={{ marginTop: "160px" }}>
        <img src={TopSection} alt="main" style={{ maxWidth: "100%" }} />
      </section>
      <WhatsNew/>
      
    </div>
  )
}

export default Home
