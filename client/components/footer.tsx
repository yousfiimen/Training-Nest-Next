import "@/styles/globals.css";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-background-footer">
      <div className="flex flex-wrap justify-around p-4">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          {/* Contenu du premier bloc */}
          <h2 className="text-lg font-bold customH2">Contact Us</h2>
          <ul>
              <li>
                <a href="#"> Welcome to my web site </a>
              </li>
              <li>
                <a href="#"> Imen YOUSFI</a>
              </li>
              <li>
                <a href="#"> +216 40 571 725 </a>
              </li>
              <li>
                <a href="#">imenyousfi44@gmail.com </a>
              </li>
          </ul>
          <ul className="flex">
          <li>
              <a href="#">
              <BsFacebook />
              </a>
              </li>
              <li>
                <a href="#">
                <BsInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                <BsLinkedin />
                </a>
              </li>
            </ul>

        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          {/* Contenu du deuxième bloc */}
          <h2 className="text-lg font-bold customH2">Services</h2>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Nos services </a>
            </li>
            <li>
              <a href="#"> Contact </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          {/* Contenu du troisième bloc */}
          <h2 className="text-lg font-bold customH2">Others</h2>
          <ul>
            <li>
              <a href="#"> Other links </a>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="text-center sub-footer">
        <p> Copy Right Imen YOUSFI </p>
      </div>
    </footer>
  );
};

export default Footer;
