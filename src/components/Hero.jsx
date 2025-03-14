import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10 px-6 max-w-5xl mx-auto">
            {/* Avatar - Larger and positioned on the left on larger screens */}
            <div className="w-40 h-40 md:w-56 md:h-56 mb-6 md:mb-0 md:mr-10 flex-shrink-0">
                <img
                    src="/avatar.jpg" /* Update this to your actual image path */
                    alt="Your Name"
                    className="w-full h-full rounded-full border-4 border-gray-700 shadow-lg"
                />
            </div>

            {/* Text - Moves to the right on larger screens */}
            <div className="max-w-lg">
                <h1 className="text-4xl font-bold text-white">Zarrar Khan</h1>
                <p className="mt-2 text-gray-400">
                    Hi, I'm a passionate developer specializing in modern web applications. I love
                    building sleek, interactive, and high-performance digital experiences.
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex space-x-6 justify-center md:justify-start">
                    <a
                        href="https://scholar.google.com/citations?user=YOUR_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-2xl hover:text-[#DAA520] transition"
                    >
                        <SiGooglescholar />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/YOUR_PROFILE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-2xl hover:text-[#DAA520] transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="text-gray-300 text-2xl hover:text-[#DAA520] transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
