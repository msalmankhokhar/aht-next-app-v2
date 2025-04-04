import Arrow from "@/components/Arrow";
import BgPattern from "@/components/BgPattern";
import BookingProcessItem from "@/components/BookingProcessItem";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import PackageCard from "@/components/PackageCard";
import QuoteForm from "@/components/QuoteForm";
import StatsSection from "@/components/sections/StatsSection";
import Topbar from "@/components/Topbar";
import WhatsIncludedCard from "@/components/WhatsIncludedCard";
import Head from "next/head";
import { LuBed, LuBus, LuIdCard, LuPhone } from "react-icons/lu";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
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

        <section className="text-block text-block-theme-dark">
          <div>
            <h1>Umrah Packages: Experience a Spiritually Rewarding Umrah Journey</h1>
            <p>
              Embark on your sacred pilgrimage with Al Habib Travel, a leading Umrah travel agency in the UK, offering the best packages. So whether you are planning on undertaking an Umrah from the UK in 2025 or preparing for that beautiful pilgrimage with one of the affordable package options for Umrah from the UK, we can provide tailored assistance to make it all easy for you to prepare for a hassle-free and spiritually rewarding journey. With our exclusive <strong>Umrah packages 2025</strong> for <strong>London</strong> and other cities in the UK, every pilgrim receives an intended hassle-free experience.
            </p>
          </div>
          <div>
            <h1>Exclusive Discounts on Umrah Packages 2025</h1>
            <p>
              At Al Habib Travel, we understand how important it is for Umrah to be a holy ritual, accessible to everyone. Therefore, we provide discounted prices on <strong>Umrah Packages UK</strong>. Be it single, family or group travel, this is what you will receive from our dedicated special offer <strong>Umrah Packages 2025</strong>. So, if you are planning to travel to the UK for Umrah, book an early flight and save on costs to enjoy a speedy, stress-free <strong>Umrah tour from the UK</strong>.
            </p>
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

        <section className="text-block text-block-theme-light">
          <h1>Why Choose Al Habib Travel for Your Umrah?</h1>
          <p>
            Choosing Al Habib Travel as your Umrah package provider assures you of getting the best services, the most affordable invoices, and a stress-free pilgrimage. Sacred to your emotions and spirit, Umrah is desired to be truly a smooth, convenient, and enriching one; thus, we live by our commitments. Here is why pilgrims from the UK opt for Al Habib Travel for their Umrah trip:
          </p>
          <ul>
            <li>
              <h2 className="inline">Affordable Packages - </h2>
              <p className="inline">
                Reasonably priced to meet the diverse needs of customers while ensuring quality services, our various <strong>Umrah packages for 2025</strong> according to the months will be available for you. We maintain the lowest prices without compromising on essential services. Our affordable rates will not cause you to hesitate or second-guess choosing an expensive Umrah tour. You will receive all the facilities at a fair price.
              </p>
            </li>
            <li>
              <h2 className="inline">Flexible Itineraries - </h2>
              <p className="inline">
                Our itineraries are flexible regarding travel dates, length of stay, type of accommodation, etc.; whatever suits your schedule best with Al Habib. You can select the dates from the options if they align with your calendar. Then we can group you with others willing to travel on the same date.
              </p>
            </li>
            <li>
              <h2 className="inline">Top Accommodation - </h2>
              <p className="inline">
                We collaborate with 3-star, 4-star, and 5-star hotels located near the Haram and Masjid Nabawi, which allows pilgrims to reach these holy sites easily. We are connected with some of the best hotels, offering luxurious accommodations at competitive prices.
              </p>
            </li>
            <li>
              <h2 className="inline">Seamless Visa & Flight Arrangements - </h2>
              <p className="inline">
                We arrange visas and offer flight options from major UK airports for seamless travel. We will maintain constant contact with you until your visa and passport are ready and set to go. We will always be available to assist you with any queries.
              </p>
            </li>
            <li>
              <h2 className="inline">Comfortable Transportation - </h2>
              <p className="inline">
                We provide air-conditioned vehicles for airport transfers and intercity travel between Makkah and Madinah, ensuring a complete journey in comfort. You will enjoy the views of the city and the buildings around Makkah.
              </p>
            </li>
            <li>
              <h2 className="inline">Delicious Halal Meals - </h2>
              <p className="inline">
                Nutritious and halal meal options are provided according to the dietary needs of UK pilgrims. You will enjoy the delicious food provided by the hotel, and we will also take you to some of the best restaurants so you can savour the finest cuisine.
              </p>
            </li>
            <li>
              <h2 className="inline">Dedicated Customer Support - </h2>
              <p className="inline">
                Our travel consultants are experienced, and our support is available 24/7 to alleviate any concerns you may have before, during, or after your pilgrimage. We will be at your service every week.
              </p>
            </li>
            <li>
              <h2 className="inline">Group and Family Packages - </h2>
              <p className="inline">
                Whether you are traveling alone, with family, or in a group. We offer tailor-made options to suit your needs. Most people take an Umrah trip with their family to share their blessings and create lasting memories. We understand their requirements and fully plan for you and your family&apos;s needs, while also taking care of each individual, even in a group.
              </p>
            </li>
            <li>
              <h2 className="inline">Special assistance for elderly & disabled pilgrims - </h2>
              <p className="inline">
                For elderly and disabled pilgrims, we provide wheelchair help, tours with guides, and priority services for a seamless experience. We take it as our utmost responsibility to make it possible for elderly and disabled pilgrims to complete their Umrah trip.
              </p>
            </li>
            <li>
              <h2 className="inline">Exclusive Extras - </h2>
              <p className="inline">
                We offer additional services such as raincoats, guidebooks, and travel essentials for other convenience. If you forget anything essential, we will guide you to nearby stores. We will be providing you with full assistance.
              </p>
            </li>
          </ul>
        </section>

        {/* Booking Process Section */}
        <section className="px-cont py-20">
          <h1 className="text-2xl sm:text-4xl font-medium text-center text-brand-secondary">Our <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent">Booking Process</span></h1>
          {/* Section Content */}
          <div className="flex flex-wrap gap-5 w-full items-center justify-center mt-16">

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
        <section className="relative py-20 px-cont bg-gray-100">
          <h1 className="text-2xl sm:text-4xl font-medium text-center">Popular <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent">Umrah Packages 2025</span></h1>
          {/* section content */}
          <div className="flex flex-wrap items-center relative z-[1] justify-center gap-8 mt-10">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </section>

        <section className="text-block text-block-theme-dark">
          <h1>Umrah Package Types Offered by Al Habib Travel</h1>
          <p>
            To meet the diverse needs and preferences of pilgrims, Al Habib Travel provides a wide selection of Umrah packages for various budgets and travel requirements. Al Habib will present some of the best Umrah Packages 2025, allowing you to decide which best suits your priorities.
          </p>
          <ul>
            <li>
              <h2>Economy Umrah Packages</h2>
              <p>
                Our economy Umrah packages are for all the budget pilgrims who see a chance to perform Umrah at an affordable low cost without compromising on the major services. The package includes economical flight tickets, accommodation in a private room or sharing with your family in 3-star hotels, and group transportation for cost-effective economies of comfort during the journey. These packages were designed to meet the budget of the pilgrims while fulfilling all their expectations for service and convenience.
              </p>
            </li>
            <li>
              <h2>Luxury Umrah Packages</h2>
              <p>
              Luxury Umrah packages include great comfort and personal services, such as direct flights without stopovers, 5-star hotels within walking distance to the Haram Sharif, and private transportation with personal escort. Such packages target pilgrims who want to experience a stress-free luxurious experience with world-class comfort and services close to the holy sites.
              </p>
            </li>
            <li>
              <h2>Family & Group Umrah Packages</h2>
              <p>
              If you intend to perform Umrah with family members or a large group, the family and group Umrah packages have been designed to enable discounts, more space, and organized group travel arrangements. These packages ensure that the entire family or group may experience the journey together while benefiting from savings and shared spiritual growth.
              </p>
            </li>
            <li>
              <h2>Economy Umrah Packages</h2>
              <p>
                Our economy Umrah packages are for all the budget pilgrims who see a chance to perform Umrah at an affordable low cost without compromising on the major services. The package includes economical flight tickets, accommodation in a private room or sharing with your family in 3-star hotels, and group transportation for cost-effective economies of comfort during the journey. These packages were designed to meet the budget of the pilgrims while fulfilling all their expectations for service and convenience.
              </p>
            </li>
            <li>
              <h2>Customized Umrah Packages</h2>
              <p>
              Here at Al Habib Travel, we understand the unique requirements of every pilgrim. Hence, we offer customized Umrah packages for you to customize your travel itinerary, types of accommodation available, transport options, and more. If you want an extended stay, special dietary arrangements, or an itinerary designed to fit your travel schedule; we will make it happen.
              </p>
            </li>
          </ul>
        </section>

        <StatsSection />
      </main>

      {/* FAQs Section */}
      <section className="px-cont py-20">
        <h1 className="text-2xl sm:text-4xl font-medium text-center text-brand-secondary mb-16">Frequently Asked <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent">Questions</span></h1>
        {/* Section Content */}
        <div className="flex gap-5">
          <div className="self-start border-l border-r border-b border-gray-300">
            <Faq />
            <Faq />
            <Faq />
            <Faq />
            <Faq />
          </div>
          <div className="self-start w-full px-7 sm:px-10 py-10 rounded-xl bg-brand-secondary-400 flex flex-col gap-5 items-center">
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

      <Footer />

    </>
  );
}
