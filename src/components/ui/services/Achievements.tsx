import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'reactstrap'
import clients from '@assets/images/service/clients.png'
import calendar from '@assets/images/service/calendar.png'
import surface from '@assets/images/service/surface.png'
import projects from '@assets/images/service/projects.png'
import { ImageMaker } from '../../common'
const Achievements = () => {
    return (
        <Row className='text-center text-black'>
            <Col className='col-6' lg={3}><div className='px-5 p-4 rounded-4 clients-card'><div><ImageMaker src={clients} alt='' className='mb-4' /></div><h4 className='fw-bold text-black'>6200</h4><p>عميل</p></div></Col>
            <Col className='col-6' lg={3}><div className='px-5 p-4 rounded-4 calendar-card'><div><ImageMaker src={calendar} alt='' className='mb-4' /></div><h4 className='fw-bold text-black'>6958</h4><p>يوم العمل</p></div></Col>
            <Col className='col-6' lg={3}><div className='px-5 p-4 rounded-4 surface-card'><div><ImageMaker src={surface} alt='' className='mb-4' /></div><h4 className='fw-bold text-black'>750,000</h4><p>منطقة الأسطح</p></div></Col>
            <Col className='col-6' lg={3}><div className='px-5 p-4 rounded-4 projects-card'><div><ImageMaker src={projects} alt='' className='mb-4' /></div><h4 className='fw-bold text-black'>4500</h4><p>المشاريع</p></div></Col>
        </Row>
    )
}

export default Achievements