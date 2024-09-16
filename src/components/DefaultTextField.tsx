import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';

interface DefaultTextFieldProps {
  errorMessage: string;
  isError: boolean;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function DefaultTextField({
  errorMessage,
  isError,
  iconPath,
  iconAlt,
  onIconClick,
  value,
  placeholder,
  onChange,
}: DefaultTextFieldProps) {
  const [isFocusd, setIsFocusd] = useState(false);
  const borderColor = isFocusd
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';
  return (
    <div>
      <div
        onFocus={() => setIsFocusd(true)}
        onBlur={() => setIsFocusd(false)}
        className={`${borderColor} text-primary border-b`}
      >
        <input
          className="outline-none"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!!value && (
          <IconButton iconPath={iconPath} alt={iconAlt} onClick={onIconClick} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
