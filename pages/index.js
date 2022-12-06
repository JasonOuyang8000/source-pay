import { Container, Navbar, Text } from "@nextui-org/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Source Pay</title>
        <meta name="description" content="Source Pay App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container gap={0} fluid>
        <Navbar disableShadow variant="sticky">
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
      </Container>
    </div>
  );
}
