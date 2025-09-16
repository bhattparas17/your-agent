import { ShieldCheckIcon, HeartIcon, TruckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

function Products() {
  const products = [
    {
      name: "Life Insurance",
      description: "Secure your family’s future with our flexible life insurance plans.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Health Insurance",
      description: "Comprehensive health coverage for you and your loved ones.",
      icon: HeartIcon,
    },
    {
      name: "Vehicle Insurance",
      description: "Affordable vehicle insurance to protect your car or bike.",
      icon: TruckIcon,
    },
    {
      name: "Travel Insurance",
      description: "Travel with peace of mind anywhere in the world.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-700 mb-8 text-center">
        Our Insurance Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            <product.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
