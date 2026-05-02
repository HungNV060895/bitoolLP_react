import IMAGES from '@/helper/dataImages';
const HeroSection = () => {
    return (
        <>
            <section className="top-mv">
                <div className="mv-img">
                    <picture>
                        <source srcSet={IMAGES.imgMVSPWebp} media="(max-width:834px)" type="image/webp"/>
                        <source srcSet={IMAGES.imgMVSP} media="(max-width:834px)"/>
                        <source srcSet={IMAGES.imgMVWebp} type="image/webp"/>
                        <img src={IMAGES.imgMV} alt="ビギナーからエキスパートまで、使いこなせるBIを求めるすべての人に。Data Knowledge"/>
                    </picture>
                </div>
                <h1 className="mv-heading">
                    <picture>
                        <source srcSet={IMAGES.imgHeadingMVSPWebp} media="(max-width:834px)" type="image/webp"/>
                        <source srcSet={IMAGES.imgHeadingMVSP} media="(max-width:834px)"/>
                        <source srcSet={IMAGES.imgHeadingMVWebp} type="image/webp"/>
                        <img src={IMAGES.imgHeadingMV} alt="ビギナーからエキスパートまで、使いこなせるBIを求めるすべての人に。Data Knowledge"/>
                    </picture>
                </h1>
            </section>
            <section className="top-note">
                <p>30日間無料トライアルで「使える！」を実感</p>
                <a href="https://www.dataknowledge.jp/trial.html" target="_blank" className="top-note__btn">今すぐ申し込む</a>
            </section>
        </>
    )
}

export default HeroSection;