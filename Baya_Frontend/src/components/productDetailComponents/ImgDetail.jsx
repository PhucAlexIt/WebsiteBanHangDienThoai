

const ImgDetail = (props) => {
    return (
        <>
            <div className="img_slider  bg-while alpha">
                <div className="img_slider-main">


                    <div className="img_control-previous">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="img_control-next">
                        <i className="fa-solid fa-chevron-right"></i>

                    </div>

                    <img className="img-feature moving-img " src={props.img} alt="img" />
                </div>

            </div>
        </>
    )

}
export default ImgDetail