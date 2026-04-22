import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import RoomSection from '@/components/RoomSection'
import WeddingVenue from '@/components/WeddingVenue'
import RestaurantSection from '@/components/ResturantSection'
import HotelAmenities from '@/components/HotelSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <RoomSection/>
      <RestaurantSection/>
      <WeddingVenue/>
      <HotelAmenities/>
      <TestimonialsSection/>
      <ContactForm/>


    </div>
  )
}

export default page
