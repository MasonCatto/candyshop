import './Carousel.css';


export const Carousel = ({data}) =>{
    console.log(data);
    return (
        <div>
            {data.map((slide, idx) => {
                return <img src={slide.src} alt={slide.alt} key={idx}/>;
            })}
        </div>
    );
}   
