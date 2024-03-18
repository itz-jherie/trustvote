import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Vote: NextPage = () => {
    return (
      <div className='p-5'>
        <div className='flex justify-between items-center'>
            <div className='font-bold text-orange-400'> <span className='text-2xl text-black font-bold border p-3  bg-blue-100 border-black'>JIT</span> UNIVERSITY</div>
            <ConnectButton/>
        </div>
      </div>
    );
  };
  
  export default Vote;