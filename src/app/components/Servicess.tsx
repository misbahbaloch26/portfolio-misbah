import React from 'react'
import Image from 'next/image';


  
const Servicess = () => {
  return (
  
    <div className="py-16 bg-[#070524] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-extrabold text-center  mb-12 text-yellow-500">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/image.png"
                alt="Web Development"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Frontend-Web Development</h3>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/webdev-image.png"
                alt="Mobile App Development"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Backend-web Development</h3>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/coding-image.webp"
                alt="UI/UX Design"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/agentic-ai.jpg"
                alt="SEO Optimization"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Agentic AI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



  


export default Servicess