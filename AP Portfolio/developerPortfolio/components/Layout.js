// Import components
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

// Styling for layout
const layoutStyle = {
  position: "relative",
  padding: "1rem 1rem 0rem 1rem",
  minHeight: "80vh",
};

/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */
const Layout = (props) => (
  <div>
    <Head>
      {/* Import bootstrap stylesheet */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <Header />

    {/* Content for every page */}
    <div style={layoutStyle}>{props.children}</div>
    <Footer />

    {/* Global styles for whole app */}
    <style global jsx>{`
      body {
        font-size: 16px;
      }
      li {
        line-height: 1.5rem;
      }
      p {
        line-height: 1.5rem;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .breadcrumbs {
        margin-left: 4rem;
        font-size: 0.8rem;
      }
    `}</style>
  </div>
);

export default Layout;
