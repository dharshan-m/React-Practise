import {useState} from 'react'

export default function () {

    const [count, setCount] = useState(0);

    const clickPlus =()=>{
        setCount(prev => prev+1);
    }
    const clickMinus =()=>{
        setCount(prev => prev-1);
    }
  return (
    <div>
        <button className='cursor-pointer' onClick={clickMinus}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
            </svg>
        </button>
        <input className='border-1 w-[200px] h-[35px]' value={count}/>
        <button className='cursor-pointer' onClick={clickPlus}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
        </button>
    </div>
  )
}

