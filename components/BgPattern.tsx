import Image from 'next/image'
import React from 'react'

export default function BgPattern() {
    return (
        // Set the position of the parent element to relative, for this background pattern to work properly
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/bg/bg-vector.png"
                alt="Kaaba background"
                fill
                className="object-cover opacity-5"
                priority
            />
        </div>
    )
}
