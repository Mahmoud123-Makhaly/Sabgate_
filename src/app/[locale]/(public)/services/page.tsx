import React from 'react'
import { Achievements, Banner, ButtonMaker, SFigures, ImageMaker, IconLink, Projects } from '@components'
import bannerImg from '@assets/images/service/banner.png'
import engineer from '@assets/images/service/engineer.png'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '@navigation'
import { ServicesBanner } from '@components'

const page = () => {
  return (
    <React.Fragment>
      <ServicesBanner />
      <Container>
        <section>
          <Achievements />
        </section>
        <section>
          <SFigures />
        </section>
        <section>
          <div className="flex-between px-5">
            <h4>ترغب في الحصول على خدمات متعددة في حلول العزل المائي وخدمات البناء؟</h4>
            <IconLink color="orange" href="/consulting" text="حجز موعدك المجاني" />
          </div>
        </section>
        <section>
          <Projects />
        </section>
      </Container>
    </React.Fragment>
  );
};

export default page