import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
         <div className="py-16 bg-[#070524] text-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-extrabold text-center text-yellow-500 mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* project 1 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/Screenshot-amazon.png"
                        alt="Web Development"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">Amazon clone</h3>
                  
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://amazon-clone-by-misbah.netlify.app/'  className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-yellow-500 mb-3'>veiw project</button>
                    </Link>
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://github.com/misbahbaloch26/Amazon-clone-by-misbah.git'  className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-[#070524] mb-3'>Code source</button>
                    </Link>
                    </div>
                  </div>
        
                  {/* project 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/Screenshot-resume.png"
                        alt="Mobile App Development"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">Resume Builder</h3>
                    </div>

                    <div className='flex justify-center '>
                    <Link href='https://resume-builder-by-misbah.netlify.app/'  className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-yellow-500 mb-3'>veiw project</button>
                    </Link>
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://github.com/misbahbaloch26/resume-builder-by-misbah.git'  className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-[#070524] mb-3'>Code source</button>
                    </Link>
                    </div>
                  </div>
        


                  {/* project3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/Screenshot-nike.png"
                        alt="UI/UX Design"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">Nike clone</h3>
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://hackathon-q2-by-misbah.netlify.app/'className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-yellow-500 mb-3'>veiw project</button>
                    </Link>
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://github.com/misbahbaloch26/Hackathon-website.git'  className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-[#070524] mb-3'>Code source</button>
                    </Link>
                    </div>
                  </div>
        
                  {/* project 4 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/Screenshot-resume.png"
                        alt="SEO Optimization"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">Static resume</h3>
                    </div>
                    <div className='flex justify-center '>
                      <Link href='https://resume-builder-by-misbah.netlify.app/' className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-yellow-500 mb-3'>veiw project</button>
                    </Link>
                    </div>

                    <div className='flex justify-center '>
                      <Link href='https://github.com/misbahbaloch26/resume-builder-by-misbah.git'className='w-full flex justify-center'>
                    <button className='text-white p-2 rounded-lg w-[70%] bg-[#070524] mb-3'>Code source</button>
                    </Link>
                    </div>
                  </div>


                </div>
              </div>
            </div>
    </div>
  )
}

export default Projects