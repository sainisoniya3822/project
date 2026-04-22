import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import RoomSection from '@/components/RoomSection'
import WeddingVenue from '@/components/WeddingVenue'
import RestaurantSection from '@/components/ResturantSection'
import GallerySection from  '@/components/GallerySection'
import HotelAmenities from '@/components/HotelSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'
import FooterSection from '@/components/FooterSection'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <RoomSection/>
      <RestaurantSection/>
      <GallerySection/>
      <WeddingVenue/>
      <HotelAmenities/>
      <TestimonialsSection/>
      <ContactForm/>
      <FooterSection/>


    </div>
  )
}

export default page
