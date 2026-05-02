import IMAGES  from '@helper/dataImages';

console.log(IMAGES.logoFooterWebp);
const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <a href="/" className="footer-logo">
                        <picture>
                            <source srcSet={IMAGES.logoFooterWebp} type="image/webp"/>
                            <img src={IMAGES.logoFooter} alt="X UIS" />
                        </picture>
                    </a>
                    <p>
                        株式会社クロスユーアイエス
                        <small>大阪市中央区南船場4-2-4</small>
                    </p>
                </div>
                <div className="copyright">
                    Copyright &copy; 2026 CROSS UIS co.,ltd. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;