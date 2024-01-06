import { useEffect } from "react";
import PropTypes from "prop-types";
import CancelIcon from "../../../assets/images/svg/Cancel";

const ModalView = ({
  setIsModalOpen,
  isModalOpen,
  title,
  children,
  modalWidth,
}) => {

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const modalStyle = {
    position: "fixed",
    top: `10px`,
    left: "50%",
    transform: "translateX(-50%)",
    width: modalWidth,
    maxHeight: "96vh",
    overflowY: "auto",
    overscrollBehavior: "contain",
    zIndex: 9999,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    padding: "20px",
  };

  const hideScrollbarStyle = `
    ::-webkit-scrollbar {
      width: 5px; /* Adjust the scrollbar width as needed */
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #888; /* Change scrollbar thumb color */
      border-radius: 10px;
    }
  `;

  return (
    <>    
      <div style={{ ...modalStyle, scrollbarWidth: "thin" }}>
        <style>{isModalOpen ? hideScrollbarStyle : ""}</style>
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button onClick={() => setIsModalOpen(false)}>
            <CancelIcon />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

ModalView.defaultProps = {
  modalWidth: "590px",
};

ModalView.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalWidth: PropTypes.string,
  modalTopPosition: PropTypes.number,
};

export default ModalView;
