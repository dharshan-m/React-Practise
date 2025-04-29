// import {useState} from 'react'

// export default function logicExDay4() {
//     const [count, setCount] = useState(0);

//     const clickIncrease=()=>{
//         setCount(prev => prev+2)
//     }
//     const clickReset=()=>{
//         setCount(0)
//     }
//   return (
//     <div className='flex- flex-row gap-10'>
//         <button onClick={clickIncrease}> Increase</button>
//         <input value={count}/>
//         <button onClick={clickReset}>Reset</button>
//     </div>
//   )
// }



// import {useState} from 'react'


// export default function logicExDay4() {

//     const [check, setCheck] =useState()
//     const checkNumber=(number)=>
//     {
//         setCheck(number %2 == 0 ? 'even' : 'odd')
//     }
//   return (
//     <div>
//         <input className='rounded-1 w-[200px] h-[35px]' type='number' placeholder='enter number' onChange={checkNumber}/>
//         {check ? (<p>Even</p>): (<p>Odd</p>)}
//     </div>
//   )
// }


// import {useState} from 'react'

// export default function logicExDay4() {

//     const [changeColor, setChangeColor] =useState()

//     const clickGreen=(color)=>{
//         setChangeColor(color='green')
//     }
//     const clickBlack=(color)=>{
//         setChangeColor(color='black')
//     }


//   return (
//     <div>
//         <div className='flex flex-row gap-5'>
//         <button onClick={clickGreen}>Green</button>
//         <button onClick={clickBlack}>Black</button>
//         </div>
//         <div  className={`w-[200px] h-[200px] border-1 ${changeColor ? 'bg-lime-600' : 'bg-black'}`}></div>
//     </div>
//   )
// }


import {useState} from 'react'

export default function logicExDay4() {
    const[show, setShow] = useState(false)
    const clickShow=()=>{
        setShow(true)
    }
    const clickHide=()=>{
        setShow(false)
    }
  return (
    <div>
        <button onClick={clickShow}>Show</button>
        <button onClick={clickHide}>Hide</button>
        {show && (
            <p>lorem lorem lorem lorem lorem loremlorem loremlorem loremlorem lorem lorem lorem v vlorem lorem</p>
        )}
    </div>
  )
}

