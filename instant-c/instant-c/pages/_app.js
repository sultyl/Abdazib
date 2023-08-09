import { CartContextProvider } from "@/components/CartContext"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import { createGlobalStyle, styled } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); 
  body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    background-color: #eee;
  } 
`;

const Hidden = styled.div`
    display: none;
`;


const App = ({ Component, pageProps }) => {
  const [isClient, setIsClient] = useState(false);
 
  useEffect(() => {
    setIsClient(true)
  }, []);
  return (
    <>
      <Hidden>
          <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
      </Hidden>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}

export default dynamic (() => Promise.resolve(App), {ssr: false});