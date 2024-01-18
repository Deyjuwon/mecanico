import React from 'react'
import './TestimonialCard.css'
import { CiStar } from "react-icons/ci";
import ManOnCall from '/src/assets/man-on-call.png'

const TestimonialCard = (props) => {
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

            <p>{props.testimony}</p>
        </div>
            
        <div className='user-details testimonial-card-bottom'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard