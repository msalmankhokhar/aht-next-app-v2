import Image from 'next/image'
import React from 'react'

export type logoForegroundType = 'light' | 'dark'
export type logoVarientType = 'logo' | 'logo-white' | 'logo-primary' | 'logo-secondary'

interface LogoProps {
    variant?: logoVarientType,
    fileType?: 'svg' | 'png',
    subScript?: string,
    foreGround?: logoForegroundType,
    size?: number
}

export default function Logo({ variant = 'logo', fileType = 'svg', subScript = 'UK', foreGround = 'light', size = 55 }: LogoProps) {
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex items-center">
                <Image
                    alt='logo'
                    src={`/images/logos/${fileType}/${variant}.${fileType}`}
                    width={size}
                    height={size}
                    className="aspect-[113/102] h-auto"
                />
                {
                    subScript && (
                        <sub className={`${foreGround === 'light' ? 'text-gray-200' : 'text-gray-600'} ml-2 text-[0.7rem]`}>{subScript}</sub>
                    )
                }
            </div>
            <span className='text-xs font'>Al Habib Travels</span>
        </div>
    )
}
