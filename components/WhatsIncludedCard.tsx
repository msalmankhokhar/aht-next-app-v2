import React from 'react'
import { LuPlaneTakeoff } from 'react-icons/lu'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


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

export default function WhatsIncludedCard({ title = defaultProps.title, desc = defaultProps.desc, icon = defaultProps.icon }: WhatsIncludedCardProps) {
    return (
        <>
            <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1" className="flex flex-col rounded-sm overflow-hidden">
                    <AccordionTrigger className="flex text-bg-mixed-secondary px-3 py-2 rounded-none items-center gap-3">
                        <span>{icon}</span>
                        <h2 className="font text-xl">{title}</h2>
                    </AccordionTrigger>
                    <AccordionContent className='bg-white p-5 border border-gray-300'>
                        {desc}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
