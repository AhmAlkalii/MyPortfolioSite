import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#C88EA7'>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' 
            iconStyle={{background: "#DE8F5F", color: "#fff"}} icon={<SchoolIcon/>}>
               
                <h3 className='vertical-timeline-element-title'>
                    Funtaj Intenational School, Abuja, Nigeria
                </h3>

                <p>
                    Primary School Cerficate
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education' date='2014-2020' 
            iconStyle={{background: "#DE8F5F", color: "#fff"}} icon={<SchoolIcon/>}>
               
                <h3 className='vertical-timeline-element-title'>
                    Nigerian Tulip International Collages, Abuja, Nigeria
                </h3>
                
                <p>
                    High School Diploma
                </p>
            
            </VerticalTimelineElement> 

             <VerticalTimelineElement className='vertical-timeline-element--education' date='2022-2025' 
            iconStyle={{background: "#DE8F5F", color: "#fff"}} icon={<SchoolIcon/>}>
                
                <h3 className='vertical-timeline-element-title'>
                    University of Information Technology and Management, Rzeszow, Poland
                </h3>
                
                <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree
                </h4>

                <p>
                   Computer Science
                </p>

            </VerticalTimelineElement>  

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="03/23 - 05/23"
            iconStyle={{ background: "#643843", color: "#fff" }}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Intern - Darrusalam Computer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Kaduna,Nigeria
                </h4>
                <p>
                    Collaborated on building basic websites/pages using React, HTML, CSS, and
                    JavaScript also
                    Contributed to the development and implementation of web solutions.
                    Gained practical experience in front-end technologies and web development
                    practices
                </p>
            </VerticalTimelineElement>


        </VerticalTimeline>
    </div>
  )
}



export default Experience