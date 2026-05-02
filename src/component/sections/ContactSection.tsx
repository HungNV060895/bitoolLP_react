

const ContactSection = () => {
    return (
        <>
            <section className="top-contact" >
                <div className="inner">
                    <h2 className="c-ttl__01 mbsp-20" id="block-07">
                        <span className="c-ft--en">Contact</span>
                        <span className="c-ft--jp">お問い合わせ</span>
                    </h2>
                    <h3 className="heading-note mbpc-62 mbsp-42">導入のご検討・ご相談はこちらから</h3>
                    <div className="contact-block">
                        <div className="contact-block__item">
                            <h4 className="contact-block__ttl">PC</h4>
                            <p>お問い合わせご相談</p>
                            <a href="https://www.dataknowledge.jp/contact.html" target="_blank" className="c-btn__01 c-btn__01--blue">お問い合わせフォーム</a>
                        </div>
                        <div className="contact-block__item">
                            <h4 className="contact-block__ttl">PHONE</h4>
                            <p className="mbsp-5">お電話でのご相談</p>
                            <a href="tel:0647085795" className="contact-block__tel c-ft--en">06-4708-5795</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection;