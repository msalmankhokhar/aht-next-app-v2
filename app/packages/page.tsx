import { getPackages } from '@/actions/packages.actions'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PackageCard from '@/components/PackageCard'
import Topbar from '@/components/Topbar'
import { getYear } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default async function PackagesPage() {

    const packages = await getPackages({});

    return (
        <>
            <Head>
                <title>Umrah Package {getYear()}</title>
                <meta name="description" content="Explore our collection of Umrah Packages and find one that best suits you or contact us to get a customized package with all neccessary inclusions." />
            </Head>
            <header>
                <Topbar variant='topbar-dark' />
                <Navbar variant="navbar-white" />
            </header>
            
            <main>
                <div className='py-5 px-cont text-sm flex items-center gap-2'>
                    <Link href={'/'}>Home</Link>
                    {'>'}
                    <Link href={'/packages'}>Packages</Link>
                </div>
                <div className="container mx-auto my-5 rounded-lg py-5 px-4 lg:px-0 bg-brand-secondary text-white">
                    <h1 className="text-3xl font-bold text-center">Find your best Umrah Package</h1>
                    <p className="text-center mt-4">Explore our exclusive Umrah packages tailored for your spiritual journey.</p>
                    {/* Add your package details here */}
                </div>

                <section className='my-10 bg-gray-50 py-5 px-cont'>
                    <h2 className="text-3xl font-bold mt-4 mb-10 text-brand-secondary">3 Star Umrah Packages</h2>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            packages.data?.packages.filter((pkg) => pkg.rating === 3 && pkg.category != 'economic').map((pkg) => (
                                <PackageCard key={pkg._id} {... pkg} />
                            ))
                        }
                    </div>
                </section>
                <section className='my-10 bg-gray-50 py-5 px-cont'>
                    <h2 className="text-3xl font-bold mt-4 mb-10 text-brand-secondary">4 Star Umrah Packages</h2>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            packages.data?.packages.filter((pkg) => pkg.rating === 4).map((pkg) => (
                                <PackageCard key={pkg._id} {... pkg} />
                            ))
                        }
                    </div>
                </section>
                <section className='my-10 bg-gray-50 py-5 px-cont'>
                    <h2 className="text-3xl font-bold mt-4 mb-10 text-brand-secondary">5 Star Umrah Packages</h2>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            packages.data?.packages.filter((pkg) => pkg.rating === 5).map((pkg) => (
                                <PackageCard key={pkg._id} {... pkg} />
                            ))
                        }
                    </div>
                </section>
                <section className='my-10 bg-gray-50 py-5 px-cont'>
                    <h2 className="text-3xl font-bold mt-4 mb-10 text-brand-secondary">Economic Umrah Packages</h2>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            packages.data?.packages.filter((pkg) => pkg.category === 'economic').map((pkg) => (
                                <PackageCard key={pkg._id} {... pkg} />
                            ))
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
