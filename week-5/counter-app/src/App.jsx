//hook
import { useState } from 'react';



function App() {
  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(0);
  

  return (
    <div>
      <CustomButton count ={count} setCount = {setCount} ></CustomButton>
      <CustomButton count ={count1} setCount = {setCount1} ></CustomButton>
      <CustomButton count ={count*100} setCount = {setCount} ></CustomButton>
      <CustomButton count ={count-5} setCount = {setCount} ></CustomButton>
    </div>
  )
}

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count+1) ;
  } 

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
