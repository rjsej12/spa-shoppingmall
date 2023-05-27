import { FiChevronDown } from 'react-icons/fi';
import { SetStateAction, useMemo, useState } from 'react';
import styles from './index.module.scss';

type ProductOptionSelectProps = {
  options: ProductOption[];
  contentRef: React.RefObject<HTMLElement>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<SetStateAction<string>>;
  handleFocusCloseButton: (e: React.KeyboardEvent) => void;
};

export default function ProductOptionSelect({
  options,
  contentRef,
  selectedOption,
  setSelectedOption,
  handleFocusCloseButton,
}: ProductOptionSelectProps) {
  const [isOptionListShow, setIsOptionListShow] = useState(false);
  const hasOptions = useMemo(() => options.length !== 0, [options]);

  const toggleOptionList = () => {
    setIsOptionListShow(prev => !prev);
  };

  const handleClickOption = (option: string) => () => {
    setSelectedOption(option);
    toggleOptionList();
  };

  const handleEnterOption = (option: string) => (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      setSelectedOption(option);
      toggleOptionList();
    }
  };

  return (
    <div className={styles.select_wrapper}>
      {hasOptions ? (
        <>
          <button
            type="button"
            className={styles.select_button}
            tabIndex={0}
            ref={contentRef as React.RefObject<HTMLButtonElement>}
            onKeyDown={handleFocusCloseButton}
            onClick={toggleOptionList}
          >
            <span>{selectedOption}</span>
            <FiChevronDown className={styles.icon} role="listbox" />
          </button>
          {isOptionListShow && (
            <ul className={styles.options}>
              {options.map(option => (
                <li
                  key={option.id}
                  onClick={handleClickOption(option.name)}
                  onKeyDown={handleEnterOption(option.name)}
                  role="option"
                  aria-selected={selectedOption === option.name}
                  tabIndex={0}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <button
          type="button"
          className={styles.no_option}
          tabIndex={0}
          ref={contentRef as React.RefObject<HTMLButtonElement>}
          onKeyDown={handleFocusCloseButton}
        >
          <span>옵션 없음</span>
        </button>
      )}
    </div>
  );
}
