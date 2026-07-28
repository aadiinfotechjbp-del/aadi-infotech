export default function TrustStrip() {
  const trustItems = [
    { id: 1, label: "Made in India", icon: "Factory" },
    { id: 2, label: "Steel Body", icon: "Building" },
    { id: 3, label: "Lock & Key Security", icon: "Lock" },
    { id: 4, label: "Custom Sizes Available", icon: "Settings" }
  ];

  return (
    <section className="py-6 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {trustItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 text-sm text-gray-600">
              {/* Icon placeholder - using simple divs for now */}
              <div className="h-6 w-6 bg-primary-50 flex items-center justify-center rounded-lg text-primary-600 text-xs">
                {/* Would use actual icon here */}
                {/* For now, just showing first letter */}
                <span className="font-medium">{item.label.charAt(0)}</span>
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
