import { useRef } from 'react';
import { useConsideringTabs } from '@/hooks/useConsideringTabs';
import { useSwipe } from '@/hooks/useSwipe';
import { useEqualHeight } from '@/hooks/useEqualHeight';
import { MAIN_TABS } from '@helper/dataConsidering';
import IMAGES from '@/helper/dataImages';
import SubTabConsidering from '@ui/subTabConsidering';

const ConsideringSection = () => {
    const {
        currentStep,
        mainIndex,
        goPrev,
        goNext,
        handleMainTabClick,
        handleSwipe,
    } = useConsideringTabs();


	const containerRef = useRef<HTMLDivElement>(null);
	useEqualHeight(containerRef, '.considering-block__item');

    const { onTouchStart, onTouchEnd } = useSwipe({
        onSwipeLeft: () => handleSwipe('left'),
        onSwipeRight: () => handleSwipe('right'),
    });
    return (
        <>
            <section className="top-considering" id="block-04">
                <div className="inner">
                    <h2 className="c-ttl__01 c-ttl__01--white">
                        <span className="c-ft--en">For those&nbsp;<br className="sp" />considering</span>
                        <span className="c-ft--jp">導入をご検討の方へ</span>
                    </h2>
                    <p className="heading-note c-fc--white mbpc-95 ">
                        データ作成とナレッジ共有に特化、<br className="sp" />最前線で実力を発揮！
                    </p>
                    <div className="considering-block">
                        <ul className="considering-block__heading">
                            {
                                MAIN_TABS.map((tab, index) => (
                                    <li
                                        key={index}
                                        className={`considering-block__heading-tab ${currentStep === index ? 'is-active' : ''}`}
                                        data-main={index}
                                        role="tab"
                                        aria-selected={currentStep === index ? 'true' : 'false'}
                                        onClick={() => handleMainTabClick(index)}
                                    >
                                        <span>{tab.label}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div ref={containerRef} className="considering-block__ct" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                            <div className="considering-block__ct-btn considering-block__ct-btn--prev" onClick={goPrev}>
                                <picture>
                                    <source srcSet="../../assets/img/webp/common/prev.webp" type="image/webp" />
                                    <img src={IMAGES.swiperPrev} alt="prev" />
                                </picture>
                            </div>
                            <div className="considering-block__ct-btn considering-block__ct-btn--next" onClick={goNext}>
                                <picture>
                                    <source srcSet="../../assets/img/webp/common/next.webp" type="image/webp" />
                                    <img src={IMAGES.swiperNext} alt="next" />
                                </picture>
                            </div>
                            <div className={`considering-block__item ${mainIndex === 0 ? 'is-active' : ''}`}>
                                <h3 className="considering-block__ttl">簡単な操作で実現する<br className="sp" />高度なデータ抽出・加工・出力機能</h3>
                                <p className="mbsp-45">異なる業務システムに蓄積されたデータもData Knowledgeならスムーズに活用可能。<br className="pc" />基幹DBなどの情報を結合し、データを抽出・集計・加工処理を行った結果ファイルを出力できます。</p>
                                <div className="considering-block__img">
                                    <picture>
                                        <source srcSet="../../assets/img/webp/index/block-01-sp.webp" media="(max-width:834px)" type="image/webp" />
                                        <source srcSet="../../assets/img/index/block-01-sp.png" media="(max-width:834px)" />
                                        <source srcSet="../../assets/img/webp/index/block-01.webp" type="image/webp" />
                                        <img src="../../assets/img/index/block-01.png" alt="簡単な操作で実現する高度なデータ抽出・加工・出力機能" />
                                    </picture>
                                </div>
                            </div>
                            <div className={`considering-block__item ${mainIndex === 1 ? 'is-active' : ''}`}>
                                <SubTabConsidering  />
                            </div>
                            <div className={`considering-block__item ${mainIndex === 2 ? 'is-active' : ''}`}>
                                <h3 className="considering-block__ttl">Data Knowledge導入後の<br className="sp" />業務分担イメージ</h3>
                                <p className="mbpc-67">Data Knowledgeによるデータのデザインは、一定以上のスキルに満たなくても作成することが可能。<br className="pc" />これまでのようにシステムに詳しい人材に業務が集中するといった弊害が解消されます。</p>
                                <div className="considering-project">
                                    <div className="considering-project__list js-considering-project__list">
                                        <div className="considering-project__list-item">
                                            <div className="considering-project__list-img">
                                                <picture>
                                                    <source srcSet="../../assets/img/webp/index/blok-03-tab1.webp" type="image/webp" />
                                                    <img src="../../assets/img/index/blok-03-tab1.png" alt="Data Knowledge導入後の業務分担イメージ" />
                                                </picture>
                                            </div>
                                            <div className="considering-project__list-ct">
                                                <ul>
                                                    <li>ナレッジの利用で高いスキルがなくても<br />高度な情報活用を実現</li>
                                                    <li>手元データも合わせて見たい視点・切り口でデータ加工が可能</li>
                                                    <li>繰り返し利用が手軽にできるさまざまな機能を搭載</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="considering-project__list-item">
                                            <div className="considering-project__list-img">
                                                <picture>
                                                    <source srcSet="../../assets/img/webp/index/blok-03-tab2.webp" type="image/webp" />
                                                    <img src="../../assets/img/index/blok-03-tab2.png" alt="Data Knowledge導入後の業務分担イメージ" />
                                                </picture>
                                            </div>
                                            <div className="considering-project__list-ct">
                                                <ul>
                                                    <li>イチから作成することができなくても<br />高度なデータ加工が可能</li>
                                                    <li>現場ニーズに応じたデータ活用が可能</li>
                                                    <li>システム担当者の負荷軽減</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="considering-project__list-item">
                                            <div className="considering-project__list-img">
                                                <picture>
                                                    <source srcSet="../../assets/img/webp/index/blok-03-tab3.webp" type="image/webp" />
                                                    <img src="../../assets/img/index/blok-03-tab3.png" alt="Data Knowledge導入後の業務分担イメージ" />
                                                </picture>
                                            </div>
                                            <div className="considering-project__list-ct">
                                                <ul>
                                                    <li>プログラム開発の必要がなく、データ・帳票・グラフの作成・提供が可能</li>
                                                    <li>DWH設計・構築が不要</li>
                                                    <li>共有機能でさまざまな情報提供形態に対応可能</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="considering-project__note">
                                        <picture>
                                            <source srcSet="../../assets/img/webp/index/block-03-note.webp" type="image/webp" />
                                            <img src="../../assets/img/index/block-03-note.png" alt="Data Knowledge導入後の業務分担イメージ" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <a href="https://www.dataknowledge.jp/request.html" target="_blank" className="c-btn__01">詳しい資料はこちら</a>
                </div>
            </section>
        </>
    )
}

export default ConsideringSection;