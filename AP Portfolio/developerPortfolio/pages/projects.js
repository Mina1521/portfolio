//Import components
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 500,
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// Projects page
export default () => (
  <Layout>
    <div className="breadcrumbs">
      <a href="/"> Home</a> {">"} <b>Projects</b>
    </div>
    <div className="projectsPage" id="projects">
      <div className="para">
        <h2>Projects</h2>
        <div className="text">
          These are some of my recent projects. I've deployed a few to their own
          web addresses with{" "}
          <a href="https://www.heroku.com/platform">Heroku</a> and others using{" "}
          <a href="https://github.com/Mina1521">Github</a>.
        </div>

        <div className="projectItem">
          <b>My game</b>
          <br /> Created with HTML, CSS, Javascript, React<br />
          Hosted on Heroku:{" "}
          <a href="https://task13game-7783798f2a74.herokuapp.com/">
          https://task13game-7783798f2a74.herokuapp.com/
          </a>
          <div className="projNumber">1</div>
        </div>

        <div className="projectItem">
          <b>My iTunes </b>
          <br /> Created with HTML, CSS, Javascript, React, Node and Express{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://mina1521.github.io/Itune/">
          https://mina1521.github.io/Itune/
          </a>
          <div className="projNumber">2</div>
        </div>
        <div className="projectItem">
          {" "}
          <b>My Website</b> <br />
          Created with HTML, CSS and Javascript
          <br /> Github repo (source code){" "}
          <a href="https://github.com/Mina1521/Website.git">
          https://github.com/Mina1521/Website.git
          </a>
          <div className="projNumber">3</div>
        </div>

        <div className="text">
          Feel free to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>{" "}
          if you have any questions about my projects above.
        </div>
      </div>{" "}
      <div className="image">
        <Image
          src="/static/images/workPic.jpg"
          alt="Man working on laptop"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for projects page */}
    <style jsx>{`
      .projectsPage {
        display: flex;
        flex-direction: row;
        padding: 1rem 4rem 1rem 4rem;
        width: 100%;
      }
      .para {
        padding: 0rem;
        width: 50%;
      }
      .projectItem {
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        font-size: 0.9rem;
      }
      .projectItem a {
        display: inline;
      }
      .projectItem b {
        font-size: 1.1rem;
      }
      .projNumber {
        text-align: right;
        padding: 0;
        margin: 0;
      }
      .text {
        padding: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .image {
        margin-left: auto;
      }
      li {
        padding-bottom: 1rem;
      }
    `}</style>
  </Layout>
);