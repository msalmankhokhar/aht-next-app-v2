import { getPackages } from '@/actions/packages.actions'
import PackageCard from '@/components/PackageCard'
import { getYear } from '@/lib/utils'
import React from 'react'

export default async function PackagesSectionMain() {
    const actionResponse = await getPackages({category: 'Popular'});
    return (
        <>
            <section className="relative py-20 px-cont bg-gray-100">
                <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Umrah Packages {getYear()}</h1>
                {/* section content */}
                <div className="flex flex-wrap items-center relative z-[1] justify-center gap-8 mt-10">
                    {
                        actionResponse.success ? (
                            actionResponse.data?.packages.map((pkg) => (
                                <PackageCard
                                    _id={pkg._id}
                                    key={pkg._id}
                                    title={pkg.title}
                                    purpose={pkg.purpose}
                                    category={pkg.category}
                                    labels={pkg.labels}
                                    makkahNights={pkg.makkahNights}
                                    madinahNights={pkg.madinahNights}
                                    price={pkg.price}
                                    makkahHotel={pkg.makkahHotel}
                                    madinahHotel={pkg.madinahHotel}
                                    inclusions={pkg.inclusions}
                                    exclusions={pkg.exclusions}
                                    accomType={pkg.accomType}
                                />
                            ))
                        ) : ('Error occured')
                    }
                </div>
            </section>
        </>
    )
}
