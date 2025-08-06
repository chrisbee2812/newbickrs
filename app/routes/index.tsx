import { useEffect, useState } from 'react'
import '../styles/index.css'

export default function App() {

 
    const texts = [
      <h2><span className="span1">Website Developer</span></h2>,
      <h2><span className="span1">Website Designer</span></h2>, 
      <h2><span className="span1">JavaScript Developer</span></h2>, 
      <h2><span className="span1">React Developer</span></h2>, 
      <h2><span className="span2">Father</span></h2>
    ]

    function textSwapper() {
      const [currentText, setCurrentText] = useState(texts[0]);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentText(prevText => {
            const currentIndex = texts.indexOf(prevText);
            const nextIndex = (currentIndex + 1) % texts.length;
            return texts[nextIndex];
          });
        }, 2500); // Change text every 4 seconds
        return () => clearInterval(intervalId);
      }, []);
      return currentText;
    }

    // console.log(__dirname)

  return (
    <main>
      <div className="home"> 
        <div className="homeh1">
          <h1>HI, I'M CHRIS</h1>
        </div>
        <div className="homeh2">
          {textSwapper()}
        </div>
        <div className="homeh3">
          <p></p>
        </div>
      </div>
    </main>
  )
}
