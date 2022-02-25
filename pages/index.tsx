import {
  MenuButton,
  PageWrapper,
  RoundImage,
  Container,
  Card,
} from "@abergwall/natlon-ui";
import type { NextPage } from "next";
import { useRef } from "react";

const Home: NextPage = () => {
  const scrollRef = useRef(null);

  return (
    <PageWrapper>
      <MenuButton isSticky className="margin: 10px;" scrollToTopRef={scrollRef}>
        Hej
      </MenuButton>
      <Container>
        <Card title="Title" ref={scrollRef}>
          <RoundImage />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            euismod, justo eu rutrum lacinia, nulla felis pharetra turpis, sit
            amet blandit diam augue sit amet massa. Maecenas non suscipit nulla.
            Proin maximus elementum orci ac pellentesque. Etiam vehicul
          </p>
        </Card>
      </Container>
      <Container>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          euismod, justo eu rutrum lacinia, nulla felis pharetra turpis, sit
          amet blandit diam augue sit amet massa. Maecenas non suscipit nulla.
          Proin maximus elementum orci ac pellentesque. Etiam vehicula bibendum
          pharetra. Nam non nisl in diam pellentesque aliquam id eget sapien.
          Nunc quis lorem lorem. Nullam ullamcorper enim ut elit accumsan
          finibus. Aenean et efficitur tellus. Donec ut gravida enim. Sed lorem
          arcu, gravida non eros eget, molestie blandit ex.
        </p>
      </Container>
    </PageWrapper>
  );
};

export default Home;
