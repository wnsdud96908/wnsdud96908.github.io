import '../App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-none  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? 'text-blue-600 ' : ''
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <a href="/#">Home</a>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? 'text-blue-600 ' : ''
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <a href="#about"> About Me</a>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? 'text-blue-600 ' : ''
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <a href="#projects">Projects</a>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          onClick={() =>
            window.open('https://github.com/wnsdud96908', '_blank')
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%EC%9D%B4-22a70a289/',
              '_blank'
            )
          }
        >
          {' '}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://www.facebook.com/profile.php?id=100007242185110',
              '_blank'
            )
          }
        >
          <FacebookIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
