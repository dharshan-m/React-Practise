import {useState} from 'react'

export default function Day4() {
    const[changeColor, setChangeColor] = useState()
    const clickColorButtons=()=>{
        setChangeColor(prev => !prev)
    }
  return (
    <div className='flex flex-col items-center p-20'>
        <div className='flex flex-row gap-10'>
            <button onClick={clickColorButtons}>black</button>
            {/* <button onClick={clickColorButtons}>Blue</button>
            <button onClick={clickColorButtons}>Green</button>
            <button onClick={clickColorButtons}>Yellow</button> */}
        </div>
        <div className={`w-[300px] h-[300px] border-1 ${changeColor ? 'bg-black':'bg-white'}`}>
        </div>
    </div>
  )
}
