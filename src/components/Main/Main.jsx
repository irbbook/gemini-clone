import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'
import { useContext } from 'react'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini Clone</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

          {!showResult
          ?<>
          <div className="greet">
            <p><span>Hello, IrbBook.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Find flights and weather for an upcoming trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Create an image of a flamingo, in the clouds, wearing a top hat, and make it punk rock</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Provide me with a list of the best beaches in Rio de Janeiro, Brazil, and describe each in detail. Be concise.</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Create a few tips on how I can grow my YouTube Channel. I make videos about my study abroad in Rome. </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>:
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
          }

          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
              </p>
          </div>
        </div>
    </div>
  )
}

export default Main