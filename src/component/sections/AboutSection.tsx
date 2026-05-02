
const AboutSection = () => {
    return (
        <>
            <section className="top-about" id="block-01">
                <div className="inner">
                    <div className="about-block">
                        <div className="about-block__ct ">

                            <h2 className="about-block__ttl">それぞれの人に、<br className="sp" />それぞれの機能と操作性。<br />「BIのハードル」を感じさせないBI。</h2>
                            <p>全スタッフが自社データを活用できる環境を実現するために設計されたBIツール、それがData Knowledgeです。<br className="pc"/>データの結合・抽出・加工はドラッグ&amp;ドロップなど簡単なUI操作で可能。<br/>ユーザーのレベルにかかわらず、使いこなせるBIツールとして導入いただけます。</p>
                                <div className="about-block__note">Data Knowledgeで変わる、<br className="sp" />業務のカタチ</div>
                                <div className="about-block__item about-block__item--01">
                                    <picture>
                                        <source srcSet="../../assets/img/webp/index/about-item-01.webp" type="image/webp" />
                                        <img src="../../assets/img/index/about-item-01.png" alt="それぞれの人に、それぞれの機能と操作性。「BIのハードル」を感じさせないBI。" />
                                    </picture>
                                </div>
                                <div className="about-block__item about-block__item--02">
                                    <picture>
                                        <source srcSet="../../assets/img/webp/index/about-item-02.webp" type="image/webp" />
                                        <img src="../../assets/img/index/about-item-02.png" alt="それぞれの人に、それぞれの機能と操作性。「BIのハードル」を感じさせないBI。" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default AboutSection;