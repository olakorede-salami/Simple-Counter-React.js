import React, {useState} from 'react';
import Counter from './Components/counter'
import './Style/style.css'

function App() {

  const [count, setCount] = useState(0)

  return (
   <React.Fragment>
     <Counter
     count={count}
     setCount={setCount}/>
   </React.Fragment>
  );
}

export default App;
