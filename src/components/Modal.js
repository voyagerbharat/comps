import { useEffect } from "react";
import ReactDOM from "react-dom";
function Modal({ handleClose, children, actionBar }) {
  useEffect(() => {
    console.log("use effect called");
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const handleClick = () => {
    handleClose();
  };
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handleClick}
        className="fixed absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className=" fixed absolute inset-40 p-10 bg-white">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
