import React from 'react'
import { SiFacebook, SiYoutube } from 'react-icons/si'
import { LuPhone, LuMail } from "react-icons/lu"

export default function Topbar() {
    return (
        <div className="bg-white px-cont z-[1] relative hidden lg:flex items-center justify-between py-2 border-b border-white/20 text-brand-secondary text-sm">
            <div className="flex items-center space-x-6">
                <div className="flex items-center gap-2">
                    <LuPhone size={14} />
                    <span>+44 123 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                    <LuMail size={14} />
                    <span>info@alhabibtravels.co.uk</span>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full">
                    <span className="text-xs font-medium">ATOL Protected</span>
                </div>
                <div className="flex space-x-3">
                    <SiFacebook size={16} />
                    <SiYoutube size={16} />
                </div>
            </div>
        </div>
    )
}
