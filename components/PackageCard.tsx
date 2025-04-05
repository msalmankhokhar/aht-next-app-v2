import Image from 'next/image'
import React from 'react'

export default function PackageCard() {
    return (
        <div className="bg-hsl(0, 0%, 100%) overflow-hidden rounded-xl flex border border-gray-300 max-w-[580px]">
            <div className='p-0'>
                <div className="overflow-hidden relative h-full w-full min-w-[200px] max-w-[200px] aspect-[10/13.2]">
                    <Image
                        alt='package card'
                        src={'/images/packages/dummy.webp'}
                        // Custom width and height for the image
                        // width={230}
                        // height={230}
                        fill
                        layout="fill"
                        className="object-center object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 px-3 py-3 justify-evenly">
                <h1 className="text-lg border-b-1 pb-1 border-gray-300 font-semibold text-brand-secondary">7 Nights 5 Star Umrah Package</h1>
                <p><strong className="text-brand-primary">Makkah:</strong> Hilton Makkah (3N)</p>
                <p><strong className="text-brand-primary">Makkah:</strong> Pullman Zamzam (4N)</p>
                <div className="pt-1 mt-3 border-t-1 border-gray-300">
                    <h2 className="text-brand-primary font-semibold mb-1">Package Includes:</h2>
                    <p>Flight | Visa | Transport | Accomodation</p>
                </div>
                <button className="btn-secondary-mixed">View Details</button>
            </div>
        </div>
    )
}
