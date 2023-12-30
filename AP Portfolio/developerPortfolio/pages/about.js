//Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 220,
  margin: "0rem 1rem 0rem 1rem",
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// About page
export default () => (
  <Layout>
    <div className="breadcrumbs">
      <a href="/">Home</a> {">"} <b>About</b>
    </div>
    <div className="aboutPage">
      <div className="paraAndImage">
        <div className="para">
          <h2>About</h2>
          <p>
          I Am Azmina, born in Congo and speak 7 languages.
          I am self-motivated and progress-driven Marketing developer with a long-standing record of initiative and innovation. My purpose is to have a positive impact on people that I meet and leave behind a legacy via humour. I am open-minded and focused on new developments in my field, proven to be effective and motivational, with proficiency in innovation and collaborative work.
          I enjoy brainstorming and coordinating efforts to achieve a common goal.
          </p>
        </div>
        <div className="image">
          <Image
            src="/static/images/azmina.jpg"
            alt="Azmina Pyarali"
            style={imgStyle}
          />
        </div>
      </div>
      <div className="eduAndWork">
        <div className="edu">
          <h3>Education</h3>
          <p>
            My prior education is listed below:
            <br />
            <div className="priorEduDivs">
              <b>ISTQB</b> <br />
              Tester certification <br />
              2023
            </div>
            <div className="priorEduDivs">
              <b>HYPERION DEV</b> <br />
              Full Stack Web Developer <br />
              2023
            </div>
            <div className="priorEduDivs">
              <b>UNIVERSITY OF CAPE TOWN</b> <br />
              Digital Marketing <br />
              2019
            </div>
            <div className="priorEduDivs">
              <b>UNISA</b> <br />
              International Marketing <br />
              2016
            </div>
            <div className="priorEduDivs">
              <b>UNIVERSITY OF JOHANNESBURG</b> <br />
              B.A Humanities (Political Science) <br />
              2010-2015
            </div>
            <div className="priorEduDivs">
              <b>WITSWATERSRAND UNIVERSITY</b> <br />
              BA International Relations <br />
              2009
            </div>
            <div className="priorEduDivs">
              <b>BRYANSTON HIGH SCHOOL</b> <br />
              2008
            </div>
          </p>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <br/>
          <div className="job">
            {" "}
            <b>Tester Analyst</b> <br />
            Adapt IT (2023)
          </div>
          <div className="job">
            {" "}
            <b>Digital Marketing Developer</b> <br />
            Adapt IT (2018- 2022 )
          </div>
          <div className="job">
            {" "}
            <b>Marketing Assistant</b> <br />
            Adapt IT (2017-2018)
          </div>
          <div className="job">
            <b>Store Manager</b> <br />
            Farmacia popular (2016)
          </div>

          <div className="job">
            <b>French Tutor</b> <br />
            University of Johannesburg (2012-2015) 
          </div>
        </div>
      </div>
    </div>

    {/* Styling for about page */}
    <style jsx>{`
      .job p {
        line-height: 1.3rem;
        font-size: 0.9rem;
        padding-top: 0.5rem;
      }
      hr {
        padding: 0;
        margin: 0;
      }
      .aboutPage {
        display: flex;
        flex-direction: column;
        padding: 1rem 4rem 1rem 4rem;
      }
      .paraAndImage {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .para {
        width: 78%;
      }
      .image {
        margin-left: auto;
      }
      .edu {
        flex: 1;
      }
      .work {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .job {
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background-color: #f6f8fa;
      }
      .eduAndWork {
        display: flex;
        flex-direction: row;
      }
      .priorEduDivs {
        border: 1px solid #c4c4c4;
        background-color: #d9e5ef;
        margin: 0.5rem 1rem 0.5rem 0rem;
        padding: 0.5rem;
        border-radius: 8px;
      }
    `}</style>
  </Layout>
);
