import React from 'react';
import { FloatingNav } from './components/ui/floating-nav';
import { BackgroundBeams } from './components/ui/background-beams';
import { TypewriterEffect } from './components/ui/typewriter-effect';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';
import { Package, Truck, ShieldCheck, MapPin, Download, ChevronRight, Phone, Mail } from 'lucide-react';

function App() {
  const navItems = [
    { name: 'Home', link: '#home', icon: <Package className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'About', link: '#about', icon: <Truck className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Services', link: '#services', icon: <MapPin className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Contact', link: '#contact', icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center w-full antialiased">
        <BackgroundBeams />
        <div className="max-w-7xl mx-auto p-4 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200 shadow-sm">
              🚀 #1 Courier & Packers App
            </div>
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 flex flex-col items-center md:items-start">
              <TypewriterEffect 
                words={[
                  { text: "Fast." },
                  { text: "Secure." }
                ]} 
              />
              <span className="text-blue-600 mt-2">Delivered.</span>
            </div>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0 mb-8">
              Premium courier and relocation services. Whether it's a small parcel or moving an entire home, GoTogo Post gets it there safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1 transition duration-200">
                Book a Delivery
              </button>
              <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition duration-200 border border-slate-200 flex items-center justify-center gap-2">
                Download App <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg relative">
            {/* Aceternity 3D Card for Hero Image */}
            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-transparent">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/hero-delivery.png"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl drop-shadow-2xl"
                    alt="Delivery Illustration"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <CardContainer className="inter-var">
               <CardBody className="bg-transparent relative group/card w-full h-auto rounded-xl p-0 border-transparent">
                 <CardItem translateZ="100" className="w-full relative">
                   <img src="/hero-delivery.png" className="w-full rounded-2xl drop-shadow-2xl" alt="About GoTogo" />
                   <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                       <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-xl text-slate-800">100%</h4>
                       <p className="text-sm text-slate-500">Insured Shipments</p>
                     </div>
                   </div>
                 </CardItem>
               </CardBody>
             </CardContainer>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
               <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
               About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">We Move What<br/>Matters Most</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded with a mission to revolutionize logistics in India, GoTogo Post combines cutting-edge technology with a human-first approach. Whether it's a small parcel or an entire household, we handle every shipment with care, speed, and transparency.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Truck className="w-5 h-5"/></div>
                <div><h4 className="font-bold text-slate-800">On-Time Guarantee</h4><p className="text-sm text-slate-500">98.5% on-time delivery</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><ShieldCheck className="w-5 h-5"/></div>
                <div><h4 className="font-bold text-slate-800">Fully Insured</h4><p className="text-sm text-slate-500">Every shipment protected</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Package className="w-5 h-5"/></div>
                <div><h4 className="font-bold text-slate-800">Expert Team</h4><p className="text-sm text-slate-500">Trained professionals</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><MapPin className="w-5 h-5"/></div>
                <div><h4 className="font-bold text-slate-800">Pan-India Reach</h4><p className="text-sm text-slate-500">120+ cities covered</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl md:text-5xl font-bold mb-2">10<span className="text-blue-300">M+</span></div><div className="text-blue-100 font-medium uppercase tracking-wider text-sm">Deliveries</div></div>
          <div><div className="text-4xl md:text-5xl font-bold mb-2">120<span className="text-blue-300">+</span></div><div className="text-blue-100 font-medium uppercase tracking-wider text-sm">Cities</div></div>
          <div><div className="text-4xl md:text-5xl font-bold mb-2">50<span className="text-blue-300">K+</span></div><div className="text-blue-100 font-medium uppercase tracking-wider text-sm">Customers</div></div>
          <div><div className="text-4xl md:text-5xl font-bold mb-2">8<span className="text-blue-300">+</span></div><div className="text-blue-100 font-medium uppercase tracking-wider text-sm">Years Trust</div></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From quick city couriers to full house relocations, we handle everything with care and precision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="City Courier" 
              desc="Same-day delivery for parcels and documents across the city." 
              icon={<Package className="w-8 h-8 text-blue-600" />} 
            />
            <ServiceCard 
              title="Packers & Movers" 
              desc="Stress-free home and office relocation services by experts." 
              icon={<Truck className="w-8 h-8 text-blue-600" />} 
            />
            <ServiceCard 
              title="Secure Freight" 
              desc="High-security transportation for valuable and fragile goods." 
              icon={<ShieldCheck className="w-8 h-8 text-blue-600" />} 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
               Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Built for Reliability</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We go above and beyond to ensure your packages and belongings reach safely, every single time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition text-center hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><MapPin className="w-8 h-8"/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Real-Time Tracking</h3>
              <p className="text-slate-600 text-sm">Track every shipment live on the app with GPS precision and instant notifications.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition text-center hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6"><ShieldCheck className="w-8 h-8"/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Insured Shipments</h3>
              <p className="text-slate-600 text-sm">Every package is fully insured from pickup to delivery. Your belongings are protected.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition text-center hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Phone className="w-8 h-8"/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">24/7 Support</h3>
              <p className="text-slate-600 text-sm">Round-the-clock customer support via chat, call, and email. We're always here.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition text-center hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6"><Download className="w-8 h-8"/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Affordable Pricing</h3>
              <p className="text-slate-600 text-sm">Transparent pricing with no hidden fees. Get instant quotes via app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative z-10">
            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card w-auto sm:w-[25rem] h-auto rounded-xl border-transparent">
                <CardItem translateZ="100" rotateX={5} rotateY={-10} className="w-full">
                  <img
                    src="/app-mockup.png"
                    className="h-full w-full object-cover group-hover/card:shadow-2xl drop-shadow-2xl"
                    alt="App Mockup"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Manage deliveries from your pocket</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><MapPin className="w-4 h-4"/></div>
                Live GPS Tracking of your items
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><ShieldCheck className="w-4 h-4"/></div>
                Instant secure payments
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Package className="w-4 h-4"/></div>
                One-tap rebooking
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800 transition">
                Download for iOS
              </button>
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800 transition">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">GoTogo Post</h3>
            <p className="text-sm leading-relaxed mb-4">
              Premium courier and relocation services. Whether it's a small parcel or moving an entire home, GoTogo Post gets it there safely.
            </p>
            <p className="text-sm text-slate-500">
              <strong>CIN:</strong> U53200UP2024PTC200350 <br />
              <strong>Reg No:</strong> 200350 <br />
              <strong>Type:</strong> Private Company limited by shares
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>OFF.NO.955, GAUR CITY MALL, C01, BGH, SEC4 GR.NOIDAWEST,<br/>Gautam Buddha Nagar, Uttar Pradesh,<br/>India, 201318</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:JATINDER991425@GMAIL.COM" className="hover:text-white transition">JATINDER991425@GMAIL.COM</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GoTogo Post. All rights reserved. (Indian Non-Government Company)</p>
        </div>
      </footer>
    </div>
  );
}

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

export default App;
