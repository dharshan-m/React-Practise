// import {useState} from 'react'

// export default function logicExDay6() {
//     const[show, setShow]=useState(false);
//     const showMore=()=>{
//         setShow(prev => !prev)
//     }
//   return (
//     <div>
//         {show &&(<p>lorem lorem lorem lorem lorem lorem lorem lorem loremlorem </p>)}
//         <button className={`${show ? 'text-red-600':'text-blue-800'}`} onClick={showMore}>{show ? 'Show Less':'Show More'}</button>
//     </div>
//   )
// }

// Show more Question


// import { useState } from 'react'

// export default function logicExDay6() {
//     const[number, setNumber] = useState('')
//     const[Fahrenheit, setFahrenheit] = useState();

//     const changeNumber=(e)=>{
//         setNumber(e.target.value)
//     }
//     const convertFaranheat=()=>{
//         const convert = (number*(9/5)+32);
//         setFahrenheit(convert);
//     }
//     const resetValues=()=>{
//         setNumber('');
//         setFahrenheit('')
//     }
//   return (
//     <div>
//         <input type='text' placeholder='enter celsius' value={number} onChange={changeNumber}/>
//         <button onClick={convertFaranheat}>Convert</button>
//         <button onClick={resetValues}>Reset</button>
//         <p>Fahrenheit Value: {Fahrenheit} </p>
//     </div>
//   )
// }


// celsius to Fahrenheit converter

import {useState} from 'react'

export default function logicExDay6() {
    const [plus, setPlus] = useState('');
    const [minus, setMinus] =useState('');
    const [result, setResult] =useState('');
    const [operation, setOperation]=useState('');

    const numberOne=(e)=>{
        setPlus(e.target.value)
    }
    const numberTwo=(e)=>{
        setMinus(e.target.value)
    }
    const pressPlus=()=>{
        setOperation('plus')
    }
    const pressMinus=()=>{
        setOperation('minus')
    }
    const clickEnter=()=>{
        const num1 = parseFloat(plus)
        const num2 = parseFloat(minus)
        if(operation === 'plus'){
            setResult(num2 + num2)
        }else if(operation === 'minus'){
            setResult(num1 - num2)
        }else{
            setResult('Choose + or -');
        }
    }

  return (
    <div>
        <input type='number' placeholder='enter number1' value={plus} onChange={numberOne}/>
        <input type='number' placeholder='enter number2' value={minus} onChange={numberTwo}/>
        <button onClick={pressPlus}>+</button>
        <button onClick={pressMinus}>-</button>
        <button onClick={clickEnter}>Enter</button>
        {result !== '' && (<p>Result: {result}</p>)}
    </div>
  )
}
