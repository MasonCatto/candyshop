import styles from './carousel.module.css';
import {useState} from 'react';

export const Carousel = ({data}) =>{
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // const slideStyles ={
    //     width: '100%',
    //     height: '100%',
    //     // borderRadius: '10px',
    //     backgroundPosition: 'center', 
    //     // backgroundSizexport default AdContainer;e: 'cover',
    //     // transition: 'transform 300ms ease-in-out',
    //     backgroundImage: `url(${data[currentIndex].url})`,

    // }
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '55px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '55px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer'
    }
    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '25px',
    }
    // const dotStyles = {
    //     margin: '0 3px',
    //     cursor: 'pointer',
    //     fontSize: '20px'
    // }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === data.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className="Carousel">
            {/* {data.map((slide, idx) => {
                return <img src={slide.src} alt={slide.alt} key={idx} className="Slide"/>;
            })} */}
            <div style={leftArrowStyles} onClick={goToPrevious}> left </div>
            <div style={rightArrowStyles}onClick={goToNext}> right</div>
            <div className={styles.slideStyles}></div>
            <div style={dotContainerStyles}>
                {data.map((slide, slideIndex) => (
                <div 
                className={`${styles.dotStyles} ${slideIndex === currentIndex ? 'active' : ''}`}
                key={slideIndex} 
                onClick={() => goToSlide(slideIndex)}>
                    ●
            </div>
            ))}
            </div>
        </div>
    );
}   
