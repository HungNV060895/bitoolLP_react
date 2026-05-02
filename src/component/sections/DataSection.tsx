



const DataSection = () => {
    return (
        <>
            <section className="top-data">
                <div className="inner">
                    <div className="data-custom">
                        <div className="data-list js-data-list">
                            <div className="data-list__item">
                                <h3 className="data-list__ttl">
                                    <span>知識がなくても<br />データを活用してみたい！</span>
                                </h3>
                                <div className="data-list__heading">
                                    <h4 className="data-list__heading-ttl">現場担当</h4>
                                    <div className="data-list__heading-img">
                                        <picture>
                                            <source srcSet="../../assets/img/webp/index/item-01.webp" type="image/webp" />
                                            <img src="../../assets/img/index/item-01.png" alt="現場担当" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="data-list__ct">
                                    <p>データ活用が自在にできたら、とは思うけれど、現状ではスキルを習得するまでに時間が必要。もっと簡単に利用できるツールなら…。</p>
                                </div>
                                <div className="data-list__note">
                                    <h4 className="data-list__note-ttl mbpc-8">使いこなせない問題を解消！</h4>
                                    <p>●直感的な操作が可能だから、初心者も操作しやすく、<strong>必要に応じた情報入手が可能に。</strong></p>
                                    <p>●SQLなどの言語は必要なく、<br className="pc" />ノーコードで操作OK。<strong>誰もが使い<br className="pc" />こなせて、パワーユーザーに。</strong></p>
                                </div>
                            </div>
                            <div className="data-list__item">
                                <h3 className="data-list__ttl">
                                    <span>属人化を解消したい！</span>
                                </h3>
                                <div className="data-list__heading">
                                    <h4 className="data-list__heading-ttl">総務担当</h4>
                                    <div className="data-list__heading-img">
                                        <picture>
                                            <source srcSet="../../assets/img/webp/index/item-02.webp" type="image/webp" />
                                            <img src="../../assets/img/index/item-02.png" alt="総務担当" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="data-list__ct">
                                    <p>担当者が退職などでいなくなると、それまでのデータがメンテできずに結局よくわからない状態に。ITスキルの個人差が激しくて、どうにも…。</p>
                                </div>
                                <div className="data-list__note">
                                    <h4 className="data-list__note-ttl">特定のスタッフに<br />頼らなくていい環境に</h4>
                                    <p>●他ユーザー作成の表・グラフをナレッジとして活用すれば、<strong>クライアントへの<br className="pc" />説明資料もラクラク作成。</strong></p>
                                    <p>●資料をData Knowledge内で統一する<br className="pc" />ことで<strong>属人化が解消できる。</strong></p>
                                </div>
                            </div>
                            <div className="data-list__item">
                                <h3 className="data-list__ttl">
                                    <span>セキュリティ対策が心配！</span>
                                </h3>
                                <div className="data-list__heading">
                                    <h4 className="data-list__heading-ttl">情報システム担当</h4>
                                    <div className="data-list__heading-img">
                                        <picture>
                                            <source srcSet="../../assets/img/webp/index/item-03.webp" type="image/webp" />
                                            <img src="../../assets/img/index/item-03.png" alt="情報システム担当" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="data-list__ct">
                                    <p>情報の共有を進めていくと、セキュリティの確保が懸念点。BIツールの場合、アクセス権限の設定が難しいのでは？</p>
                                </div>
                                <div className="data-list__note">
                                    <h4 className="data-list__note-ttl mbpc-8">万全のセキュリティ体制を実現</h4>
                                    <p>●権限管理やアクセス権の設定といった<strong>管理機能の設定が容易。</strong>操作ログや<br className="pc" />アクセスログの管理機能も充実。
                                    </p>
                                    <p>●セキュリティ要件や運用ルールに<br className="pc" />基づいての導入方法が可能となり、<br className="pc" /><strong>情報漏洩のリスクは激減。</strong></p>
                                </div>
                            </div>
                        </div>
                        <ul className="custom-dots js-custom-dots sp">
                            <li className="custom-dots__item">現場担当</li>
                            <li className="custom-dots__item">総務担当</li>
                            <li className="custom-dots__item">情報システム担当</li>
                        </ul>
                    </div>

                    <h2 className="data-ttl" >
                        <small>現場で必要なデータは、<br className="sp" />現場レベルで簡単に作成・活用。</small>
                        <span className="c-ft--en c-fc--blue">Data Knowledge</span>という選択
                    </h2>
                    <div className="data-block">
                        <div className="data-block__ct">
                            <h3 className="data-block__ct-ttl">スキルを問わず<br />全社員のデータ活用を実現<br />レベルアップをサポート。</h3>
                            <p>一般的なBIツールに比べ、レポート機能を重視しています。特定のスキルを持った方だけでなく、普段データ活用に縁がなく、スキルも持っていない。そんな方でも少し手を伸ばせばデータ活用が可能となる。そんなBIツールを目指しています。</p>
                        </div>
                        <div className="data-block__img">
                            <picture>
                                <source srcSet="../../assets/img/webp/index/data-img.webp" type="image/webp" />
                                <img src="../../assets/img/index/data-img.png" alt="スキルを問わず全社員のデータ活用を実現レベルアップをサポート。" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DataSection;