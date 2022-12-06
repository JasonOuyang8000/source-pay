import "../styles/globals.css";
import { Varela_Round } from "@next/font/google";
import { NextUIProvider } from "@nextui-org/react";

// If loading a variable font, you don't need to specify the font weight
const varelaRound = Varela_Round({
  weight: "400",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={varelaRound.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
