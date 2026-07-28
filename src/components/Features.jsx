import { 
  Layout, 
  ShieldCheck, 
  Wind, 
  Package, 
  Lock, 
  Wind, 
  Package, 
  ShieldCheck,
  Wind,
  Package,
  ShieldCheck,
  Wind,
  Package,
  ShieldCheck
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Wall Mount Racks specially designed for small Networking, Domestic, Audio Video, Telecom and Lab applications",
      icon: Layout
    },
    {
      id: 2,
      title: "Designed exclusively for CCTV DVR Storage & Safety",
      icon: ShieldCheck
    },
    {
      id: 3,
      title: "Compact design to best suit 4 & 8 Channel DVR storage",
      icon: Package
    },
    {
      id: 4,
      title: "Elegant & compact retail packing for ease of hand carrying",
      icon: Package
    },
    {
      id: 5,
      title: "Front Door with Acrylic Glass quality with Lock & Key",
      icon: Lock
    },
    {
      id: 6,
      title: "Side Panels, Top and Bottom with ventilation slots",
      icon: Wind
    },
    {
      id: 7,
      title: "Dual Tone color for elegant aesthetic looks",
      icon: Package
    },
    {
      id: 8,
      title: "Supplied with wall mounting hardware set",
      icon: Package
    },
    {
      id: 9,
      title: "Cable entry cutouts on top & bottom, both sides covered with rubber grommet",
      icon: Wind
    },
    {
      id: 10,
      title: "1 Fan Mounting provision, PDU 3-Socket x1, Tray x1",
      icon: Wind
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <p className="text-gray-700">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
