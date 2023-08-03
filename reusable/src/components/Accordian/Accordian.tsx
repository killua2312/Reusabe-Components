import { useState } from "react";

interface AccordianProps {
    title: string;
    children: React.ReactNode;
}

function Accordian({title, children}: AccordianProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordian = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className="accordian">
            <div className="accordian-header" onClick={toggleAccordian}>
                <h3>{title}</h3>
                <span className={`icon ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && <div className="accordian-content">{children}</div>}
        </div>
    )
}

export default Accordian;