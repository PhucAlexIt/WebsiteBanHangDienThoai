
import { useEffect, useRef } from 'react';

const BannerComp = () => {
    const slidesRef = useRef(null);
    let currentIndex = 0;

    useEffect(() => {
        const slideElements = slidesRef.current?.querySelectorAll('.slide');
        const slideCount = slideElements?.length || 0;

        const goToSlide = (index) => {
            if (slidesRef.current) {
                slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
            }
            currentIndex = index;
        };

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            goToSlide(currentIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="block_top" id="block_top">

                <div className="top_slide">
                    <div className="slides" style={{ transform: 'translateX(-100%)' }}>

                        <img className="slide" src="./src/assets/images/slide/slide_3_img.jpeg" />
                        <img className="slide" src="https://theme.hstatic.net/200000796751/1001266995/14/slide_3_img.jpg?v=69" />
                        <img className="slide" src="https://theme.hstatic.net/200000796751/1001266995/14/slide_2_img.jpg?v=66" />

                        <img className="slide" src="./src/assets/images/slide/slide_1_img.jpeg" />



                    </div>
                    <div className="close_slides" onclick="closeSlider()">
                        <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>

            </div>
        </>

    )


}
export default BannerComp