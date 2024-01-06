import { useEffect } from "react";
import PropTypes from "prop-types";
import CancelIcon from "../../../assets/images/svg/Cancel";

const ModalView = ({ setIsModalOpen, isModalOpen, title, children }) => {
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
    top: `20px`,
    left: "50%",
    transform: "translateX(-50%)",
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

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 9998, 
  };

  return (
    <>
      {isModalOpen && <div style={backdropStyle}></div>}
      <div
        style={{ ...modalStyle, scrollbarWidth: "thin" }}
        className="w-[100%] md:w-[600px] lg:w-[700px]"
      >
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

ModalView.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalWidth: PropTypes.string,
  modalTopPosition: PropTypes.number,
};

export default ModalView;
