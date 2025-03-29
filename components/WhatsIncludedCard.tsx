import React from 'react'
import { LuPlaneTakeoff } from 'react-icons/lu'

interface WhatsIncludedCardProps {
    title?: string,
    desc?: string,
    icon?: React.ReactNode
}

const defaultProps: WhatsIncludedCardProps = {
    title: "Flights for Umrah",
    desc: "To ensure a comfortable journey, we provide round-trip flights to Jeddah or Madinah, with options for direct routes or convenient connections based on your location.",
    icon: <LuPlaneTakeoff size={35} strokeWidth={1} />
}

export default function WhatsIncludedCard({title=defaultProps.title, desc=defaultProps.desc, icon=defaultProps.icon}:WhatsIncludedCardProps) {
    return (
        <div className="flex flex-col max-w-[300px] rounded-sm overflow-hidden">
            <div className="flex text-bg-mixed-secondary px-3 py-2 rounded-none items-center gap-3">
                {icon}
                <h2 className="font text-xl">{title}</h2>

            </div>
            <div className="bg-white p-5 border border-gray-300">
                {desc}
            </div>
        </div>
    )
}
