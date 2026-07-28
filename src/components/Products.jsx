export default function Products() {
  const products = [
    {
      id: 1,
      title: "Wall Mount Racks",
      description: "Small format, for networking, domestic, audio-video, telecom, lab use. Sizes: 2U, 3U, 4U, 6U.",
      icon: "Wall",
      sizes: ["2U", "3U", "4U", "6U"]
    },
    {
      id: 2,
      title: "Floor Mount / Server Racks",
      description: "Tall standing cabinets, sizes 6U up to 42U.",
      icon: "Server",
      sizes: ["6U", "9U", "12U", "15U", "18U", "21U", "24U", "27U", "30U", "33U", "36U", "39U", "42U"]
    },
    {
      id: 3,
      title: "CCTV DVR Storage Racks",
      description: "Compact cabinets specifically sized for 4-channel and 8-channel DVR units.",
      icon: "Cctv",
      sizes: ["4U", "6U", "8U", "10U", "12U"]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Product Range
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  onClick={() => alert(`Sizes available: ${product.sizes.join(', ')}`)}
                  className="w-full px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded hover:bg-primary-100 transition-colors"
                >
                  View Sizes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
