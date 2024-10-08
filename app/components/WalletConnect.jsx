import React from 'react'
import useWalletConnect from '../hooks/useWalletConnect';
import { truncateWalletAddress } from '../lib/utils';

const WalletConnect = () => {
  const { address, connect, disconnect } = useWalletConnect();

  return (
    <blockquote 
      className={`bg-gray-700/60 backdrop-blur-lg rounded-full flex items-center gap-x-2 ${!address ? "py-1 px-2.5" : "pr-3"} cursor-pointer`}
      onClick={() => !address ? connect() : disconnect()}
    >
      {!address ? (
        <span className="font-bold text-sm select-none">Connect</span>
      ) : (
        <>
          <figure className='w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300 to-pink-600' />
    
          <span className="font-bold text-sm tracking-tight select-none">{truncateWalletAddress(address)}</span>
        </>
      )}
    </blockquote>
  )
}

export default WalletConnect;