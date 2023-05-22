import { useEffect, useRef, useState } from 'react'
import Request from './components/Request'
import Response from './components/Response'
import axios from 'axios'
import './styles.css'
import sendSvg from '/send.svg'
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  const api_url = "https://api.safone.me/chatgpt"
  const [convos, setConvos] = useState([])
  const [item, setItem] = useState("")
  const [height,setHeight] = useState('')
  useEffect(()=>{
    document.title='GptEt'
  },[])
  const textareaRef = useRef(null)

  const handleChange = (e) => {
    setItem(e.target.value)
    setHeight(e.target.scrollHeight + 'px')
  }

 
  useEffect(()=>{
    setHeight('auto')
    setHeight(textareaRef.current.scrollHeight + 'px')
  },[height])

  function handleSubmit(e) {
    e.preventDefault()
    sendRequest(item)
    setItem("")
  }
  function sendRequest(request) {
    const data = {
      message: request,
      chat_mode: "assistant",
      dialog_messages: [...convos]
    }
    axios.post(api_url,data)
    .then(res => {
      setConvos(currentConvos => {
        return [...currentConvos,{bot:res.message,user: request}]
      })
    })
    .catch(error => console.log(error))
  }
  return (
    <>
    <Header/>
    <div className="container grid">
      <div className="indiv flex flex-column">
        {convos.map(convo => {
          return <>
                <Request text={convo.user}/>
                <Response text={convo.bot}/>
                </>
        })}
        <Hero />
        </div>
      </div>
      <div className="chat-text-input">
    
            <textarea ref={textareaRef} value={item} name="chat" id="chatText" onChange={e => handleChange(e)} style={{height,overflowY:'hidden'}}/>

            <button className="btn" onClick={(e)=> handleSubmit(e)}>
              <img src={sendSvg} alt="send svg" className='sendSvg'/>
            </button>
          </div>
    </>
  )
}

export default App
