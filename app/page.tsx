import Arrow from "@/components/Arrow";
import BgPattern from "@/components/BgPattern";
import BookingProcessItem from "@/components/BookingProcessItem";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import FaqsSection from "@/components/sections/FaqsSection";
import HomeHeroSection from "@/components/sections/Hero/HomeHeroSection";
import StatsSection from "@/components/sections/StatsSection";
import Topbar from "@/components/Topbar";
import WhatsIncludedCard from "@/components/WhatsIncludedCard";
import Head from "next/head";
import Image from "next/image";
import { LuBed, LuBus, LuChevronRight, LuIdCard } from "react-icons/lu";
import { getYear } from "@/lib/utils";
import PackagesSectionMain from "@/components/sections/PackagesSectionMain";

export default async function Home() {
  return (
    <>
      <Head>
        <title>Best Umrah Packages {getYear()} - Umrah Travel Agency</title>
        <meta name="description" content="Book Your Umrah Package in UK with AL Habib Travel,  We have all inclusive packages for you next umrah journey. We brings exclusive Umrah deals including flights, hotels, visa etc." />
      </Head>

      <header className="relative bg-gradient-to-b from-brand-secondary-900 via-brand-secondary-700 to-brand-secondary-400 overflow-hidden">
        <video src="/videos/header-video.mp4" autoPlay loop muted className="z-[0] opacity-10 absolute top-0 left-0 w-full h-full object-cover"></video>
        <Topbar />
        <Navbar variant="navbar-transparent" />

        {/* Hero Section */}
        <HomeHeroSection />

        {/* div for creating boundaries merge effect */}
        {/* <div className="absolute h-[150px] bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white"></div> */}
      </header>

      <main>

        {/* Whats Included Section */}
        <section className="px-cont py-24">
          <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">What&apos;s included in your Umrah Package ?</h1>
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

        {/* Packages Section */}
        {(<PackagesSectionMain />)}

        <section className="text-block text-block-theme-dark">
          <div>
            <h1>Umrah Packages: Experience a Spiritually Rewarding Umrah Journey</h1>
            <p>
              Embark on your sacred pilgrimage with Al Habib Travel, a leading Umrah travel agency in the UK, offering the best packages. So whether you are planning on undertaking an Umrah from the UK in {getYear()} or preparing for that beautiful pilgrimage with one of the affordable package options for Umrah from the UK, we can provide tailored assistance to make it all easy for you to prepare for a hassle-free and spiritually rewarding journey. With our exclusive <strong>Umrah packages {getYear()}</strong> for <strong>London</strong> and other cities in the UK, every pilgrim receives an intended hassle-free experience.
            </p>
          </div>
          <div>
            <h1>Exclusive Discounts on Umrah Packages {getYear()}</h1>
            <p>
              At Al Habib Travel, we understand how important it is for Umrah to be a holy ritual, accessible to everyone. Therefore, we provide discounted prices on <strong>Umrah Packages UK</strong>. Be it single, family or group travel, this is what you will receive from our dedicated special offer <strong>Umrah Packages {getYear()}</strong>. So, if you are planning to travel to the UK for Umrah, book an early flight and save on costs to enjoy a speedy, stress-free <strong>Umrah tour from the UK</strong>.
            </p>
          </div>
        </section>

        {/* Our Accomodation Section */}
        <section className="relative px-cont pt-16 pb-10 bg-gradient-to-br from-brand-secondary-900 via-brand-secondary-600 to-brand-secondary">
          <BgPattern />
          <h1 className="text-2xl mb-4 sm:text-4xl font-bold text-center text-white">Our Accomodation</h1>
          <p className="text-center font-medium text-xl text-brand-secondary-200 mb-10">Stay near the haram</p>
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
            <div className="mt-7 flex flex-wrap gap-5 items-center justify-center">

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

        {/* <section className="text-block text-block-theme-light">
          <h1>Why Choose Al Habib Travel for Your Umrah?</h1>
          <p>
            Choosing Al Habib Travel as your Umrah package provider assures you of getting the best services, the most affordable invoices, and a stress-free pilgrimage. Sacred to your emotions and spirit, Umrah is desired to be truly a smooth, convenient, and enriching one; thus, we live by our commitments. Here is why pilgrims from the UK opt for Al Habib Travel for their Umrah trip:
          </p>
          <ul>
            <li>
              <h2 className="inline">Affordable Packages - </h2>
              <p className="inline">
                Reasonably priced to meet the diverse needs of customers while ensuring quality services, our various <strong>Umrah packages for {getYear()}</strong> according to the months will be available for you. We maintain the lowest prices without compromising on essential services. Our affordable rates will not cause you to hesitate or second-guess choosing an expensive Umrah tour. You will receive all the facilities at a fair price.
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
        </section> */}

        {/* Booking Process Section */}
        <section className="px-cont py-20">
        <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Booking Process</h1>
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

        <section className="text-block text-block-theme-dark">
          <h1>Umrah Package Types Offered by Al Habib Travel</h1>
          <p>
            To meet the diverse needs and preferences of pilgrims, Al Habib Travel provides a wide selection of Umrah packages for various budgets and travel requirements. Al Habib will present some of the best Umrah Packages {getYear()}, allowing you to decide which best suits your priorities.
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

        <section className="py-20 px-cont">
        <h1 className="text-2xl mb-16 sm:text-4xl font-bold text-center text-brand-secondary">Why Al Habib Travel?</h1>
          <div className="space-y-10 py-10">

            <div className="grid grid-cols-1 md:grid-cols-[450px_500px] justify-center">
              <div className="relative min-h-[250px] min-w-[250px] max-w-[640px]">
                <Image
                  alt='kaba image'
                  src={'/images/others/kaba-crowd.jpg'}
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
              <div className="py-5 md:p-5 flex flex-col gap-5">
                <h2 className="text-brand-primary-600 text-2xl font-semibold">Welcome to Superb Umrah Package</h2>
                <p className="text-gray-500">Al Habib Travel is a reowned company in the field of Umrah travels. We organize Umrah tours for potential pilgrims meeting international standards. Our Umrah Packages are inclusive and cater the needs of all types of Pilgrims.</p>
                <p className="font-semibold text-lg">For more info call us at: <strong className="block sm:inline">0123 456 789</strong></p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-[450px_500px] justify-center">
              <div className="bg-brand-primary-50/50 p-5 rounded-xl flex flex-col gap-5">
                <h2 className="text-brand-secondary-600 text-2xl font-semibold">More than just Umrah Packages</h2>
                <p className="text-gray-500">Al Habib Travel offers Umrah Packages with best services fulfil your Umrah aspirations as per your budget, comfort, convenience and other requirements.</p>
              </div>
              <div className="relative min-h-[250px] min-w-[250px] max-w-[640px]">
                <Image
                  alt='kaba image'
                  src={'/images/others/masjid-e-nabvi.jpg'}
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-[450px_550px] justify-center">
              <div className="relative min-h-[250px] min-w-[250px] max-w-[640px]">
                <Image
                  alt='kaba image'
                  src={'/images/others/kaba-crowd-2.jpg'}
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
              <div className="py-5 rounded-xl flex flex-col gap-5">
                <h2 className="text-brand-secondary-600 text-3xl font-bold">Exceptional Umrah Experience</h2>
                <p className="text-gray-500">Experience the Umrah Tour at any time of the year with hotel + flights from UK. Available from January to December and Muharram to Shawaal </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>Flights from LHR, MAN, BHX, LBA, GLA</span>
                  </li>
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>Direct and Indirect flights</span>
                  </li>
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>Economy Seats to first-class cabins</span>
                  </li>
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>Hotels near sacred places</span>
                  </li>
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>5 Star, 4 Star & 3 Star Hotels</span>
                  </li>
                  <li className="flex gap-1">
                    <LuChevronRight className="text-brand-primary" size={18} />
                    <span>Double, Triple & Quad Sharing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center py-5 gap-x-16 gap-y-7">
              <div className="flex flex-col gap-y-5 gap-x-10 sm:flex-row items-center justify-center flex-wrap">
                <div>
                  <div><span className="font-bold text-3xl">750</span> <span className="text-brand-primary text-2xl">+</span></div>
                  <p className="text-xs font-light text-gray-500">Cheap Hotels</p>
                </div>
                <div>
                  <div><span className="font-bold text-3xl">100</span> <span className="text-brand-primary text-2xl">+</span></div>
                  <p className="text-xs font-light text-gray-500">Comfy Airlines</p>
                </div>
                <div>
                  <div><span className="font-bold text-3xl">50</span> <span className="text-brand-primary text-2xl">+</span></div>
                  <p className="text-xs font-light text-gray-500">Transport Providers</p>
                </div>
                <div>
                  <div><span className="font-bold text-3xl">25</span> <span className="text-brand-primary text-2xl">+</span></div>
                  <p className="text-xs font-light text-gray-500">Expert Guides</p>
                </div>
              </div>
              <button className="btn-secondary-mixed w-fit">Get Quote</button>
            </div>
          </div>
        </section>

        <section className="text-block text-block-theme-light">
          <div>
            <h1>Significance of Umrah in Islam</h1>
            <p>
              Umrah holds great significance in Islam and can be performed at any time of the year. Unlike Hajj, which is compulsory and at particular months, this one can be performed at any time since it is a voluntary act of worship. Much like any pilgrimage, it becomes a means through which millions of Muslims can approach Allah. To others, it brings purification of the soul and provides spiritual rewards. It is a sunnah practice of the Prophet Muhammad (PBUH), who has performed it during his lifetime, hence its significance.
            </p>
            <p>
              By sincerely undertaking Umrah one&apos;s sins can be forgiven, offering a fresh start in life. The pilgrimage raises one&apos;s spiritual standards and thus communicates with Allah and devotion. Moreover, Umrah benefits individuals while uniting Muslims in a shared act of worship.
            </p>
          </div>
          <div>
            <h1>Al Habib: Your Trusted Umrah Travel Agency</h1>
            <p>
              An Umrah pilgrimage requires plenty of preparation, including the selection of the right travel partner. Al Habib is the leading <strong>Umrah Travel Agency</strong> with its motto of {`"Serving Pilgrims to the Best"`} and doing its utmost to service the pilgrims arriving from the UK. An old player in the market, Al Habib has made its name through honesty and professionalism with credibility and customer satisfaction.
            </p>
            <p>
              Al Habib understands that every pilgrim has their own set of requirements. Therefore, all kinds of Umrah packages from the UK are available. The Al Habib smoothens the entire journey for the pilgrim, whether he is traveling alone, with family, or with a group, by taking care of all travel arrangements, including visa processing, flight bookings, accommodation, and transport.
            </p>
            <div>
              <h1>Guidance for Travel Planning You Will Receive</h1>
              <p>
                Umrah is an extremely personal pilgrim journey that requires guidance for a fulfilling experience. By providing Umrah Packages, Al Habib attends to the detailed guidance expected from an Umrah journey. Al Habib, from Ihram preparation to the proper recitation of duas, has it all figured out for all travelers before jumping into that sacred journey.
              </p>
              <p>
                To make the experience more exhilarating, Al Habib offers orientation sessions where religious scholars guide pilgrims through the meaning of every Umrah rite. The two understandings make the journey more spiritual.
              </p>
              <p>
                Al Habib customized Umrah packages for those who wanted to travel for a certain month, like Ramadan, where rewards increase for doing Umrah. It includes an organized itinerary under the umbrella of the amazing provision of special Ramadan Umrah packages that intend to convert holy cities into one&apos;s maximum time.
              </p>
              <div>
                <h1>Affordable Flights with 5-Star Accommodation for UK Citizens in Makkah & Medina</h1>
                <p>
                  Performing the holy rites of Umrah is a cherished dream for many Muslims in the UK. Al Habib Travel makes this spiritual pilgrimage affordable and luxurious with our unique range of well-structured Umrah packages. We ensure that every pilgrim experiences convenience, comfort, and spirituality without the burden of finances. Our exclusive Umrah packages from the UK include the cheapest flights to Jeddah and Medina; hence, pilgrims travel conveniently. Whether in economy class, Al Habib Travel has options to suit your budget and preferences.
                </p>
                <p>
                  Accommodation constitutes one of the main aspects of the Umrah experience, and Al Habib Travel assures your comfort. We have 5-star accommodations in Makkah and Medina, where we put guests in well-facilitated hotels near Haram for easy access to the holy places. Our partnered hotels are refined in quality, providing high-standard services and amenities like room space and personalized hospitality. With Al Habib Travel, pray well, and let us take care of your travel arrangements.
                </p>
                <p>
                  Our Umrah packages from the UK are designed to accommodate varying requirements for a person travelling alone to families and large groups. Al Habib Travel guarantees to provide each pilgrim with only the best treatment, including airport transfers, guided assistance, and meal options. Therefore, if you are searching for budget-friendly options or something more premium for luxury, we have customized packages that take care of everything and have your trip run so smoothly that you do not even have to think about it. Book your Umrah package with Al Habib Travel today and experience a perfect blend of affordability and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News letter section */}
        <section className="px-cont relative py-20 max-w-cont bg-brand-secondary">
          <BgPattern />
          <div className="z-[1] relative flex flex-col items-center justify-center">
            <h1 className="text-center text-white font-semibold text-3xl mb-5">Join our <span className="text-brand-primary-400">Newsletter</span> to discover latest offers</h1>
            <p className="text-center text-brand-secondary-200">New deals arrive every month. Subscribe now to get them right into your email inbox.</p>
            <div className="flex flex-wrap justify-stretch items-center max-w-[450px] w-full gap-3 mt-5">
              <input type="email" className="ring-1 ring-transparent focus:ring-brand-primary-400 px-5 transition-colors py-3 flex-1 border-none outline-none rounded-md bg-brand-secondary-400 text-white" placeholder="Enter your Email" />
              <button className="btn-primary-mixed">Subscribe</button>
            </div>
          </div>
        </section>

        <section className="text-block text-block-theme-light">
          <h1>Know Visa, Passport, and Other Important Procedures for Hajj and Umrah</h1>
          <p>
            Visas are necessary, passports must be checked, and any other required travel documents must be acquired for Umrah to proceed smoothly. Al Habib Travel simplifies the process for UK citizens by providing complete assistance in acquiring an Umrah visa. Our staff works to ensure the smooth processing of your visa application to minimise any possible delays or complications. With Al Habib Travel, you can obtain an Umrah visa while we take care of all the paperwork and submission steps on your behalf.
          </p>
          <p>
            An important issue that a traveller must pay attention to is the validity of the passport. According to Saudi rules, UK citizens must have a passport with a minimum validity of six months from the date of travel. Al Habib Travel guides you through these passport checks so that you do not face any last-minute issues. In addition, we provide you with the most up-to-date information on travel advisories, vaccinations, and other entry requirements specified by Saudi authorities.
          </p>
          <p>
            Apart from visa and passport arrangements, Al Habib Travel takes care of flight bookings, accommodation, and ground transportation. Knowing that every Umrah journey requires the utmost relaxation for the pilgrims, we maintain all-inclusive packages covering every aspect of your Umrah trip. We provide everything from vaccinations to information about currency exchange, ensuring that our clients are fully informed so that their Umrah experience will be peaceful and memorable. Al Habib Travel provides professional advice for every single step of your pilgrimage to guarantee a trouble-free spiritual journey.
          </p>
        </section>

        <section className="px-cont py-10">
          <h1 className="text-center text-2xl text-gray-600">One more section of Umrah Packages here (pending.. I will add here after properly making packages structure and adding them to database)</h1>
        </section>

        <section className="text-block text-block-theme-dark">
          <div>
            <h1>Consideration of Senior Citizens, Kids, & Disabled Persons Needs</h1>
            <p>
              Al Habib Travel believes that Umrah should be accessible and convenient for senior citizens, children, and handicapped persons. Our Umrah packages are designed to suit every kind of traveller because we recognize the diverse needs of various pilgrims. Special services are provided for elderly pilgrims, with provisions for extra assistance, comfortable accommodations, and smooth transportation to and from the Haram. Al Habib Travel offers wheelchair accessibility services, priority service, and guided assistance to make the whole journey easier for you.
            </p>
            <p>
              Families travelling with small children will also find our family-friendly Umrah packages beneficial. We provide kid-friendly hotels and dining options, plus transportation, so parents can focus on their prayers without worrying about the little ones. Al Habib Travel arranges supporting facilities such as babysitters and prayer areas for families for even greater convenience.
            </p>
            <p>
              Al Habib Travel&apos;s arrangements for disabled pilgrims ensure that every aspect of their journey is accessible. Our team also helps arrange wheelchairs, airport transfers, and any other assistance they need to make Umrah an experience each of them can enjoy. Whatever the age or condition, Al Habib Travel promises to provide an easy, safe, and spiritually fulfilling Umrah journey.
            </p>
          </div>
        </section>

        <section className="px-cont py-10">
          <h1 className="text-center text-2xl text-gray-600">Customer reviews and testemonials here (pending)</h1>
        </section>

        <section className="text-block text-block-theme-light">
          <div>
            <h1>Plan your Umrah with Al-Habib Travels Now!</h1>
            <p>
            A dream for many, Umrah is now made possible with Al-Habib Travels, which means that our commitment to wholesome service at prices you can afford is to ensure that you&apos;re comfortable during this pilgrimage and that it is rewarding and spiritually uplifting.
            </p>
            <p>
            Booking your Umrah with Al-Habib Travels guarantees an embrace from visa processing to accommodation and transport. Our qualified team will be there for you, helping you every step of the way so that you can convert every moment of your time to reflect on what is crucial to you - your spiritual journey!
            </p>
            <p>
            Don&apos;t miss this grand opportunity to turn a pilgrimage into a life-changing experience with Al-Habib Travels. Talk to us today; we&apos;ll take care of the arrangements while you prepare for this all-important journey. Whether you are searching for cheap Umrah packages or want a luxury pilgrimage for the soul, we have the right choice!
            </p>
            <p>
            Book now and start your spiritual journey with Al-Habib Travels- Your Trusted Partner for Umrah!
            </p>
          </div>
        </section>

        <section className="px-cont py-10">
          <h1 className="text-center text-2xl text-gray-600">Partner Companies Section (pending)</h1>
        </section>

        <StatsSection />
      </main>

      {/* FAQs Section */}
      <FaqsSection 
        faqs={
          [
            {
              question: 'What is the total cost of Umrah?',
              answer: 'It all depends on the type of package, duration of stay and travel season. For example, with Al Habib Travel, a low-cost Umrah package from the UK would cost about £730 per person, while luxurious 5-star packages would cost even more. You can choose accordingly and discuss any customisation or queries related to the package cost.'
            },
            {
              question: 'How much is a package of Umrah?',
              answer: 'The price range for our UK Umrah package varies between <strong>£800</strong> and <strong>£2500</strong>, depending on the requirements incorporated. We provide an array of options to suit varied budgets. Each package offers a different price range. You can check and choose your budget and affordability accordingly. '
            },
            {
              question: 'Which month is Umrah cheap?',
              answer: 'The cheapest months for Umrah are traditionally in the months following the Hajj season, typically in the time frame between Muharram and Rajab. Therefore, the {getYear()} London Umrah packages include affordable options within this time frame. If you are visiting during this period you will receive a cheap package compared to other months. So, choose accordingly keeping in mind the month you feel will be suitable for your time.'
            },
            {
              question: 'What is the cost of the Umrah package from UK?',
              answer: 'The starting price of a typical <strong>Umrah package from UK</strong> in {getYear()} is <strong>£730</strong>, while a luxury five-star Umrah package may constitute a person-to-person cost of  <strong>£1700</strong>. Each package has a different price range If you can afford it, then you can choose the luxury package for your comfort and safety.'
            },
            {
              question: 'Which month is best for Umrah?',
              answer: 'The spiritually most fulfilling season for the Umrah pilgrimage is during Ramadan, while the September - November - January stretch is ideal for those looking for a more affordable trip with less crowds. If you want to visit a place with fewer visitors and stay within your budget, you should attend Umrah during these months. Avoid visiting during the holiday season such as midterms, summer vacations, October vacations, and the last ten days of December or October.'
            },
            {
              question: 'What is 5 star Umrah package?',
              answer: 'The 5 star Umrah package includes luxury hotels situated conveniently within walking distance of the Haram Sharif with private transportation and guided Ziyarat with bespoke services to make for a truly memorable experience.'
            },
          ]
        }
      />

      <Footer />
    </>
  );
}
