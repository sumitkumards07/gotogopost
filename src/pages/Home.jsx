import React, { useState } from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { TypewriterEffect } from '../components/ui/typewriter-effect';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { Package, Truck, ShieldCheck, MapPin, Download, ChevronRight, Phone, ChevronDown, Star, Search, CheckCircle, Calculator, Building2, Store, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Home() {
  const [activeTab, setActiveTab] = useState('mini-truck');
  const navigate = useNavigate();

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 overflow-x-hidden font-sans">

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center w-full min-h-screen antialiased overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-100 blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-indigo-100 blur-3xl opacity-50 z-0"></div>
        <BackgroundBeams />

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm text-red-600 font-bold text-sm mb-8 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              GoToGo Post: Delhi NCR's #1
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              GoToGo Post. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Delhi NCR Delivery.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
              Get a mini-truck, bike courier, or professional packers at your doorstep in minutes. Fast, transparent, and strictly local.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => navigate('/coming-soon')} className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-[0_8px_16px_rgb(220,38,38,0.2)] hover:bg-red-700 hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-2">
                Download App <Download className="w-5 h-5" />
              </button>
              <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:shadow-sm hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-2">
                Enterprise Login <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-slate-500 font-medium text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Verified Drivers</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Lowest Prices</div>
            </div>
          </div>
          
          {/* Right Side: Interactive Widget */}
          <div className="w-full max-w-md mx-auto lg:ml-auto relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur-2xl opacity-20 translate-y-4"></div>
            
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 shadow-[0_8px_32px_rgba(31,38,135,0.1)] relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Quick Estimate</h3>
              
              <div className="flex p-1 bg-white/50 backdrop-blur-sm rounded-xl mb-6 shadow-inner border border-white/20">
                <button 
                  onClick={() => setActiveTab('mini-truck')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'mini-truck' ? 'bg-white shadow-sm text-red-600 scale-100' : 'text-slate-600 hover:text-slate-900 scale-95'}`}>
                  Mini Truck
                </button>
                <button 
                  onClick={() => setActiveTab('2-wheeler')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === '2-wheeler' ? 'bg-white shadow-sm text-red-600 scale-100' : 'text-slate-600 hover:text-slate-900 scale-95'}`}>
                  2-Wheeler
                </button>
              </div>

              <div className="space-y-4 relative">
                {/* Connecting visual line */}
                <div className="absolute left-[15px] top-[24px] bottom-[24px] w-0.5 z-0 border-l-2 border-dashed border-slate-300"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <input type="text" placeholder="Pickup location (e.g. Noida Sec 62)" className="w-full p-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-800 placeholder-slate-500 shadow-sm transition-all" />
                </div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <MapPin className="w-4 h-4 text-red-500" />
                  </div>
                  <input type="text" placeholder="Drop location (e.g. Gurugram Sec 44)" className="w-full p-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-800 placeholder-slate-500 shadow-sm transition-all" />
                </div>
              </div>
              
              <button onClick={scrollToPricing} className="w-full mt-8 bg-red-600/90 backdrop-blur-md text-white font-bold py-4 rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgb(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5">
                See Prices <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-12 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by 10,000+ Businesses in Delhi NCR</p>
          
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee py-2">
               {/* First Set */}
               <div className="flex items-center gap-10 md:gap-16 px-4 md:px-8">
                 <div className="text-xl md:text-2xl font-black font-serif text-blue-700">AcmeCorp</div>
                 <div className="text-xl md:text-2xl font-black font-mono text-emerald-600">TechLogis</div>
                 <div className="text-xl md:text-2xl font-black font-sans text-rose-600">GlobalMart</div>
                 <div className="text-xl md:text-2xl font-black italic text-violet-600">SwiftShip</div>
                 <div className="text-xl md:text-2xl font-black font-serif text-slate-700">RapidMove</div>
                 <div className="text-xl md:text-2xl font-black tracking-widest text-orange-500">VERTEX</div>
                 <div className="text-xl md:text-2xl font-black font-mono text-cyan-600">UrbanDrop</div>
               </div>
               {/* Duplicated Set for infinite scroll */}
               <div className="flex items-center gap-10 md:gap-16 px-4 md:px-8">
                 <div className="text-xl md:text-2xl font-black font-serif text-blue-700">AcmeCorp</div>
                 <div className="text-xl md:text-2xl font-black font-mono text-emerald-600">TechLogis</div>
                 <div className="text-xl md:text-2xl font-black font-sans text-rose-600">GlobalMart</div>
                 <div className="text-xl md:text-2xl font-black italic text-violet-600">SwiftShip</div>
                 <div className="text-xl md:text-2xl font-black font-serif text-slate-700">RapidMove</div>
                 <div className="text-xl md:text-2xl font-black tracking-widest text-orange-500">VERTEX</div>
                 <div className="text-xl md:text-2xl font-black font-mono text-cyan-600">UrbanDrop</div>
               </div>
            </div>
            
            {/* Gradient overlays for smooth fading edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">GoToGo Post Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From documents to full truckloads, we have the right vehicle for every delivery in Delhi NCR.</p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Express Courier" desc="Same-day delivery for parcels and documents across the city." icon={<Package className="w-8 h-8 text-red-600" />} />
            <ServiceCard title="Packers & Movers" desc="Stress-free home and office relocation services by experts." icon={<Truck className="w-8 h-8 text-red-600" />} />
            <ServiceCard title="Secure Freight" desc="High-security transportation for valuable and fragile goods." icon={<ShieldCheck className="w-8 h-8 text-red-600" />} />
          </div>

          {/* Mobile 3D Carousel */}
          <div className="block md:hidden">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="w-full pb-12 pt-4"
            >
              <SwiperSlide className="w-[80%]">
                <ServiceCard title="Express Courier" desc="Same-day delivery for parcels and documents across the city." icon={<Package className="w-8 h-8 text-red-600" />} />
              </SwiperSlide>
              <SwiperSlide className="w-[80%]">
                <ServiceCard title="Packers & Movers" desc="Stress-free home and office relocation services by experts." icon={<Truck className="w-8 h-8 text-red-600" />} />
              </SwiperSlide>
              <SwiperSlide className="w-[80%]">
                <ServiceCard title="Secure Freight" desc="High-security transportation for valuable and fragile goods." icon={<ShieldCheck className="w-8 h-8 text-red-600" />} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* 4. Shipment Tracking Section */}
      <section className="py-16 lg:py-24 bg-red-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Track Your Shipment</h2>
          <p className="text-red-100 mb-10 text-lg">Enter your tracking ID to get real-time updates on your package.</p>
          
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-6 h-6 text-slate-400 mr-3" />
              <input type="text" placeholder="e.g. GTG-123456789" className="w-full py-4 outline-none text-lg text-slate-800 placeholder-slate-400" />
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition text-lg w-full sm:w-auto">
              Track Now
            </button>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why GoToGo Post?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We combine technology with a robust local delivery network to give you the best logistics experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 z-0"></div>
            <StepCard number="1" title="Book Shipment" desc="Enter details and get an instant quote on our app or website." />
            <StepCard number="2" title="Pickup Scheduled" desc="Our agent arrives at your doorstep to securely pack and pick up." />
            <StepCard number="3" title="Transit Tracking" desc="Track your shipment's journey in real-time with live GPS." />
            <StepCard number="4" title="Delivered Safely" desc="Your package reaches its destination securely and on time." />
          </div>
        </div>
      </section>

      {/* 6. Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Built for Reliability</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We go above and beyond to ensure your packages and belongings reach safely, every single time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<MapPin className="w-8 h-8"/>} title="Real-Time Tracking" desc="Track every shipment live on the app with GPS precision and instant notifications." />
            <FeatureCard icon={<ShieldCheck className="w-8 h-8"/>} title="Insurance Protection" desc="Every package is fully insured from pickup to delivery. Your belongings are protected." />
            <FeatureCard icon={<Phone className="w-8 h-8"/>} title="24/7 Support" desc="Round-the-clock customer support via chat, call, and email. We're always here." />
            <FeatureCard icon={<Package className="w-8 h-8"/>} title="COD Support" desc="Cash on Delivery available for e-commerce shipments across Delhi NCR & 150km radius." />
            <FeatureCard icon={<Store className="w-8 h-8"/>} title="API Integration" desc="Seamlessly integrate our logistics engine directly into your Shopify or custom store." />
            <FeatureCard icon={<Truck className="w-8 h-8"/>} title="Bulk Orders" desc="Specialized dashboards and dedicated managers for handling high-volume business shipments." />
          </div>
        </div>
      </section>

      {/* 7. Pricing Calculator Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Transparent Pricing Calculator</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-md mx-auto lg:mx-0">Get an instant estimate for your shipment in Delhi NCR & up to 150km away.</p>
            <ul className="space-y-4 max-w-sm mx-auto lg:mx-0 text-left inline-block">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-red-500" /> Lowest per-kg rates in the industry</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-red-500" /> Free doorstep pickup included</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-red-500" /> Volume discounts for businesses</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-slate-100">
             <div className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Pickup Pincode</label>
                   <input type="text" placeholder="e.g. 110001" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Delivery Pincode</label>
                   <input type="text" placeholder="e.g. 400001" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-500" />
                 </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Weight (KG)</label>
                   <input type="number" placeholder="1.5" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-500" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Package Type</label>
                   <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-500">
                     <option>Document</option>
                     <option>Box / Parcel</option>
                     <option>Fragile</option>
                   </select>
                 </div>
               </div>
               <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                 <Calculator className="w-5 h-5" /> Calculate Estimate
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Business Solutions Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Business Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tailored logistics infrastructure for businesses of all sizes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition">
              <Store className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">E-commerce Stores</h3>
              <p className="text-slate-600 mb-8">Seamless Shopify/WooCommerce integration. Next-day delivery and robust COD management.</p>
              <a href="#" className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Schedule Demo <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-600 relative hover:shadow-xl transition transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <Briefcase className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">SMEs & Agencies</h3>
              <p className="text-slate-600 mb-8">Reliable document and parcel delivery with dedicated account managers and bulk pricing.</p>
              <a href="#" className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Schedule Demo <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition">
              <Building2 className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Enterprise</h3>
              <p className="text-slate-600 mb-8">Full-scale supply chain solutions, warehousing, freight, and custom API access.</p>
              <a href="#" className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Contact Sales <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-slate-600">Don't just take our word for it.</p>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Priya Sharma" role="Boutique Owner" text="GoToGo Post completely transformed my e-commerce delivery. Super fast and reliable!" />
            <TestimonialCard name="Rahul Verma" role="IT Professional" text="Used them for my house relocation. The packers were professional, and nothing was broken." />
            <TestimonialCard name="Ankit Gupta" role="Agency Director" text="Their enterprise API made tracking completely automated. Highly recommended for businesses." />
          </div>

          {/* Mobile 3D Carousel */}
          <div className="block md:hidden">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="w-full pb-12 pt-4"
            >
              <SwiperSlide className="w-[85%]">
                <TestimonialCard name="Priya Sharma" role="Boutique Owner" text="GoToGo Post completely transformed my e-commerce delivery. Super fast and reliable!" />
              </SwiperSlide>
              <SwiperSlide className="w-[85%]">
                <TestimonialCard name="Rahul Verma" role="IT Professional" text="Used them for my house relocation. The packers were professional, and nothing was broken." />
              </SwiperSlide>
              <SwiperSlide className="w-[85%]">
                <TestimonialCard name="Ankit Gupta" role="Agency Director" text="Their enterprise API made tracking completely automated. Highly recommended for businesses." />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our services.</p>
          </div>
          <div className="space-y-4">
            <FaqItem question="How do I track my shipment?" answer="You can track your shipment using the tracking tool on our homepage or by downloading the GoTogo Post mobile app." />
            <FaqItem question="How does the pricing work?" answer="Our pricing is based on the distance, weight, and type of service selected. You can get an instant, transparent quote directly on our pricing calculator." />
            <FaqItem question="Do you offer COD (Cash on Delivery)?" answer="Yes, COD is available for our registered business and e-commerce partners across Delhi NCR and up to a 150km radius." />
            <FaqItem question="What does your insurance cover?" answer="Every shipment is 100% insured against loss or damage during transit up to the declared value of the goods. Terms and conditions apply." />
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 border-t-4 border-red-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 lg:mb-8">Ready to Ship with GoToGo?</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-10 lg:mb-12">Join thousands of businesses and individuals in Delhi NCR who trust GoTogo Post for their daily logistics needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <button onClick={() => navigate('/coming-soon')} className="px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-xl shadow-[0_8px_16px_rgb(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-1 transition duration-200">
              Get Started Now
            </button>
            <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border border-red-500 hover:bg-red-500/10 hover:-translate-y-1 transition duration-200">
              Contact Sales
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-blue-300">
            <div className="flex flex-col items-center gap-2">
              <Download className="w-8 h-8" />
              <span className="text-sm font-semibold">Available on iOS & Android</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Sub-components
function ServiceCard({ title, desc, icon }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-white relative group/card w-full h-auto rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition duration-200">
        <CardItem translateZ="50" className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
          {icon}
        </CardItem>
        <CardItem translateZ="60" as="h3" className="text-xl font-bold text-slate-800 mb-3">
          {title}
        </CardItem>
        <CardItem translateZ="40" as="p" className="text-slate-600">
          {desc}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function StepCard({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl border-4 border-white">{number}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 flex items-center justify-between font-bold text-slate-800 transition" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-6 py-4 bg-slate-50 text-slate-600 border-t border-slate-200">{answer}</div>}
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
      <div className="flex gap-1 mb-4 text-yellow-400">
        <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
      </div>
      <p className="text-slate-600 mb-6 italic">"{text}"</p>
      <div>
        <h4 className="font-bold text-slate-800">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}

export default Home;
