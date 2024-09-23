import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BedDouble, Bath, SquareFoot, MapPin, Heart } from 'lucide-react'



const properties = [
    {
        id: 1,
        title: "Luxury Apartment with City View",
        price: 2500,
        type: 'rent',
        image: "https://hKP3atigPtdQyoWhhPdQO.public.blob.vercel-storage.com/modern-apartment-fhd8w3.jpg",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        location: "Downtown, Metropolis"
    },
    {
        id: 2,
        title: "Cozy Studio in Historic District",
        price: 1200,
        type: 'rent',
        image: "https://hKP3atigPtdQyoWhhPdQO.public.blob.vercel-storage.com/cozy-studio-fJ9swG.jpg",
        bedrooms: 1,
        bathrooms: 1,
        area: 500,
        location: "Old Town, Metropolis"
    },
    {
        id: 3,
        title: "Modern Townhouse with Garden",
        price: 450000,
        type: 'sale',
        image: "https://hKP3atigPtdQyoWhhPdQO.public.blob.vercel-storage.com/modern-townhouse-e0yFVO.jpg",
        bedrooms: 3,
        bathrooms: 2.5,
        area: 1800,
        location: "Suburbia, Metropolis"
    },
    {
        id: 4,
        title: "Penthouse with Panoramic Views",
        price: 1200000,
        type: 'sale',
        image: "https://hKP3atigPtdQyoWhhPdQO.public.blob.vercel-storage.com/luxury-penthouse-YyGx8o.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 3000,
        location: "Skyline District, Metropolis"
    }
]

const PropertyCard = ({ property }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <Heart className={`w-6 h-6 ${isHovered ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{property.title}</h3>
                <p className="text-brandPrimary font-bold text-xl mb-4">
                    {property.type === 'rent' ? `$${property.price}/month` : `$${property.price.toLocaleString()}`}
                </p>
                <div className="flex items-center mb-4 text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.location}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                        <BedDouble className="w-5 h-5 mr-1" />
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                        <Bath className="w-5 h-5 mr-1" />
                        <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                        <SquareFoot className="w-5 h-5 mr-1" />
                        <span>{property.area} sqft</span>
                    </div>
                </div>
            </div>
            <div className="px-6 pb-6">
                <button className="w-full bg-brandPrimary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                    {property.type === 'rent' ? 'Schedule a Tour' : 'Contact Agent'}
                </button>
            </div>
        </motion.div>
    )
}

export default function Rent() {
    const [filter, setFilter] = useState < 'all' | 'rent' | 'sale' > ('all')

    const filteredProperties = properties.filter(p =>
        filter === 'all' || p.type === filter
    )

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Find Your Perfect Space</h1>

                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${filter === 'all' ? 'bg-brandPrimary text-white' : 'bg-white text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        All Properties
                    </button>
                    <button
                        onClick={() => setFilter('rent')}
                        className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${filter === 'rent' ? 'bg-brandPrimary text-white' : 'bg-white text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        For Rent
                    </button>
                    <button
                        onClick={() => setFilter('sale')}
                        className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${filter === 'sale' ? 'bg-brandPrimary text-white' : 'bg-white text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        For Sale
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    )
}
