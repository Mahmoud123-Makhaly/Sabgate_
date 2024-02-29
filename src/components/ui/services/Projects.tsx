import React from 'react'
import { Col, Row } from 'reactstrap'
import { Figure } from '../../common'
import home from '@assets/images/service/home.png'
import build from '@assets/images/service/build.png'
import metro from '@assets/images/service/metro.png'
import loader from '@assets/images/service/loader.png'
import heavy from '@assets/images/service/heavy.png'
const Projects = () => {
    return (
        <Row>
            <Col className='col-12'></Col>
            <Col md={2}>
                <Figure img={home.src} textAlign='start' className='rounded' textColor='heading' text='البناء السكني' textPosition='down' textbg='light-blue' />
            </Col>
            <Col md={2}><Figure img={build.src} textAlign='start' className='rounded' textColor='heading' text='البناء السكني' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={build.src} textAlign='start' className='rounded' textColor='heading' text='البناء التجاري' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={metro.src} textAlign='start' className='rounded' textColor='heading' text='البناء الصناعي' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={loader.src} textAlign='start' className='rounded' textColor='heading' text='البناء المؤسسي' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={loader.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={heavy.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={loader.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={metro.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={build.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={home.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={home.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
            <Col md={2}><Figure img={heavy.src} textAlign='start' className='rounded' textColor='heading' text='بناء البنية التحتية' textPosition='down' textbg='light-blue' /></Col>
        </Row>
    )
}

export default Projects