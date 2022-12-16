import { Container, Input, Navbar, Row, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import Lottie from "lottie-react";
import CollegeIcon from "../assets/98991-exams-preparation.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Course Search</title>
        <meta name="description" content="Course Search App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        css={{
          backgroundColor: "#FFFFF0",
          height: "100vh",
          maxW: "unset",
          padding: 0,
        }}
        fluid
      >
        <Navbar
          css={{
            $$navbarBackgroundColor: "transparent",
            $$navbarBlurBackgroundColor: "transparent",
            backdropFilter: "black",
            shadow: "none",
          }}
          variant="sticky"
        >
          <Navbar.Brand>
            <Text
              style={{
                fontSize: "24px",
              }}
              b
              css={{
                textGradient: "45deg, $black -20%, $gray600 50%",
              }}
            >
              Course Search
            </Text>
          </Navbar.Brand>
        </Navbar>
        <Spacer y={5} />

        <Row justify="center" align="center">
          <Input
            animated={false}
            css={{ $$inputColor: "#fff", border: "2px solid black" }}
            size="xl"
            placeholder="Enter your College"
            color="#000"
          />
          <Lottie
            style={{
              marginLeft: "300px",
              height: "450px",
            }}
            animationData={CollegeIcon}
          />
        </Row>
      </Container>
    </div>
  );
}
