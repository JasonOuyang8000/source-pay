import { Container, Input, Navbar, Row, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import Lottie from "lottie-react";
import GreenMoneyBg from "../assets/78265-running-after-money-loop.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Source Pay</title>
        <meta name="description" content="Source Pay App" />
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
            backdropFilter: "unset",
          }}
          disableShadow
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
              Source Pay
            </Text>
          </Navbar.Brand>
        </Navbar>
        <Spacer y={5} />

        <Row justify="center" align="center">
          <Input size="xl" placeholder="Enter a site" />
          <Lottie
            style={{
              marginLeft: "300px",
              height: "400px",
            }}
            animationData={GreenMoneyBg}
          />
        </Row>
      </Container>
    </div>
  );
}
