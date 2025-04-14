import { packageInterface } from '@/actions/packages.actions'
import Image from 'next/image'
import React from 'react'

export default function PackageCard({
    title,
    makkahNights,
    madinahNights,
    makkahHotel,
    madinahHotel,
    inclusions}:packageInterface) {
    return (
        <div className="bg-white overflow-hidden rounded-xl flex border border-gray-300 max-w-[500px]">
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
                <h1 className="text-lg border-b-1 pb-1 border-gray-300 font-semibold text-brand-secondary">{title}</h1>
                <p className='text-sm'><strong className="text-brand-primary">Makkah:</strong> {makkahHotel.name} ({makkahNights}N)</p>
                <p className='text-sm'><strong className="text-brand-primary">Makkah:</strong> {madinahHotel.name} ({madinahNights}N)</p>
                <div className="pt-1 mt-3 border-t-1 border-gray-300">
                    <h2 className="text-brand-primary font-semibold mb-1">Package Includes:</h2>
                    <p>
                        {inclusions.map((item, index) => (
                            <span key={index} className="text-sm text-gray-500">{item}{index < inclusions.length - 1 ? ' | ' : ''}</span>
                        ))}
                    </p>
                </div>
                <button className="btn-secondary-mixed">View Details</button>
            </div>
        </div>
    )
}
