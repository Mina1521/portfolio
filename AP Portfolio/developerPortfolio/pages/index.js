//Import components
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
import Link from "next/link";

// Styling for image
const imgStyle = {
  width: 300,
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// Home page
export default (props) => (
  <Layout>
    <div className="breadcrumbs">Home</div>
    <div className="indexDiv">
      <div className="para">
        <div>
          {" "}
          My name is Azmina Pyarali and I'm a Full Stack Web Developer. Feel free
          to browse through the pages of this site to learn more about{" "}
          <a href="about">my background</a> and to view some of my{" "}
          <a href="projects">recent coding projects</a>. I'm proficient with
          both front end and back end technologies/frameworks:
        </div>
        <div className="twoLists">
          <div className="list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="list">
            {" "}
            <ul>
              <li>MongoDB</li>
              <li>JWT (JSON web tokens)</li>
              <li>Next.js</li>
              <li>REST APIs</li>
              <li>Bootstrap</li>
              <li>Git and Github</li>
            </ul>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>{" "}
          with any questions or if you believe I would be a good fit for your
          business.
        </div>
      </div>
      <div className="image">
        <Image
          src="/static/images/azmina.jpg"
          alt="Azmina Pyarali"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for home page */}
    <style jsx>{`
      .indexDiv {
        display: flex;
        flex-direction: row;
        padding: 1rem 4rem 1rem 4rem;
        width: 100%;
      }
      .breadcrumbs {
        font-weight: bold;
      }
      .para {
        width: 80%;
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
      }
      .image {
        margin-left: auto;
      }
      ul {
        margin-top: 0.5rem;
      }
      li {
        line-height: 1.7rem;
      }
      .twoLists {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </Layout>
);
