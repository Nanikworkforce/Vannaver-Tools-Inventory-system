"use client"

import Image from "next/image"
import { useState } from "react"

const GalleryTab = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    "/vnvr/1.jpg",
    "/vnvr/2.jpg",
    "/vnvr/3.jpg",
    "/vnvr/4.jpg",
    "/vnvr/5.jpg",
    "/vnvr/6.jpg",
    "/vnvr/7.jpg",
    "/vnvr/8.jpg",
    "/vnvr/9.jpg",
    "/vnvr/10.jpg",
    "/vnvr/11.jpg",
    "/vnvr/12.jpg",
  ]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryTab 