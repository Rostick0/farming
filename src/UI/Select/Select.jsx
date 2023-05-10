import { default as ReactSelect } from 'react-select';
import './select.scss';

const Select = ({
    className,
    options,
    defaultValue,
    onChange,
    name,
    placeholder,
    isDisabled,
    isMulti,
    isSearchable,
    noOptionsMessage,
    value,
    autoFocus
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <ReactSelect
            className={'select-react' + styleClassName}
            classNamePrefix={'select-react'}
            options={options}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
            placeholder={placeholder ?? 'Выберите...'}
            isDisabled={isDisabled}
            isMulti={isMulti}
            isSearchable={isSearchable}
            noOptionsMessage={noOptionsMessage}
            value={value}
            autoFocus={autoFocus}
        ></ReactSelect>
    );
};

export {
    Select
};