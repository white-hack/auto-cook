import React, { useState } from 'react';
import './App.css';
import {urls} from './UrlList';

function App() {
  const [main, setMain] = useState("meat")
  const [select] = useState([])
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  const changeSelect = (e) => {
    const select = document.getElementById('select')
    setName(select.children[select.selectedIndex].textContent)
    setUrl(urls[e.target.value])
  }

  const autoSelect = () => {
    const size = Object.keys(urls).length
    const random = Math.floor(Math.random() * size)
    const key = Object.keys(urls)[random]
    setName(key)
    setUrl(urls[key])
  }

  return (
    <div className="App" style={{marginTop: '2rem'}}>
      <select defaultValue={main} onChange={(e) => setMain(e.target.value)}>
        <option value="meat">肉</option>
        <option value="fish">魚</option>
        <option value="egg">卵</option>
      </select>
      <select style={{marginLeft: "0.5rem"}}>
        <option>味噌汁</option>
        <option>魚</option>
        <option>卵</option>
      </select>
      <button style={{marginLeft: "0.5rem"}}　onClick={autoSelect}>自動選択</button>
      <div style={{marginTop: "1rem"}}>
        {main === 'meat' &&(
          <select id="select" value={select} size="10" onChange={changeSelect} multiple>
            <option value="牛丼">牛丼</option>
            <option value="鳥の唐揚げ">鳥の唐揚げ</option>
          </select>
        )}
        {main === 'fish' &&(
          <select size="10" multiple>
            <option>牛丼</option>
            <option>鳥の唐揚げ</option>
          </select>
        )}
        {main === 'egg' &&(
          <select size="10" multiple>
            <option>牛丼</option>
            <option>鳥の唐揚げ</option>
          </select>
        )}
      </div>
      <div style={{marginTop: '3rem'}}>
        {name}
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
