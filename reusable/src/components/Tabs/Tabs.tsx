import {useState} from 'react'

interface Tab {
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

function Tabs({tabs}: TabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-item ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="tabs-content">{tabs[activeTab].content}</div>
        </div>
    )
}

export default Tabs;