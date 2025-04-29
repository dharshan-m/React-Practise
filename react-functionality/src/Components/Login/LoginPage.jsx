import {useState} from 'react';

export default function LoginPage() {
  const [openPassword, setOpenPassword] = useState(false);

  const clickPassword=()=>{
    setOpenPassword(prev =>!prev)
  }
  
  return (
    <div className='flex flex-col mt-[200px] items-center gap-10'>
        <input className='border-1 w-[500px] h-[40px] rounded-sm pl-[10px]' type='email' placeholder='Enter Email'/>
        <div className='flex- flex-row justify-between'>
          <input className='border-1 w-[500px] h-[40px] rounded-sm pl-[10px]' type={openPassword ? 'text' : 'password'} placeholder='Enter Password'/>
          <button className='cursor-pointer ' onClick={clickPassword}>
            {openPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
              </svg>
            ):(
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            )}
            </button>
        </div>
        <div className=''>
          <button  className='border-1 bg-black text-white w-[100px] h-[40px] rounded-3xl'>Login</button>
        </div>
    </div>
  )
}
