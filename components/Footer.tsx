import Link from "next/link";
import BgPattern from "./BgPattern";

export default function Footer() {
    return (
        <>
            <footer className="bg-brand-secondary relative flex flex-col px-cont">
                <BgPattern />
                <div className="flex gap-5 justify-between pt-8 pb-5 border-b border-brand-secondary-300">
                    <div className="font-semibold text-white text-3xl">Let&apos;s <span className="text-brand-primary-400">Connect</span> there</div>
                    <button className="btn-primary-white">Call Now</button>
                </div>
                <div className="flex justify-between py-6">
                    <div>
                        <h2 className="text-brand-primary-400 font-semibold text-lg mb-2">About Us</h2>
                        <p className="text-white tracking-wider max-w-[250px] text-sm">Al Habib Travel is the most trusted & reliable agency among UK Muslims. We provide bespoke Umrah travel solutions & package designing services to meet budget range and facilities requirements of pilgrims.</p>
                    </div>
                    <div>
                        <h2 className="text-brand-primary-400 font-semibold text-lg mb-2">Travel</h2>
                        <ul className="flex flex-col">
                            <li><Link className="text-white text-sm" href={'#'}>Home</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Umrah Packages</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Ramadan Umrah Packages</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Contact Us</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-brand-primary-400 font-semibold text-lg mb-2">Our Terms</h2>
                        <ul className="flex flex-col">
                            <li><Link className="text-white text-sm" href={'#'}>Travel Insurance</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Terms and Conditions</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Safi Assurance</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Privacy Policy</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Payment Security</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Our Responsibility</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Download</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h2 className="text-brand-primary-400 font-semibold text-lg mb-2">Contact Us</h2>
                            <p className="text-sm tracking-wider font-semibold mb-1 text-white">0203 504 2344</p>
                            <p className="text-sm tracking-wider text-white">info@alhabibtravel.com</p>
                        </div>
                        <div>
                            <h2 className="text-brand-primary-400 font-semibold text-lg mb-2">Office</h2>
                            <p className="text-sm tracking-wider max-w-[220px] text-white">
                                Office 10378 182-184 High Street
                                North East Ham London
                                England E6 2JA
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm py-5 text-brand-secondary-100 border-t border-brand-secondary-300">Copyright © 2025 | Al Habib Travel Ltd.</p>
            </footer>
            <div className="bg-white text-xs font-light text-center px-cont py-3">
                Most/Many of the flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Some of the flights on this website are also financially protected by the ATOL scheme, but ATOL protection does not apply to all flights.
            </div>
        </>
    )
}
