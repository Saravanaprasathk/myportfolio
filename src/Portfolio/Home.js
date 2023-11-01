import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import 'aos/dist/aos.css';
import Aos from 'aos';
import saravan from "./Image/saravan.jpg"
import mern from "./Image/mern.png"
import saravan2 from "./Image/saravan2.jpg"
import msql from "./Image/msql-removebg-preview.png"
import mongo from "./Image/mongo-removebg-preview.png"
import { Menu } from '../menu';

import Typewriter from 'typewriter-effect';
function Home() {
  useEffect(() => {
    Aos.init({

    });
  })
  return (
    <>
      <Menu />

      <section className='container-fluid home-img'>

        <div className='row'>

          <div className='col-lg-5 col-sm-12 homePage text-center mt-5 ' data-aos="fade-up" data-aos-duration="3000" >

            <h1> I am Saravan Prasath</h1>
            <h3><Typewriter options={{ strings: ['Full Stack Developer'], autoStart: true, loop: true, }} />  </h3>

            <span><img src={mern} className="w-25 mt-5 " />

            </span>
            <ul className='homeUl  d-flex justify-content-center column-gap-5 ms-5 mt-5'>
              <a href='https://github.com/saravanaprasathk'><li ><FontAwesomeIcon icon={faGithub} /></li> </a>
              <a href=''><li><FontAwesomeIcon icon={faInstagram} /></li></a>
              <a href='https://www.linkedin.com/in/saravana-prasath-k-875902247'><li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
            </ul>
          </div>
          <div className='col-lg-2 '>

          </div>
          <div className='col-lg-5 col-sm-12 homeMypic container' data-aos="fade-up" data-aos-duration="3000">
            <img src={saravan2} className='w-75 h-75  rounded-5 mt-5 p-5' />
          </div>
          <div className='col-lg-2'>

          </div>
        </div>
      </section>
      <section className='container-fluid'>
        <div className="row aboutPage ">
          <div className="col-lg-4 col-sm-6 p-5" data-aos="fade-up" data-aos-duration="3000">
            <img src={saravan} className=" rounded-circle w-75 " />
          </div>
          <div className='col-lg-2'>

          </div>
          <div className="col-lg-4 col-sm-6  " >
            <h3>About</h3><hr /><hr />
            <p className=" ">I am, being a big knowledge seeker and a graphic designer has got a stunning About me page that
              immediately shows if he is ready for the new projects including web & print design,
              as well as branding.Web developer or engineer who works with both the front and back ends of a
              website or application.Provide an end-to-end service, and can be involved in projects that
              involve databases and building user-facing websites
            </p>

          </div>
        </div>
      </section>
      <section className='container-fluid'>

        <div className="row  d-flex justify-content-evenly  p-5 EducationList ">
          <div className="card col-lg-3 col-sm-12 p-4  " data-aos="fade-up" data-aos-duration="3000">
            <div className="card-body">
              <span>



              </span>
              <h3>Higher Secondary Education Certificate</h3>
              <p>Govt Higher Secondary School</p>
              <h5> 60.%</h5>
              <h5>2019-2020</h5>
            </div>
          </div>
          <div className="card col-lg-3 col-sm-12 p-4 " data-aos="fade-up" data-aos-duration="3000">
            <div>

              <h3>Collage</h3>
              <p>Karpakam Academy of Higher Education</p>
              <h5> 79%</h5>
              <h5>2020-2023</h5>
            </div>
          </div>
          <div className="card col-lg-3 col-sm-12 p-4 mt-3" data-aos="fade-up" data-aos-duration="3000">
            <div className="card-body">

              <h3>Certificate Coures </h3>
              <p>KGISL Microw Collage</p>

              <h5>2023-july to October</h5>
            </div>
          </div>
        </div>

      </section>



      {/* Skill  */}

      <div className="row  d-flex justify-content-evenly  p-5 serList " >
        <div className="card col-lg-3 col-sm-12 p-4  " data-aos="fade-up" data-aos-duration="3000">
          <div className="card-body">
            <span >
              <FontAwesomeIcon icon={faSquareJs} className="text-warning" />
              <FontAwesomeIcon icon={faHtml5} className='me-5 ms-5' />
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>
            <h3>Front-end</h3>
            <p>A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app</p>
          </div>
        </div>
        <div className="card col-lg-3 cols-12 p-4 " data-aos="fade-up" data-aos-duration="3000">
          <div>
            <span>
              <FontAwesomeIcon icon={faJava} className="javaIcon me-5" />
              <FontAwesomeIcon icon={faNode} />
            </span>
            <h3>Back-end</h3>
            <p>Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers</p>
          </div>
        </div>
        <div className="card col-lg-3 cols-12 p-4 mt-3" data-aos="fade-up" data-aos-duration="3000">
          <div className="card-body">
            <span className='mb-5'>
              {/* <FontAwesomeIcon icon={faDatabase} fade className="text-primary"/> */}
              <img src={msql} height="100px" width="100px" className='me-3 ' />
              <img src={mongo} height="100px" width="100px" />
            </span>
            <h3>DataBase</h3>
            <p>Database software is used to create, edit, and maintain database files and records, enabling easier file and record creation, data entry, data editing, updating, and reporting. The software also handles data storage, backup and reporting, multi-access control, and security</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;