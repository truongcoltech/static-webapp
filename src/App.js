import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState('');
  useEffect(()=> {
    (async function(){
      const {text} = await (await fetch('/api/message')).json();
      setData(text);
    })()
  });

  return <div>
    <h1>This is my first React Appp</h1>
    <h2>Content from Message API</h2>
    <p>{data}</p>
    </div>

}

export default App;
