import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Link from 'next/link';
import signup from '../assets/signupimg.jpg'
import Image from 'next/image';

const Register: NextPage = () => {
    return (
      <div className=" flex flex-col p-10 ">
        <div className='flex justify-between items-center'>
            <div className='font-bold text-orange-400'><span className='text-2xl text-black font-bold border p-3  bg-blue-100 border-black'>JIT</span> UNIVERSITY</div>
        </div>
        <div className='flex justify-between mt-14'>
            <div className='w-1/2'><Image src={signup} alt="signupimg"/></div>
            <div className='w-1/2'>
                <p className='text-3xl text-center font-bold mt-2'>Welcome</p>
                <p className='mt-8'>Register as a voter on the JIT University platform</p>
                <form action="" className='mt-5'>
                    <input type='text' placeholder='Enter Matric Num.' className='w-full border border-orange-400 px-3 py-2 rounded-full '></input>
                    <input type='text' placeholder='Enter Public Key' className='w-full mt-4 border border-orange-400 px-3 py-2 rounded-full '></input>
                    <Link href='/user' ><p className='mt-7 w-full text-white text-center font-bold bg-orange-400 px-5 py-2 rounded-full'>Sign Up</p></Link>
                    <Link href='/admin'><p className='text-center font-bold mt-3'>Admin Login</p></Link>
                </form>
            </div>
        </div>
    </div>
    );
  };
  
  export default Register;
  