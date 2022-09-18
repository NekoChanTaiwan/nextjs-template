import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang='en' className='scroll-smooth antialiased'>
      <Head />
      <body className='overflow-x-hidden bg-gradient-to-br from-[#00b7ff9b] to-[#f43f5d98] text-[#fff] selection:bg-[#67769660]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
