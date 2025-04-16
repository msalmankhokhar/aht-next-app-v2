'use client'
import { packageInterface } from '@/actions/packages.actions'
import PackageCard from '@/components/PackageCard'
import { getYear } from '@/lib/utils'

interface PackagesClientSectionMainProps {
    packages: Array<packageInterface>
}

export default function PackagesClientSectionMain({ packages }: PackagesClientSectionMainProps) {
    return (
        <>
            <section className="relative py-20 px-cont bg-gray-100">
                <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Umrah Packages {getYear()}</h1>
                {/* section content */}
                <div className='flex justify-between gap-5 flex-wrap items-center mb-10'>
                    <div className='flex rounded border border-gray-300'>
                        <button className='btn hover:bg-gray-200 rounded-none'>3 Star</button>
                        <button className='btn rounded-none btn-secondary'>4 Star</button>
                        <button className='btn hover:bg-gray-200 rounded-none'>5 Star</button>
                        <button className='btn hover:bg-gray-200 rounded-none'>Economic</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 flex-wrap items-center relative z-[1] gap-8">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg._id} {...pkg} />
                    ))}
                </div>

            </section>
        </>
    )
}