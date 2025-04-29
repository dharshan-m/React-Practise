import {useState} from 'react'
import Image1 from './Images/image1.jpg';
import Image2 from './Images/image2.jpg';

export default function ImageCarousel() {
    const [currentImg, setCurrentImg] = useState(0);

    const clickPrev=()=>{
        setCurrentImg(prev => (prev === 0 ? imageCarousel.length -1 : prev-1))
    }

    const clickNext=()=>{
        setCurrentImg(prev => (prev ===  imageCarousel.length-1 ? 0 : prev+1))
    }

    const imageCarousel =[
        {image : Image1},
        {image : Image2},
        {image : Image1},
        {image : Image2}
    ]
  return (
    <div className='flex flex-row justify-evenly gap-10'>
        <button onClick={clickPrev} className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
        </button>

        <img className='w-[90%] h-[200px]' src={imageCarousel[currentImg].image} alt='image1'/>

        <button onClick={clickNext} className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </button>
    </div>
  )
}
