export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ai
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Steel Rack Trusted Brand
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium"
              >
                View Products
              </button>
              <button 
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Get a Quote
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4 justify-center lg:justify-start">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  IN
                </div>
                <span className="ml-2 text-sm text-gray-600">Make in India</span>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            {/* Product image placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 opacity-20 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <div className="h-[80%] w-[80%] border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg">
                  <div className="text-gray-500 text-sm">
                    Rack Product<br/>Photo Placeholder
                  </div>
                </div>
              </div>
              {/* Rack unit indicator on the side */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-2 bg-gradient-to-b from-purple-500 to-orange-500"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-2 flex flex-col items-center justify-between p-1">
                {[1, 2, 3, 4, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42].map((u) => (
                  <div key={u} className={`w-3 h-0.5 bg-white mb-1 ${u === 42 ? 'mb-0' : ''}`} />
                ))}
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-2 flex flex-col items-center justify-between text-xs text-white">
                {[1, 2, 3, 4, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42].map((u) => (
                  <div key={u} className={`mb-1 ${u === 42 ? 'mb-0' : ''}`}>{u}U</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
