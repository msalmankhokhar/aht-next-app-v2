import Image from 'next/image'
import React from 'react'

interface HotelCardProps {
    name: string
    imageSource: string
}

export default function HotelCard({ name, imageSource }: HotelCardProps) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="relative w-full min-w-[200px] max-w-[230px] aspect-[9/10] rounded-xl overflow-hidden">
                <Image
                    alt={`${name} image`}
                    src={imageSource}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    layout="fill"
                />
            </div>
            <h2 className="font-medium text-white">{name}</h2>
        </div>
    )
}
