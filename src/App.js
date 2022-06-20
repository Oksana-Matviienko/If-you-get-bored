import "./App.css"
import { useState, useEffect } from "react"
import video from "./ink.mp4"

function App() {
  const [boring, setBoring] = useState('');

const fetchData = async ()=> {
  const response = await fetch(`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setBoring(data.activity)
}
useEffect(()=> {
  fetchData()
},[])
  return (
    <div className="container">
      <div className="center">
        <video loop autoPlay muted defaultMuted playsInline>
          <source src={video} type="video/mp4"/>
        </video>
        <h2>GET AN ADVICE WHAT TO DO</h2>
<h1>{boring.toUpperCase()}</h1>
<button onClick ={fetchData}>Click to get activity</button>
<p>Video from <a href="https://pixabay.com/ru/users/engin_akyurt-3656355/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=67358">Engin Akyurt</a> на <a href="https://pixabay.com/ru/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=67358">Pixabay</a></p>
</div>
    </div>
  );
}

export default App;
