import { cloneElement, useCallback, useRef } from 'react';
import styles from './index.module.scss';

type ModalProps = {
  children: JSX.Element;
  toggleModal: () => void;
};

export default function Modal({ children, toggleModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current?.contains(e.target as Node)) return;
    toggleModal();
  };

  const handleFocusModal = useCallback((e: React.KeyboardEvent) => {
    if (!contentRef.current) return;

    if (!e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      contentRef.current.focus();
    }
  }, []);

  const handleFocusCloseButton = useCallback((e: React.KeyboardEvent) => {
    if (!closeButtonRef.current) return;

    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      closeButtonRef.current.focus();
    }
  }, []);

  const childrenWithProps = cloneElement(children, { contentRef, handleFocusCloseButton });

  return (
    <div className={styles.modal_background} onClick={handleClickOutside} aria-hidden="true">
      <div ref={modalRef}>{childrenWithProps}</div>
      <button
        type="button"
        ref={closeButtonRef}
        className={styles.a11y_hidden}
        onKeyDown={handleFocusModal}
      >
        Close
      </button>
    </div>
  );
}
