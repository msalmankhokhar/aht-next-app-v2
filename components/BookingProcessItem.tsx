import React from 'react'

interface BookingProcessItemProps {
    title: string;
    description: string;
}

export default function BookingProcessItem({ title, description }: BookingProcessItemProps) {
    return (
        <div className="flex flex-col max-w-[300px] gap-3 items-center">
            <div className="bg-brand-secondary rounded-full w-[50] h-[50] flex items-center justify-center text-white font-bold">1</div>
            <h2 className="font-semibold text-lg text-brand-secondary text-center">{title}</h2>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    )
}
