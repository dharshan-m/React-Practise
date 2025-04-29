
import {useState} from 'react'

export default function CounterApp() {

    const [increase, setIncrese] = useState(0);

    const clickIncrese=()=>{
        setIncrese(prev => prev+1)
    }
    const clickReset=()=>{
        setIncrese(0)
    }
    const clickDecrese=()=>{
        setIncrese(prev => prev-1)
    }


  return (
    <div className='flex flex-row gap-10'>
        <button className='cursor-pointer' onClick={clickIncrese}>Increse</button>
        <input value={increase}/>
        <button onClick={clickDecrese}>Decrese</button>
        <button className='cursor-pointer' onClick={clickReset}>Reset</button>
    </div>
  )
}


// Count Challenge