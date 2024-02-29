import {
  Carousel,
  ChooseOrder,
  Figures,
  FixedButtons,
  Isolation,
  Material,
  Solutions,
  Waterproof,
} from "@components";
import React from "react";
import { Container } from "reactstrap";
import { Clients } from "@components";
import { IconCards } from "@components";

export default function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <section>
        <Container>
          <Figures />
        </Container>
      </section>
      <section className="p-md-5 bg-light-orange">
        <Container>
          <Clients />
        </Container>
      </section>
      <section>
        <Container>
          <Waterproof />
        </Container>
      </section>
      <section>
        <Container>
          <Material />
        </Container>
      </section>
      <section className="bg-light-orange py-5">
        <Container>
          <ChooseOrder />
        </Container>
      </section>
      <section>
        <Container>
          <Isolation />
        </Container>
      </section>
      <section className="bg-light-blue">
        <Container>
          <Solutions />
        </Container>
      </section>
      <section className="home-iconcard">
        <Container>
          <IconCards />
        </Container>
      </section>
      <FixedButtons />
    </React.Fragment>
  );
}
