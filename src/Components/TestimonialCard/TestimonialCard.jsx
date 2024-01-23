import React from 'react'
import './TestimonialCard.css'
import { CiStar } from "react-icons/ci";
import TIMG from '/src/assets/TImg1.jpeg';

const TestimonialCard = ({ name, testimony, imgUrl }) => {
  return (
    <div className='testimonial-card'>
        <div className='testimonial-card-top'>
            <div className='stars'>
                <span><CiStar style={{
                    color:'red',
                    backgroundColor:'yelow',
                }} size={25}/></span>
                <span><CiStar style={{
                    color:'red',
                    backgroundColor:'yelow',
                }} size={25}/></span>
                <span><CiStar style={{
                    color:'red',
                    backgroundColor:'yelow',
                }} size={25}/></span>
                <span><CiStar style={{
                    color:'red',
                    backgroundColor:'yelow',
                }} size={25}/></span>
                <span><CiStar style={{
                    color:'red',
                    backgroundColor:'yelow',
                }} size={25}/></span>
            </div>

            <p>{testimony}</p>
        </div>
            
        <div className='user-details testimonial-card-bottom'>
            <img src={TIMG} alt="" />
            <p>{name}</p>
            
        </div>
    </div>
  )
}

export default TestimonialCard