



const CtaSection = () => {
    return (
        <>
            <section className="top-cta">
                <div className="cta-block">
                    <div className="cta-block__ct">
                        <div className="cta-block__ct-box">
                            <h3 className="cta-block__ct-ttl">
                                <small>30日間無料トライアルで「使える！」を実感</small>
                                すべての機能を無料で<br />お試しいただけます。
                            </h3>
                            <div className="cta-block__img sp">
                                <picture>
                                    <source srcSet="../../img/webp/index/cta-img-sp.webp" type="image/webp" />
                                    <img src="../../img/index/cta-img-sp.jpg" alt="30日間0円" />
                                </picture>
                                <div className="cta-block__ct-note">
                                    <picture>
                                        <source srcSet="../../img/webp/index/cta-note.webp" type="image/webp" />
                                        <img src="../../img/index/cta-note.png" alt="30日間0円" />
                                    </picture>
                                </div>
                            </div>
                            <p>実際の業務データを使って、すべての機能をそのまま体験。<br className="pc" />レポート作成、データ出力、ポータル画面など、業務に必要な機能をフルで試して、「本当に現場で役立つか」をぜひご確認ください。</p>
                            <a href="https://www.dataknowledge.jp/contact.html" target="_blank" className="c-btn__01">今すぐ申し込む</a>
                        </div>
                        <div className="cta-block__ct-sale">
                            <picture>
                                <source srcSet="../../img/webp/index/note-04.webp" type="image/webp" />
                                <img src="../../img/index/note-04.png" alt="30日間0円" />
                            </picture>
                        </div>
                        <div className="cta-block__ct-note pc">
                            <picture>
                                <source srcSet="../../img/webp/index/cta-note.webp" type="image/webp" />
                                <img src="../../img/index/cta-note.png" alt="30日間0円" />
                            </picture>
                        </div>
                    </div>
                    <div className="cta-block__img pc">
                        <picture>
                            <source srcSet="../../img/webp/index/cta-img.webp" type="image/webp" />
                            <img src="../../img/index/cta-img.jpg" alt="30日間0円" />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaSection;