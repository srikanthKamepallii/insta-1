import './profileslide.component.css';
import s1 from '../../assets/images/slide1.png';
import s2 from '../../assets/images/slide2.png';
import s3 from '../../assets/images/slide3.png';
import s4 from '../../assets/images/slide4.png';
import s5 from '../../assets/images/slide5.png';
import s6 from '../../assets/images/slide6.png';
import s7 from '../../assets/images/slide7.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function ProfileSlide() {
    function Arrowright(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                <BsCaretRightFill></BsCaretRightFill>
            </div>

        );
    }

    function Arrowleft(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                <BsCaretLeftFill></BsCaretLeftFill>
            </div>

        );
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // Screen width at which this rule applies
              settings: {
                slidesToShow: 6, // Number of slides for mobile view
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600, // Another breakpoint example (for smaller screens if needed)
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ],
      
        nextArrow: <Arrowright></Arrowright>,
        prevArrow: <Arrowleft></Arrowleft>

    };
    const [story, setstory] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4200/storyathome`)
            .then((res) => {
                setstory(res.data)
            });
    }, []);
    return (
        <div className='slider'>
            <div style={{ padding: 20 }}>
                {/* <div>
                <img src={u1} className='user1' />
            </div> */}

                <Slider {...settings}>
                    {
                        story && story.map((item) =>
                            <div>

                                <div>
                                    <img src={item.storyimg} className='s1' />
                                    <span className='stext'>{item.username}</span>
                                </div>
                            </div>
                        )
                    }
                    <div>
                        <div>
                            <img src={s2} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={s3} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={s4} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={s5} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={s6} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={s7} className='s1' />
                            <span className='stext'>Name</span>
                        </div>
                    </div>
                </Slider>


            </div>
        </div>
    )
}