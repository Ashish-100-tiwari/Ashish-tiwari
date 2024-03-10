"use client"
import Image from 'next/image';
import project from './assests/project.png'
import experience from './assests/experience.png'
import leetcode from './assests/leetcode.png'
import linkedin from './assests/linkedin.png'
import mail from './assests/gmail.png'
import network from './assests/network.png'
import settings from './assests/settings.png'
import whatsapp from './assests/whatsapp.png'
import software from './assests/software.png'
import github from './assests/git.png'
import me from './assests/me.jpg'
import python from './assests/python.png'
import react from './assests/react.png'
import node from './assests/node.png'
import c from './assests/c.png'
import js from './assests/js.png'
import css from './assests/css-3.png'
import ai from './assests/ai.png'
import docker from './assests/docker.png'
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showNavBar, setShowNavBar] = useState(false);
  const introRef=useRef(null);
  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
    if (!showNavBar && introRef.current) {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <button
        className=" text-white p-2 rounded-md fixed  left-5"
        onClick={toggleNavBar}
      >
        <Image className=' bg-white rounded-full transition-transform transform hover:scale-150'
        src={leetcode}
        width={50}
        height={50}
        />
      </button>
      <section id="intro" ref={introRef} className=' min-h-full bg-yellow-400'>
            <div className="flex">
              <nav className={`bg-white text-white w-28 p-4 ${showNavBar ? '' : 'hidden'}`}>
                <a href="#projects" className="block p-2 mt-14 hover:bg-gray-400 hover:rounded-lg transition-transform transform hover:scale-105">
                  <Image
                  src={project}
                  width={100}
                  height={100}
                  className=' bg-white rounded-lg'
                  />
                </a>
                <a href="#experience" className="block p-2 mt-10 hover:bg-gray-400 hover:rounded-lg transition-transform transform hover:scale-105">
                  <Image
                  src={experience}
                  alt=''
                  width={100}
                  height={100}
                  className=' bg-white rounded-lg'
                  />
                </a>
                <a href="#tools" className="block p-2 mt-10 hover:bg-gray-400 hover:rounded-lg transition-transform transform hover:scale-105">
                  <Image
                  src={settings}
                  alt='Tools'
                  width={100}
                  height={100}
                  className=' bg-white rounded-lg'
                  />
                </a>
                <a href="#footer" className="block p-2 mt-10  hover:bg-gray-400 hover:rounded-lg transition-transform transform hover:scale-105">
                  <Image
                  src={network}
                  alt='social media'
                  width={100}
                  height={100}
                  className=' bg-white rounded-lg'
                  />
                </a>
              </nav>
            {/* Main Content */}
            <div className="flex-1 p-8 ">
              {/* Introduction Section */}
              <div  className="flex justify-center items-center">
            
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }} className=' mt-8 mr-6'
                >
                 <Image
                  src={me}
                  alt="Ashish Tiwari"
                  width={300}
                  height={300}
                  className="rounded-full transition-transform transform hover:scale-105 mx-auto max-w-full h-auto"
                />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }} 
                 className='m-4'>
                    <motion.h1 className="text-5xl text-white font-bold">ASHISH TIWARI</motion.h1>
                    <motion.p className="text-white text-xl mt-5 ml-2">
                    Web Developer | Data Science | Machine Learning | Ex- Celebal Intern
                    </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
      </section>

      <section id="experience" className="min-h-screen flex flex-col items-center bg-blue-500">
        <div className="container mx-auto mt-10 p-4 lg:p-8">
        <h2 className="text-4xl font-bold text-white mb-10">Experience</h2>
          {/* Experience items */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            {/* Experience Item 1 */}
            <div className="flex items-center lg:w-1/2 transition-transform transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-blue-500 mb-2">Data Analysis</h3>
                <p className="text-gray-800">FICE</p>
                <p className="text-gray-500 text-justify">Worked on Customer attrition modeling predicts and understands churn. Criminal Face Detection System, a Python GUI, features account creation, training, detection, and test pages for comprehensive criminal face recognition.</p>
                <p className="text-gray-700">February 2022–June 2022</p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex items-center lg:w-1/2 transition-transform transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-blue-500 mb-2">Data Science</h3>
                <p className="text-gray-800">Celebal Technologies</p>
                <p className='text-gray-500 text-justify'>Worked on a variety of projects in different domains of data science, including machine learning, deep learning, computer vision, and natural language processing (NLP). Used Python libraries such as NumPy, Pandas, Seaborn, and Matplotlib for data analysis.</p>
                <p className="text-gray-700">May 2023- July 2023</p>
              </div>
            </div>
          </div>
          {/* exp-2 */}
          <div className=" mt-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            {/* Experience Item 1 */}
            <div className="flex items-center lg:w-1/2 transition-transform transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-blue-500 mb-2">Subject Matter Expert AI/ML</h3>
                <p className="text-gray-800">House of Couton Private Limited</p>
                <p className="text-gray-500 text-justify">Conducted research and analysis in healthcare, technology, and marketing domains for over 10+ projects. Expertise in data-driven insights. Utilized statistical tools, produced actionable reports, and delivered valuable recommendations.</p>
                <p className="text-gray-700">July 2023- September 2023</p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex items-center lg:w-1/2 transition-transform transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-blue-500 mb-2">Full Stack Developer</h3>
                <p className="text-gray-800">DesignScript</p>
                <p className='text-gray-500 text-justify'>As a Full Stack Developer, I played a pivotal role in elevating online presence and customer engagement. I designed, developed, and maintained a dynamic website showcasing diverse projects, facilitating seamless client connections.</p>
                <p className="text-gray-700">November 2023- February 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section id="projects" className="min-h-screen flex items-center bg-lime-400">
        <div className="container mx-auto p-8">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-lime-600 mb-2">Whatsapp Chat Analyzer</h3>
              <p className="text-gray-500 text-justify">It helps users understand various aspects of their WhatsApp conversations, such as message frequency, word count, most active participants, popular emojis, and common topics of discussion. Chat Analyzer include: - Message Statistics, Participant Analysis, Word Frequency and Clouds, Emojis and Media Analysis and Conversation Trends</p>
              <p className="text-gray-700">Tech used: - Jupyter Notebook, Streamlit and Python</p>
              <div className="mt-4">
                <a href="https://github.com/Ashish-100-tiwari/Whatsapp-chat-Analyzer" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Link</a>
                <span className="mx-2">•</span>
                <a href="https://ashish-100-tiwari-whatsapp-chat-analyzer-app-sn2r40.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Link</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-lime-600 mb-2">Dukan Web App</h3>
              <p className="text-gray-500 text-justify">Full-featured eCommerce MERN stack web app with user authentication, product management, shopping cart, payment integration, and responsive design. It has some functionality like Login/Sign out, add to cart, User/admin authentication, Admin dashboard. Some features Backend Error Handling, Search, Filter & Pagination, Payment using Stripe.</p>
              <p className="text-gray-700">Tech used: - React, Express, Mongodb, NodeJs</p>
              <div className="mt-4">
                <a href="https://github.com/Ashish-100-tiwari/Dukan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Link</a>
                <span className="mx-2">•</span>
                <a href="https://dukan-backend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Link</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-lime-600 mb-2">Book Recommendation</h3>
              <p className="text-gray-500 text-justify">The website consists of two pages. On the home page, a recommender system based on popularity is implemented. The second page utilizes Collaborative Filtering, a widely used approach in Recommender Systems, to suggest books. </p>
              <p className="text-gray-700">Tech used: - HTML, CSS, Jupyter Notebook, Flask, and Python</p>
              <div className="mt-4">
                <a href="https://github.com/Ashish-100-tiwari/Book-Recommendation-website" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Link</a>
                <span className="mx-2">•</span>
                <a href="https://book-recommender-j328.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tools */}
      <section id="tools" className="min-h-screen flex flex-col items-center bg-green-600">
  <div className="container mx-auto p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-8">Tools and Technologies</h2>

    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={python} alt="Python" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">Python</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={node} alt="Node.js" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">Node.js</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={js} alt="Node.js" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">JavaScript</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={docker} alt="Docker" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">Docker</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={c} alt="Docker" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">c++</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={css} alt="Docker" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">CSS</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={ai} alt="Docker" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">AI/ML</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Image src={react} alt="Docker" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-600 mb-2">React</h3>
      </div>
    </div>
  </div>
      </section>

      {/* Section 5: Contact Me */}
      <section id="footer" className="min-h-screen flex items-center bg-red-500">
      <div className="container mx-auto p-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          

          <div className="flex mt-4 md:mt-0">
          <div className="mb-4 md:mb-0">
            <Image src={me} width={80} height={80} alt="Logo" className="mx-4 rounded-full" />
            
          </div>
            <a href="https://github.com/Ashish-100-tiwari" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              <Image
              src={github}
              width={80}
              height={80}
              />
            </a>

            <a href="https://www.linkedin.com/in/ashish-tiwari-ds/" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              <Image
              src={linkedin}
              width={80}
              height={80}
              />
            </a>
            <a href="tel:7982015467" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              <Image src={whatsapp} alt="WhatsApp" width={80} height={80} />
            </a>

            <a href="mailto:ashishtiwari1332@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              <Image src={mail} alt="Email" width={80} height={80} />
            </a>

          </div>
        </div>
        <a href="#top" className="text-white fixed right-4 bottom-4 hover:text-gray-300 transition-transform transform hover:scale-150">
          <button className=" text-white px-4 py-2 rounded-md mt-2">Go to Top</button>
        </a>
        <p className="text-white mt-4">&copy; 2024 Your Portfolio. All rights reserved.</p>
      </div>
    </section>

    </div>
  );
}
