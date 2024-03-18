import { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import chijioke from '../assets/1.jpg'
import olumide from '../assets/2.jpg'
import aisha from '../assets/3.jpg'
import ifeoma from '../assets/4.jpg'
import emeka from '../assets/5.jpg'
import Modal from '../components/modal'
import { useState, useEffect } from "react";
import Link from "next/link";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants/index'
import { useAccount, useContractRead, useContractWrite, useConnect, useContractReads } from "wagmi";

const User = () => {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(1)
    const [voteState, setVoteState] = useState(false)
    const [voter1, setVoter1] = useState(0)
    const [voter2, setVoter2] = useState(0)
    const [voter3, setVoter3] = useState(0)
    const [voter4, setVoter4] = useState(0)
    const [voter5, setVoter5] = useState(0)


    /***FUNCTION TO CONFIRM IF VOTE IS OPEN */
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

     /**USER CASTVOTE FUNCTION */
     const { write: castVote } = useContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "castVote",
        onSuccess() {
            alert('Vote Succesfully Cast')
        },
        onError(error){
            // alert("An Error Occured")
            alert(error.message.slice(0, 93))
        }
    })

    /***FUNCTION TO CHECK CANDIDATE VOTE AMOUNT */
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: "voteCounts",
                args: [0],
            },
            {
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: "voteCounts",
                args: [1],
            },
            {
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: "voteCounts",
                args: [2],
            },
            {
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: "voteCounts",
                args: [3],
            },
            {
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: "voteCounts",
                args: [4],
            }
        ],
        onSuccess(data) {
            setVoter1(parseInt(data[0].result))
            setVoter2(parseInt(data[1].result))
            setVoter3(parseInt(data[2].result))
            setVoter4(parseInt(data[3].result))
            setVoter5(parseInt(data[4].result))

        },
        onError(error) {
            console.log(error)
        },
        watch: true,
    })

    return (
        <div className="p-8">
            <div className='flex justify-between items-center'>
                <div className='font-bold text-orange-400'> <span className='text-2xl text-black font-bold border p-3  bg-blue-100 border-black'>JIT</span> UNIVERSITY</div>
                <ConnectButton showBalance={false}/>
            </div>
            <div>
                <p className="font-bold text-3xl text-center text-orange-500 mt-14">Electoral Candidates</p>
                <p className="text-center mt-3 font-bold text-lg">Here are the 2023 JIT Students union presidential candidates</p>
                <p className="italic text-red-600 text-center">These candidates have been screened by the JIT electoral board</p>
                <p className='font-bold text-xl text-center text-red-500 mt-5'>VOTING IS { voteState ? "OPEN": "CLOSED" }!!!</p>

            </div>
            <div className="flex mt-10 gap-4 flex-wrap justify-center">
                <div className="w-60 border border-orange-300 px-10 py-5 text-center flex flex-col items-center">
                    <div className="rounded-full object-cover"><Image src={chijioke} alt='chijioke' className="rounded-full  border-4 border-orange-400 w-32 h-32 object-cover"/></div>
                    <p className="font-bold text-lg">Chijioke Okonkwo</p>
                    <p>Civil Engineering</p>
                    <button className="px-5 py-2 border mt-14 bg-orange-400 text-white rounded-md"
                      onClick={() => {
                      setShowModal(true) 
                      setName(1)}}
                    >View Details</button>
                    { voteState && <button className="px-5 py-2 border mt-2 bg-green-600 font-bold text-white rounded-md hover:border border-green-500 hover:bg-white hover:text-black" 
                    onClick={() => 
                        castVote({
                            args: [0],
                        })
                    }>VOTE</button>}
                    <p className="font-bold mt-1">Votes: {voter1}</p>
                </div>
                <div className="w-60 border border-orange-300 px-10 py-5 text-center flex flex-col items-center">
                    <div className="rounded-full object-cover"><Image src={aisha} alt='chijioke' className="rounded-full  border-4 border-orange-400 w-32 h-32 object-cover"/></div>
                    <p className="font-bold text-lg">Aisha Mohammed</p>
                    <p>Fisheries and Aquaculture</p>
                    <button className="px-5 py-2 border mt-8 bg-orange-400 text-white rounded-md"
                      onClick={() => {
                      setShowModal(true) 
                      setName(2)}}
                    >View Details</button>
                    { voteState && <button className="px-5 py-2 border mt-2 bg-green-600 font-bold text-white rounded-md hover:border border-green-500 hover:bg-white hover:text-black"
                        onClick={() => 
                            castVote({
                                args: [1],
                            })
                        }
                    >VOTE</button>}
                    <p className="font-bold mt-1">Votes: {voter2}</p>
                </div>
                <div className="w-60 border border-orange-300 px-10 py-5 text-center flex flex-col items-center">
                    <div className="rounded-full object-cover"><Image src={olumide} alt='chijioke' className="rounded-full  border-4 border-orange-400 w-32 h-32 object-cover"/></div>
                    <p className="font-bold text-lg">Olumide Adeyemi</p>
                    <p>Architecture</p>
                    <button className="px-5 py-2 border mt-14 bg-orange-400 text-white rounded-md"
                      onClick={() => {
                      setShowModal(true) 
                      setName(3)}}
                    >View Details</button>
                    { voteState && <button className="px-5 py-2 border mt-2 bg-green-600 font-bold text-white rounded-md hover:border border-green-500 hover:bg-white hover:text-black"
                        onClick={() => 
                            castVote({
                                args: [2],
                            })
                        }
                    >VOTE</button>}
                    <p className="font-bold mt-1">Votes: {voter3}</p>
                </div>
                <div className="w-60 border border-orange-300 px-10 py-5 text-center flex flex-col items-center">
                    <div className="rounded-full object-cover"><Image src={ifeoma} alt='chijioke' className="rounded-full  border-4 border-orange-400 w-32 h-32 object-cover"/></div>
                    <p className="font-bold text-lg">Ifeoma Onyekachi</p>
                    <p>Software Engineering</p>
                    <button className="px-5 py-2 border mt-14 bg-orange-400 text-white rounded-md"
                      onClick={() => {
                      setShowModal(true) 
                      setName(4)}}
                    >View Details</button>
                    { voteState && <button className="px-5 py-2 border mt-2 bg-green-600 font-bold text-white rounded-md hover:border border-green-500 hover:bg-white hover:text-black"
                        onClick={() => 
                            castVote({
                                args: [3],
                            })
                        }
                    >VOTE</button>}
                    <p className="font-bold mt-1">Votes: {voter4}</p>
                </div>
                <div className="w-60 border border-orange-300 px-10 py-5 text-center flex flex-col items-center">
                    <div className="rounded-full object-cover"><Image src={emeka} alt='chijioke' className="rounded-full  border-4 border-orange-400 w-32 h-32 object-cover"/></div>
                    <p className="font-bold text-lg">Emeka Nwanchukwu</p>
                    <p>Industrial Design</p>
                    <button className="px-5 py-2 border mt-8 bg-orange-400 text-white rounded-md"
                      onClick={() => {
                      setShowModal(true) 
                      setName(5)}}
                    >View Details</button>
                    { voteState && <button className="px-5 py-2 border mt-2 bg-green-600 font-bold text-white rounded-md hover:border border-green-500 hover:bg-white hover:text-black"
                        onClick={() => 
                            castVote({
                                args: [4],
                            })
                        }
                    >VOTE</button>}
                    <p className="font-bold mt-1">Votes: {voter5}</p>
                </div>
                <Modal onClose={() => setShowModal(false)} show={showModal} name={name}/>
            </div>
            <div className="w-full  flex justify-end">
            
            </div>
            
        </div>
    )
}
export default User