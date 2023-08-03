import {useState} from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    defaultOption?: Option;
    onSelectOption: (selectedOption: Option) => void;
}

function Dropdown({options, defaultOption, onSelectOption}: DropdownProps) {
    const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultOption);

    const handleOptionSelect = (option: Option) => {
        setSelectedOption(option);
        onSelectOption(option);
    };

    const onChange = (e : any) => {
        const selectedValue = e.target.value;
        const option = options.find((opt) => opt.value === selectedValue);
        if(option) {
            handleOptionSelect(option);
        }
    }

    return (
        <div className="dropdown">
            <select
                value={selectedOption ? selectedOption.value : ''}
                onChange={onChange}
            >
                {defaultOption && (
                    <option value={defaultOption.value}>{defaultOption.label}</option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;