import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <footer className="footer bg-slate-100 p-10">
                <aside>
                    <a className="px-3 py-1 rounded-2xl  font-semibold normal-case text-xl">TaskMaster</a>
                    <p>Copyright © 2023 <br /> All right reserved by <a className="text-blue-700" href="https://silver-boba-52c90d.netlify.app/">Shimu</a> </p>
                    
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href="https://www.linkedin.com/in/shamima-akter-shimu/" className='mx-3'><FaLinkedin /></a>
                    <a href="https://github.com/shimu-7"><FaGithub /></a>
                    <a href="https://silver-boba-52c90d.netlify.app/"><FaPortrait /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;