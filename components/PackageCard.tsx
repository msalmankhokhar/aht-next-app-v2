import { packageInterface } from '@/actions/packages.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuPhone } from 'react-icons/lu'

export default function PackageCard({
    _id,
    title,
    makkahNights,
    madinahNights,
    makkahHotel,
    madinahHotel,
    inclusions}: packageInterface) {
    return (
        <div className='p-0 min-w-[350px] w-full rounded-lg overflow-hidden shadow-md bg-white'>
            <div className='hidden relative w-full aspect-[16/7]'>
                <Image
                    alt='umrah package thumbnail'
                    className='object-cover object-bottom w-full h-full'
                    src={'/images/packages/dummy.webp'}
                    fill
                />
            </div>
            <div className='p-5'>
                <h2 className='text-lg font-bold text-brand-secondary mb-1.5'>{title}</h2>
                <div className='h-[2px] bg-brand-primary-400 mb-2.5 rounded-2xl'></div>
                <p className='text-brand-secondary-600 mb-1.5'><strong className='text-brand-primary font-semibold'>Makkah:</strong> {makkahHotel.name} ({makkahNights}N)</p>
                <p className='text-brand-secondary-600 mb-2.5'><strong className='text-brand-primary font-semibold'>Madinah:</strong> {madinahHotel.name} ({madinahNights}N)</p>
                <div>
                    <h3 className='text-xs px-4 w-fit py-1.5 rounded-full border border-gray-300 font-medium mt-2 mb-3'>Package Includes</h3>
                    <ul className='text-sm grid grid-cols-2 items-center justify-between gap-x-3 gap-y-1.5 text-brand-secondary-600'>
                        {inclusions.map((item, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <span className='text-brand-primary font-semibold'>✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-3 mt-3.5'>
                    <Link href={`/package/${_id}`} className='btn-primary-white flex-1 text-nowrap'>View Price</Link>
                    <Link href={`tel:`} className='btn-secondary-mixed flex-1 gap-2'>
                        <LuPhone size={18} />
                        <span className='text-nowrap'>Talk to Agent</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
