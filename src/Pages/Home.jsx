import Navbar from "../Components/Common/Navbar";
import image1 from "../Assets/home-1.png"
import image2 from "../Assets/home-2.png"
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import Footer from "../Components/Common/Footer";
import Particle from "../Components/Common/Particle";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="">
        <Navbar/>
        <Particle/>
        {/* section 1 */}
        <div className="mx-auto w-11/12 h-full flex items-center justify-between mt-[90px]">
          <div className="text-white text-xl font-bold flex flex-col gap-10 ">
            <p className="text-[3em]">Hi There!{"  "}<span className="wave">👋🏻</span></p>
            <p className="text-[3em] mb-8 mt-6">I'M <span className="text-green-400">RAM SWAROOP SAHANI</span></p>
            <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'Software Developer',
              1000,
              'MERN Stack Developer',
              1000,
              'Competitive Programmer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
          </div>
          <div className="rounded-md w-fit m-10 bg-white bg-opacity-20">
            <img src={image1} alt="" height="400px" width="400px" />
          </div>
        </div>
        {/* section 2 */}
        <div className="flex text-white h-full mx-auto w-11/12 mt-[310px]">
            <div>
              <p className="text-[3em] text-center">LET ME <samp className="text-green-400">INTRODUCE</samp> MYSELF</p>
              <div className="flex flex-col gap-10 mt-10  text-xl max-w-[1024px]">
                <p>I thrive on turning ideas into reality and crafting solutions that leave a lasting impact.</p>
                <p>I am fluent in classics like <span className="text-green-400">C++, Javascript and Python.</span></p>
                <p>My field of Interest's are building new  <span className="text-green-400">Web Technologies and Products</span> and also in areas related to <span className="text-green-400">Blockchain.</span></p>
                <p>Whenever possible, I also apply my passion for developing products with <span className="text-green-400">Node.js</span> and <span className="text-green-400">Modern Javascript Library and Frameworks</span>  like <span className="text-green-400">React.js and Next.js</span></p>
              </div>
            </div>
            <div className="rounded-md w-fit m-10 bg-white bg-opacity-20">
              <img src={image2} alt="logo" height="520px" width="520px" className=" object-fill"/>
            </div>
        </div>
        {/* find me section */}
        <div className="text-white mt-32 flex flex-col items-center justify-center gap-2">
          <p className="text-[3em]">FIND ME ON</p>
          <p className="text-md">Feel free to <span className="text-green-400">connect</span> with me</p>
          <div className="flex gap-5 text-2xl mt-2">
            <div className="rounded-full hover:bg-green-400 p-3 ">
              <Link target="_blank" to="https://github.com/ram-ss">
              <AiFillGithub/>
              </Link>
            </div>
            <div className="rounded-full hover:bg-green-400 p-3 ">
              <Link target="_blank" to="https://www.linkedin.com/in/ram-swaroop-sahani-642aba225/">
              <FaLinkedinIn/>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
};

export default Home