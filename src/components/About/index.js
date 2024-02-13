import '../../App.css';
import DownloadIcon from '@mui/icons-material/Download';
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from '@lottiefiles/lottie-player';

export default function About() {
  const getDate = () => {
    var dob = new Date('01/21/2003');
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={'slide-down'}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className=" mt-14 flex flex-auto w-64 gap-6">
          <div className="poto">
            <img src="/img.jpg" alt="증명사진" />
          </div>
          <div className="content">
            <p>이름: 이준영</p>
            <p>나이: 27세</p>
            <p>학력: 대구공업대학교 전자정보과 졸업</p>
            <p>
              수료내역: (산대특)Node.js를 활용한 백&프론트 웹개발자 양성과정
              수료(2023-01-30 ~ 2023-07-28)
            </p>
            <p>자격증: 정보처리산업기사</p>
          </div>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={'slide-left'}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: '350px' }}
            />
          </div>
          {/* <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require('../../assets/files/Daniel Resume.pdf')}
              download={"Dani'sResume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button> */}
        </div>
      </div>
      <div className="text-3xl font-bold py-3">My Skills</div>
      <div>
        <div className="MySkillImage">
          <img
            className="ml-8"
            src="/590px-Node.js_logo.svg.png"
            alt="node.js"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/React.jpeg"
            alt="react"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/Html1.svg"
            alt="html"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/javascript.png"
            alt="javascript"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/Mysql.svg"
            alt="mysql"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/Linux.webp"
            alt="linux"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/ts_image.png"
            alt="typescript"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/AWS.png"
            alt="AWS"
            width={'100px'}
            height={'100px'}
          />
          <img
            className="ml-8"
            src="/docker.webp"
            alt="docker"
            width={'100px'}
            height={'100px'}
          />
        </div>
      </div>
    </div>
  );
}
