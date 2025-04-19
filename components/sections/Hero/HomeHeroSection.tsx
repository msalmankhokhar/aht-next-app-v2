import QuoteForm from '@/components/QuoteForm'
import React from 'react'

export default function HomeHeroSection() {
    return (
        <section className="backdrop-blur-[0px] py-10 z-[1] relative px-cont flex items-center">
            {/* Hero Section Content */}
            <div className="w-full flex flex-col gap-8 justify-between">
                {/* Left Side */}
                <div className="min-w-1/2">
                    <h1 className="text-5xl/16 font-bold text-white tracking-wide leading-tight mb-6">All Inclusive <span className="text-brand-primary">Umrah <br /> Packages</span> <br /> with Guided Tour.</h1>
                    <p className="text-white mb-5 font-light leading-relaxed tracking-wide text-lg">
                        Our all packages include flights, visa processing, <br />
                        accommodation near Haram, ground transport, <br />
                        and a guided tour. Meals are optional.
                    </p>
                    <button className="btn-primary-white mt-1">Browse Packages</button>
                </div>
                {/* Right Side Form */}
                <QuoteForm />
            </div>
        </section>
    )
}
