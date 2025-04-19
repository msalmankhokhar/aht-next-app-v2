"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuMessageCircleQuestion } from "react-icons/lu";

export interface FaqProps {
    question?: string;
    answer?: string;
}

export default function Faq({
    question = "What is the minimum deposit required to book an Umrah package?",
    answer = "The minimum deposit required to secure your Umrah package booking is £300 per person. This deposit is non-refundable and will be deducted from the total package cost."
}: FaqProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-gray-300">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer w-full p-6 flex items-center justify-between text-left"
            >
                <div className="flex items-center gap-3">
                    <LuMessageCircleQuestion className="text-brand-secondary text-xl" />
                    <h3 className="font-medium text-brand-secondary">{question}</h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* <FaChevronDown className="text-brand-secondary" /> */}
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p dangerouslySetInnerHTML={{__html: answer}} className="px-6 py-6 text-sm text-gray-600 border-t border-gray-300">
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
