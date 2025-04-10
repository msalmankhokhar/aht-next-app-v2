import PackageCard from '@/components/PackageCard'
import { getYear } from '@/lib/utils'
import React from 'react'

export default function PackagesSectionMain() {
    return (
        <>
            <section className="relative py-20 px-cont bg-gray-100">
                <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Umrah Packages {getYear()}</h1>
                {/* section content */}
                <div className="flex flex-wrap items-center relative z-[1] justify-center gap-8 mt-10">
                    <PackageCard />
                    <PackageCard />
                    <PackageCard />
                    <PackageCard />
                </div>
            </section>
        </>
    )
}
