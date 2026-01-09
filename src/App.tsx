import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const whatsappNumber = '1234567890';
  
  const getWhatsAppLink = (pName: string) => {
    const msg = encodeURIComponent(`Hi! I am interested in the "${pName}" from your collection.`);
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  const handlePurchaseClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I am interested in purchasing a vase.')}`, '_blank');
  };

  const products = [
    { id: 1, name: "Desert Sand", desc: "A rugged, textured piece inspired by the shifting dunes. Perfect for dried pampas grass.", img: "https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 2, name: "Ocean Whisper", desc: "Smooth porcelain with a hand-glazed finish that mimics the morning tide.", img: "https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 3, name: "Sunset Clay", desc: "Deep terracotta tones captured in a classic amphora shape. Kiln-fired for 48 hours.", img: "https://images.pexels.com/photos/1181363/pexels-photo-1181363.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 4, name: "Forest Glade", desc: "A deep olive vessel that brings the grounding energy of the woods into your home.", img: "https://images.pexels.com/photos/1838514/pexels-photo-1838514.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 5, name: "Midnight Ash", desc: "A bold, matte black statement piece that serves as a sculptural anchor.", img: "https://images.pexels.com/photos/1139620/pexels-photo-1139620.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    /* Changed bg-[#FAF9F6] to bg-[#F5F4F0] for a warmer gallery feel */
    <div className="min-h-screen bg-[#F5F4F0] text-gray-900 font-inter overflow-x-hidden relative">
      
      {/* 1. BACKGROUND WRAPPER (This is what blurs) */}
      <div className={`transition-all duration-1000 ${selectedProduct ? 'blur-xl grayscale-[30%] scale-[0.96] pointer-events-none' : ''}`}>
        <header className="py-12 md:py-20 px-6">
          <h1 className="text-center font-playfair text-5xl md:text-8xl font-bold tracking-tighter text-stone-900">
            Anitah's Vase
          </h1>
          <p className="text-center font-inter uppercase tracking-[0.3em] text-sm mt-2 text-stone-500">Collection</p>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
          <section className="mb-12 md:mb-16">
            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Hero" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="mb-20 md:mb-32 text-center max-w-3xl mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-6xl mb-6 leading-tight text-stone-800">
              Here's what's in the store
            </h2>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
              Discover a handpicked selection of artisanal vessels designed to transform your space. 
              Click on any piece to view its details.
            </p>
          </section>

          {/* Staggered Playful Gallery */}
          <section className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 items-center mb-32">
            <div onClick={() => setSelectedProduct(products[0])} className="col-span-1 md:col-span-4 group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-sm">
               <img src={products[0].img} alt={products[0].name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-playfair text-xl md:text-3xl">{products[0].name}</p>
               </div>
            </div>

            <div onClick={() => setSelectedProduct(products[1])} className="col-span-1 md:col-span-8 group relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-full cursor-pointer shadow-2xl">
               <img src={products[1].img} alt={products[1].name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-playfair text-2xl md:text-5xl">{products[1].name}</p>
               </div>
            </div>

            <div onClick={() => setSelectedProduct(products[2])} className="col-span-2 md:col-span-5 group relative aspect-[4/3] overflow-hidden rounded-full mt-4 md:mt-0 cursor-pointer shadow-sm">
               <img src={products[2].img} alt={products[2].name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-playfair text-2xl md:text-4xl">{products[2].name}</p>
               </div>
            </div>

            <div onClick={() => setSelectedProduct(products[3])} className="col-span-1 md:col-span-3 group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-sm">
               <img src={products[3].img} alt={products[3].name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-playfair text-xl">{products[3].name}</p>
               </div>
            </div>

            <div onClick={() => setSelectedProduct(products[4])} className="col-span-1 md:col-span-4 group relative aspect-[3/4] overflow-hidden rounded-[100px] cursor-pointer shadow-sm">
               <img src={products[4].img} alt={products[4].name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-playfair text-xl md:text-3xl">{products[4].name}</p>
               </div>
            </div>
          </section>

          <section className="py-20 text-center bg-stone-900 text-white rounded-[40px] px-6">
            <h2 className="font-playfair text-4xl md:text-6xl mb-8 leading-tight">contact us for purchase</h2>
            <button onClick={handlePurchaseClick} className="inline-flex items-center gap-4 bg-white text-stone-900 px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
            </button>
          </section>

          <section className="mt-32 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-playfair text-4xl md:text-6xl mb-6 leading-tight">About Anita's <br/>Vase Collection</h2>
              <p className="text-stone-600 text-lg leading-relaxed max-w-lg">
                Celebrating both traditional and contemporary aesthetics.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               <div className="h-40 bg-stone-200 rounded-full overflow-hidden shadow-sm">
                  <img src="https://images.pexels.com/photos/1181363/pexels-photo-1181363.jpeg?auto=compress&w=400" className="w-full h-full object-cover" />
               </div>
               <div className="h-40 bg-stone-200 rounded-full overflow-hidden shadow-sm translate-y-8">
                  <img src="https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&w=400" className="w-full h-full object-cover" />
               </div>
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-stone-200 text-center text-stone-400 text-xs tracking-widest uppercase">
          &copy; 2026 Anitah's Vase Collection
        </footer>
      </div>

      {/* 2. MODAL LAYER (Outside the blur) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
          {/* Darker backdrop for better contrast */}
          <div 
            className="absolute inset-0 bg-stone-900/60 transition-opacity duration-500" 
            onClick={() => setSelectedProduct(null)} 
          />
          
          <div className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row md:aspect-[16/9] max-h-[90vh] animate-in zoom-in-95 fade-in duration-500">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/90 rounded-full hover:bg-stone-100 transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1 bg-white overflow-y-auto">
              <h3 className="font-playfair text-4xl md:text-6xl mb-6 text-stone-900 leading-tight">
                {selectedProduct.name}
              </h3>
              <p className="text-stone-600 text-lg md:text-xl mb-10 leading-relaxed font-light">
                {selectedProduct.desc}
              </p>
              <a 
                href={getWhatsAppLink(selectedProduct.name)}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full hover:bg-black transition-all w-full md:w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                Inquire via WhatsApp
              </a>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-full order-1 md:order-2 overflow-hidden bg-stone-100">
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;