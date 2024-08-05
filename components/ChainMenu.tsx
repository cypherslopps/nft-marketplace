import { useChain } from '@/providers/ChainProvider'
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react'
import { ChainTypeProps } from '..';

interface IChainMenuItem {
  title: ChainTypeProps;
  imageSource: StaticImageData | string;
}

const ChainMenuItem: FC<IChainMenuItem> = ({ title, imageSource }) => {
  const { activeChain, updateActiveChain } = useChain();

  return (
    <figure 
      key={title}
      className={`flex items-center gap-x-2 p-1 cursor-pointer ${activeChain.title === title ? "bg-red-400" : ""}`}
      onClick={() => updateActiveChain({ title, imageSource })}
    >
      <Image 
        src={imageSource}
        alt={title}
        loading='lazy'
        className='w-[1.35rem] h-[1.35rem] object-cover'
        width={150}
        height={150}
      />

      <figcaption className="text-sm">{title}</figcaption>  
    </figure>
  )
}

const ChainMenu = () => {
  const { chains, activeChain } = useChain();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='flex items-center justify-center gap-x-1.5 cursor-pointer transition-colors duration-500 hover:bg-gray-800 rounded-md py-0.5 px-1.5'>
        <Image 
          src={activeChain.imageSource}
          alt={activeChain.title}
          loading='lazy'
          className='w-[1.35rem] h-[1.35rem]'
          width={150}
          height={150}
        />

        <span className='text-sm'>{activeChain.title}</span>
      </div>

      {isMenuOpen ? (
        <div className='absolute flex flex-col gap-y-1'>
          {chains.map(chain => (
            <ChainMenuItem 
              key={chain.title}
              {...chain}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ChainMenu