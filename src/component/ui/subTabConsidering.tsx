import { SUB_TABS } from '@/helper/dataConsidering';
import { useConsideringTabs } from '@/hooks/useConsideringTabs';

const SubTabConsidering = () => {
    const {
        subIndex,
        handleSubTabClick,
    } = useConsideringTabs();

    return(
        <>
            <div className="considering-block__file">
                <ul className="considering-block__file-tab">
                    {
                        SUB_TABS.map((tab, index) => (
                            <li
                                key={index}
                                className={`considering-block__file-tab-item ${subIndex === index ? 'is-active' : ''}`}
                                data-sub={index}
                                role="tab"
                                aria-selected={subIndex === index ? 'true' : 'false'}
                                onClick={() => handleSubTabClick(index)}
                            >   <span>{tab.label}</span></li>
                        ))
                    }
                </ul>
                <div className="considering-block__file-ct">
                    {SUB_TABS.map((sub, i) => (
                        <div
                            key={i}
                            className={`considering-block__file-item ${subIndex === i ? 'is-active' : ''}`}
                        >
                            <h3 className="considering-block__ttl">{sub.title}</h3>
                            {sub.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SubTabConsidering;