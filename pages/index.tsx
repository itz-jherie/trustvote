import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import {vote} from '../assets/vote.jpg'
import Image from 'next/image'
import vote from '../assets/vote.jpg'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col p-10 ">
       <div className='flex justify-between items-center'>
        <div className='font-bold text-orange-400'> <span className='text-2xl text-black font-bold border p-3  bg-blue-100 border-black'>JIT</span> UNIVERSITY</div>
        <Link href="/register"><button className="bg-orange-400 text-white font-bold px-7 py-2 rounded-xl"> Register as a Voter</button></Link>
       </div>
       <div className=' mt-20 flex  gap-5'>
        <div className='w-1/2'>
          <p className='text-3xl mt-9 font-bold'>Transparent, Secure, Quick and Accessible Voting Platform</p>
          <p className='text-xs mt-5'>Empower Democracy with TrustVote: Your Trusted Platform for Transparent and Secure Voting. Join us in revolutionizing the democratic process, ensuring integrity through blockchain technology. Your voice matters; let's build a future where trust in elections is unwavering."</p>
          <Link href="/register"><button className='border bg-orange-400 px-7 py-2 rounded-full mt-9 text-white font-bold'>Register</button></Link>
        </div>
        <div className='flex '><Image src={vote} alt='pictoem'/> </div>
       </div>
       <div>
        <div className='w-full mt-20 p-10 bg-orange-400 text-white'>
          <p className='text-center text-3xl font-bold'>Features</p>
          <p className='text-center'>About Trust-Vote Voting Platform</p>
          <div className='flex mt-14 justify-between text-center'>
            <div className=' p-7 mx-3 border w-1/3 border-white rounded-md bg-white text-orange-400'>
              <p className='text-3xl font-bold'>Vote<br/>Remotely</p>
              <p className='mt-7'>Vote your preferred candidate from anywhere</p>
            </div>
            <div className='p-7 border w-1/3 border-white rounded-md bg-white text-orange-400'>
              <p className='text-3xl font-bold'>Secure<br/>Platform</p>
              <p className='mt-7'>Trust-Vote security the best</p>
            </div>
            <div className=' p-7 mx-3 border w-1/3 border-white rounded-md bg-white text-orange-400'>
              <p className='text-3xl font-bold'>Monitor<br/>Votes</p>
              <p className='mt-7'>Monitor votes real time as they are being cast</p>
            </div>
 
          </div>
        </div>
        <div className='border border-orange-300 rounded-md mt-10 py-10 px-3 text-orange-400'> JIT University Student Council Presidential Election built on the Trust-Vote Platform</div>
       </div>

    </div>
  );
};

export default Home;
