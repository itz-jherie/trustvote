import { ConnectButton } from '@rainbow-me/rainbowkit';
// import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useAccount, useContractRead, useContractWrite, pa} from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI} from "../constants/index"
import { parseGwei } from 'viem';
import { useEffect, useState } from 'react';

const Admin = () => {
    const [voteState, setVoteState] = useState(false)

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "admin",
        account: '0x2be2C38AB9049a03aE53d29239E272746720F883'
    })

    const {data: votingOpenData,} = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "votingOpen",
        account: '0x2be2C38AB9049a03aE53d29239E272746720F883',
        onSuccess(votingOpenData) {
            setVoteState(votingOpenData)
        },
        watch: true
    })

    useEffect(()=> {

    }, [votingOpenData])

    /**ADMIN CREATEVOTE FUNCTION */
    const { data: CVdata, isSuccess, write: createVote } = useContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "createVote",
        args: ["JITSU Election", ["Chijioke", "Aisha", "Olumide", "Ifeoma", "Emeka"]],
        onSuccess() {
            alert('Vote Succesfully Created')
        },
        onError(error){
            // alert("An Error Occured")
            alert(error.message.slice(0, 93))
        }
    })
    /**ADMIN STARTVOTE FUNCTION */
    const { data4, isLoading4, write: startVote} = useContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "startVote",
        onSuccess() {
            alert('Voting Process Succesfully Started')
        },
        onError(error){
            // alert("An Error Occured")
            alert(error.message.slice(0, 93))
        }

    })
    /**ADMIN STOPVOTE FUNCTION */
    const { data: StopData, write: stopVote} = useContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "stopVote",
        onSuccess() {
            alert('Vote Process Succesfully Ended')
        },
        onError(error){
            // alert("An Error Occured")
            alert(error.message.slice(0, 93))
        }
    })

    /**ADMIN RESETVOTE FUNCTION */
    const { data: resetData,  write: resetVote} = useContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "resetVoteCounts",
        onSuccess() {
            alert('Vote Reset Complete')
        },
        onError(error){
            // alert("An Error Occured")
            alert(error.message.slice(0, 93))
        }
    })
    return (
        <div className=" p-5 h-screen flex">
        {/* <div className='bg-red-200 w-1/5'>sidebar</div> */}
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className='font-bold text-orange-400'> <span className='text-2xl text-black font-bold border p-3  bg-blue-100 border-black'>JIT</span> UNIVERSITY</div>
                    <ConnectButton/>

                </div>
                <div className=' mt-10'>
                    <div className='font-bold text-3xl text-center text-orange-400'>ADMIN</div>
                    <div className='font-bold text-3xl text-center'>Create Vote</div>
                    <p className='font-bold text-xl text-center text-red-500 mt-5'>VOTING IS { voteState ? "OPEN": "CLOSED" }!!!</p>

                    <div className="flex justify-evenly mt-9">
                        <form className='gap-5 flex'>
                            <input type='text' placeholder='Enter Election Name' className='border border-orange-400 px-5 py-3 rounded-sm'></input>
                            <input type='text' placeholder='Enter Candidate List' className='border border-orange-400 px-5 py-3 rounded-sm'></input><br/>
                        </form>
                    </div>
                    <div className='flex justify-center mt-7'>
                        <button className='px-7 py-2 text-white font-bold mx-5 bg-orange-400 rounded-full border'onClick={() => createVote()}>Create Election</button>
                        <button className='px-7 py-2 text-white font-bold mx-5 bg-green-600 rounded-full border' onClick={() => startVote()}>Start Election</button>
                        <button className='px-7 py-2 text-white font-bold mx-5 bg-red-600 rounded-full border' onClick={() => stopVote()}>Stop Election</button>
                        <button className='px-7 py-2 text-white font-bold mx-5 bg-orange-400 rounded-full border'onClick={() => resetVote()}>Reset Votes</button>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Admin;
  