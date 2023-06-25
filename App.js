import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './styles.css'

const images = [
    "https://images.pexels.com/photos/11061259/pexels-photo-11061259.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/16839588/pexels-photo-16839588/free-photo-of-newlywed-woman-covering-face-from-the-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/9397725/pexels-photo-9397725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/16807324/pexels-photo-16807324/free-photo-of-fashion-people-woman-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/17058485/pexels-photo-17058485/free-photo-of-young-woman-with-tattoos-posing-outdoors-in-summer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
]


function App() {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    return (
        <>
            <h1>Image Crousel</h1>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>⬅</div>
                <div className="right-arrow" onClick={nextSlide}>⮕</div>
                {images.map((image, index) => current === index && (
                    <div key={index} className="slide">
                        <img src={image} alt="" />
                    </div>
                )
                )}
            </div>
        </>
    );
}


export default App;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);