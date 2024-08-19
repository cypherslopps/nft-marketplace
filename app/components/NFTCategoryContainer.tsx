import React, { FC } from 'react'
import NFTCategoryItem from './NFTCategoryItem'
import Link from 'next/link';

interface INFTCategoryContainer {
    title: string;
}

const NFTCategoryContainer: FC<INFTCategoryContainer> = ({ title }) => {
    const nftsCount = 23253;

    return (
        <blockquote className='space-y-6 py-4 px-5 rounded-lg bg-gray-900/90'>
            <header className='flex items-center justify-between'>
                <h4 className='text-sm font-semobold'>{title}</h4>

                <Link
                    href={`/nfts/${title.toLowerCase()}`}
                    className="text-[.82rem] flex items-center gap-x-1 font-semibold"
                >
                    {nftsCount.toLocaleString()}
                    <span className='text-[.77rem] text-gray-400 font-medium'>NFTs</span>
                </Link>
            </header>

            <div className='flex items-center gap-x-1.5'>
                {Array.from({ length: 3 }).map((_, idx) => (
                    <NFTCategoryItem 
                        key={idx}
                    />
                ))}
            </div>
        </blockquote>
    )
}

export default NFTCategoryContainer