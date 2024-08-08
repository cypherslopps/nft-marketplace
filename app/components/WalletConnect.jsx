import React from 'react'
import useWalletConnect from '../hooks/useWalletConnect';

const WalletConnect = () => {
  const { address, connect, disconnect } = useWalletConnect();
  console.log(address)

  return (
    <blockquote 
      className="bg-gray-700/60 backdrop-blur-lg rounded-full flex items-center gap-x-2 pr-3 cursor-pointer"
      onClick={() => !address ? connect() : disconnect()}
    >
      {!address ? (
        <span className="font-bold text-sm select-none">Connect</span>
      ) : (
        <>
          <figure className='w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300 to-pink-600' />
    
          <span className="font-bold text-sm tracking-tight select-none">{address}</span>
        </>
      )}
    </blockquote>
  )
}

export default WalletConnect;