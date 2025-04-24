'use client'
import { packageInterface } from '@/actions/packages.actions'
import PackageCard from '@/components/PackageCard'
import { getYear } from '@/lib/utils'
import Link from 'next/link'
import { LuSearch } from 'react-icons/lu'

interface PackagesClientSectionMainProps {
    packages: Array<packageInterface>
}

export default function PackagesClientSectionMain({ packages }: PackagesClientSectionMainProps) {

    return (
        <>
            <section className="relative py-20 px-cont bg-gray-100">
                <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Popular Umrah Packages {getYear()}</h1>
                {/* section content */}
                <div className="grid grid-cols-3 items-center relative z-[1] gap-8">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg._id} {...pkg} />
                    ))}
                </div>
                <Link href={'/packages'} className='btn-secondary mt-8 w-fit mx-auto space-x-2'>
                    <LuSearch size={18} />
                    <span>Explore all Packages</span>
                </Link>
            </section>
        </>
    )
}