import Image from 'next/image'
import React from 'react'

interface BgPatternProps {
    opacity?: number
}

export default function BgPattern({ opacity = 5 }: BgPatternProps) {
    return (
        // Set the position of the parent element to relative, for this background pattern to work properly
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/bg/bg-vector.png"
                alt="Kaaba background"
                fill
                className={`object-cover`}
                priority
                style={{opacity: `${opacity}%`}}
            />
        </div>
    )
}
