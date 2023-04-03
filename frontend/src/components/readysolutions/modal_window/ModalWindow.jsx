import React from 'react'

import st from './ModalWindow.module.css'

const ModalWindow = ({ isVisible = false, title, content, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
      switch (key) {
        case 'Escape':
          onClose();
          break;
        default:
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('keydown', keydownHandler);
      return () => document.removeEventListener('keydown', keydownHandler);
    });
  
    return !isVisible ? null : (
      <div className={st.modal} onClick={onClose}>
        <div className={st.modalDialog} onClick={e => e.stopPropagation()}>
          <span className={st.modalClose} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
          <div className={st.modalHeader}>
            <h3 className={st.modalTitle}>{title}</h3>
          </div>
          <div className={st.modalBody}>
            <div className={st.modalContent}>{content}</div>
          </div>
          {footer && <div className={st.modalFooter}>{footer}</div>}
        </div>
      </div>
    );
  };

export default ModalWindow;


// Little MANUAL:
//
// you need to create "const [isModal, setModal] = useState(false)" 
// variable responsible wether ModalWindow visible or not
//
// there are also props you might need to set modal window up:
//      isVisible - wether it visible or not. [gets isModal as value]
//      title - title visible in modal window [gets string or HTML as value]
//      content - general content visible in modal window [gets string or HTML as value]
//      footer - footer content visible in moda window [gets string or HTML as value]
//      onClose - function that called when person tries to close modal window [gets a FUNCTION as value]
//
// EXAMPLE OF CODE:
//
// const [isModal, setModal] = useState(false);
//
//   <button onClick={() => setModal(true)}>Click Here</button>
//   <ModalWindow
//   
//     isVisible={isModal}
//     title="Modal Title"
//     content={<p>Add your content here</p>}
//     footer={<button>Cancel</button>}
//     onClose={() => setModal(false)}
//   />