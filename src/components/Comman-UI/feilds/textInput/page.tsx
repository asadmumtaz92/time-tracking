import React from 'react'

interface TextInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: any;
    error?: boolean;
    minLength?: number;
    name?: string;
    disabled?: boolean;
    min?: number;
    maxLength?: number;
    required?: boolean;
}


const TextInput = ({
    label = '',
    type = 'text',
    placeholder = '',
    value,
    onChange,
    error = false,
    minLength,
    name,
    disabled = false,
    min,
    maxLength,
    required = true,
}: TextInputProps) => {


    return (
        <div className='flex flex-col w-full mb-[24px]'>
            {label && <label htmlFor={label} className={`text-desc text-[1rem] leading-[25.6px] font-[400] mb-[8px]`}>{label}</label>}
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`bg-card text-desc text-[1rem] leading-[25.6px] font-[400] px-[10px] py-[6px] rounded-[4px] w-full !border-[1px] border-border !outline-none !ring-none focus:border-border ${value && !error && '!border-red-500'}`}
                minLength={minLength && minLength}
                name={name}
                disabled={disabled}
                min={min}
                maxLength={maxLength}
                required={required}
                autoComplete='none'
            />
        </div>
    )
}

export default TextInput