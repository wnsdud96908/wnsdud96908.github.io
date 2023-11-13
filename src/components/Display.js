import '../App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';

export default function Display() {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Projects />
    </div>
  );
}
