import Arrow from "@/components/Arrow";
import BgPattern from "@/components/BgPattern";
import BookingProcessItem from "@/components/BookingProcessItem";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import PackageCard from "@/components/PackageCard";
import QuoteForm from "@/components/QuoteForm";
import StatsSection from "@/components/sections/StatsSection";
import Topbar from "@/components/Topbar";
import WhatsIncludedCard from "@/components/WhatsIncludedCard";
import Head from "next/head";
import { LuBed, LuBus, LuIdCard } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Umrah Package 2025 - Umrah Travel Agency</title>
        <meta name="description" content="Book Your Umrah Package in UK with AL Habib Travel,  We have all inclusive packages for you next umrah journey. We brings exclusive Umrah deals including flights, hotels, visa etc." />
      </Head>
      <header className="max-w-cont relative bg-gradient-to-b from-brand-secondary-900 via-brand-secondary-800 to-transparent overflow-hidden">
        <video src="/videos/header-video.mp4" autoPlay loop muted className="z-[0] opacity-10 absolute top-0 left-0 w-full h-full object-cover"></video>
        <Topbar />
        <Navbar variant="navbar-transparent" />

        {/* Hero Section */}
        <section className="backdrop-blur-[0px] py-10 z-[1] relative px-cont flex items-center">
          {/* Hero Section Content */}
          <div className="w-full flex gap-8 justify-between">
            {/* Left Side */}
            <div className="min-w-1/2">
              <h1 className="text-5xl/16 font-bold text-white tracking-wide leading-tight mb-6">All Inclusive <span className="text-brand-primary">Umrah <br /> Packages</span> <br /> with Guided Tour.</h1>
              <p className="text-white font-light leading-relaxed tracking-wide text-lg">
                Our all packages include flights, visa processing, <br />
                accommodation near Haram, ground transport, <br />
                and a guided tour. Meals are optional.
              </p>
            </div>
            {/* Right Side Form */}
            <QuoteForm />
          </div>
        </section>
        <div className="absolute h-[150px] bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white"></div>
      </header>

      <main className="max-w-cont">

        {/* Whats Included Section */}
        <section className="px-cont py-24">
          <h1 className="text-2xl mb-16 sm:text-4xl font-medium text-center text-brand-secondary">What&apos;s included in your <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary-100 to-transparent">Umrah Package</span> ?</h1>
          <div className="grid grid-cols-4 gap-5 mt-7">
            <WhatsIncludedCard />
            <WhatsIncludedCard
              title="Visa Processing"
              desc="Our team handles the complete visa application process, ensuring all documentation is properly prepared and submitted for a smooth approval experience."
              icon={<LuIdCard size={35} strokeWidth={1} />}
            />
            <WhatsIncludedCard
              title="Accomodation"
              desc="Enjoy comfortable stays in carefully selected hotels close to the holy sites in both Makkah and Madinah, with options ranging from standard to luxury accommodations."
              icon={<LuBed size={35} strokeWidth={1} />}
            />
            <WhatsIncludedCard
              title="Private Transport"
              desc="Travel in comfort with private ground transportation to and from the airport, as well as between cities, for a seamless and hassle free journey from start to finish."
              icon={<LuBus size={35} strokeWidth={1} />}
            />
          </div>
        </section>

        {/* Our Accomodation Section */}
        <section className="relative px-cont pt-16 pb-10 bg-gradient-to-br from-brand-secondary-900 via-brand-secondary-600 to-brand-secondary">
          <BgPattern />
          <h1 className="text-2xl sm:text-4xl mb-5 font-medium text-center text-white">Our <span className="py-2 bg-gradient-to-r from-transparent via-brand-secondary to-transparent">Accomodation</span></h1>
          <p className="text-center text-lg text-brand-primary-400 mb-10">Stay near the haram</p>
          {/* Section Content */}
          <div>
            <div className="flex items-center justify-between">
              {/* City Selector */}
              <div className="p-1 rounded-sm bg-brand-primary-600">
                <button className="p-2 px-3 text-sm rounded-sm bg-white text-brand-secondary">Makkah</button>
                <button className="p-2 px-3 text-sm rounded-sm text-white">Madinah</button>
              </div>
              {/* Hotel Rating selctor */}
              <div className="p-1 rounded-sm bg-brand-primary-600">
                <button className="p-2 px-3 text-sm rounded-sm bg-white text-brand-secondary">5 Star</button>
                <button className="p-2 px-3 text-sm rounded-sm text-white">4 Star</button>
                <button className="p-2 px-3 text-sm rounded-sm text-white">3 Star</button>
              </div>
            </div>
            <div className="mt-7 flex gap-5 items-center justify-center">

              <HotelCard
                name="Swissotel Makkah"
                imageSource="/images/hotels/makkah/swissotel-makkah/default.jpg"
              />
              <HotelCard
                name="Pullman Zamzam"
                imageSource="/images/hotels/makkah/pullman-zamzam-makkah/default.jpg"
              />
              <HotelCard
                name="Anjum Makkah"
                imageSource="/images/hotels/makkah/anjum-makkah/default.jpg"
              />

            </div>
          </div>
          <div></div>
        </section>

        {/* Booking Process Section */}
        <section className="px-cont py-20">
          <h1 className="text-2xl sm:text-4xl font-medium text-center text-brand-secondary">Our <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent">Booking Process</span></h1>
          {/* Section Content */}
          <div className="flex flex-wrap gap-3 w-full items-center justify-center mt-16">

            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />
            <Arrow variant="right" />
            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />
            <Arrow variant="right" />
            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />
            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />
            <Arrow variant="right" />
            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />
            <Arrow variant="right" />
            <BookingProcessItem
              title="Booking Confirmation"
              description="Confirm your booking by paying a small deposit."
            />

          </div>
        </section>

        {/* Authorized partner of the Saudi Visa */}
        <section className="px-cont py-10
        ">
          <div className="flex flex-col rounded-xl bg-gradient-to-r from-brand-secondary to-brand-secondary-400 p-7 text-white text-center">
            <h1 className="text-2xl font-normal mb-7 text-center">
              We are proud to be an authorized partner of the <span className="text-brand-primary-400">Saudi Visa</span> for Processing.
            </h1>
            <button className="self-center btn-secondary-white">Apply Now</button>
          </div>
        </section>

        {/* Packages Section */}
        <section className="relative py-20 px-cont bg-gradient-to-br from-brand-secondary-700 via-brand-secondary to-brand-secondary-300">
          <BgPattern />
          <h1 className="text-2xl sm:text-4xl font-medium text-center text-white">Popular <span className="py-2 bg-gradient-to-r from-transparent via-brand-secondary to-transparent">Umrah Packages</span></h1>
          {/* section content */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </section>

        <StatsSection />
      </main>

      <Footer />

    </>
  );
}
