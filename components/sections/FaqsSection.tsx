import React from 'react'
import Faq, { FaqProps } from '../Faq'
import { LuPhone } from 'react-icons/lu'

interface FaqsSectionProps {
    faqs: FaqProps[]
}

export default function FaqsSection({faqs}: FaqsSectionProps) {
    return (
        <section className="px-cont py-20">
            <h1 className="text-2xl sm:text-4xl font-medium text-center text-brand-secondary mb-16">Frequently Asked <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent">Questions</span></h1>
            {/* Section Content */}
            <div className="flex gap-5 w-full">
                <div className="flex-1 self-start border-l border-r border-b border-gray-300">
                    {
                        faqs?.map((faq, index) => (
                            <Faq
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))
                    }
                </div>
                <div className="self-start w-full max-w-[450px] px-7 sm:px-10 py-10 rounded-xl bg-brand-secondary-400 flex flex-col gap-5 items-center">
                    <div className="size-[65px] rounded-full bg-white flex items-center justify-center">
                        <LuPhone size={24} className="text-brand-secondary-400" />
                    </div>
                    <h1 className="text-center font-bold text-white text-2xl">Have a different question?</h1>
                    <div className="h-[5px] rounded max-w-[100px] w-full bg-brand-primary-400"></div>
                    <p className="text-white max-w-[300px] text-center">
                        Our team will answer all your questions.
                        We ensure a quick response.
                    </p>
                    <button className="btn-secondary-white w-full">Call Now</button>
                </div>
            </div>
        </section>
    )
}
