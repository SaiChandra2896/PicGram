import "./Modal.css";

const Modal = ({ imgUrl, updateUrl }) => {
  return (
    // <div className="modal-container">
    //   <div className="image-container">
    //     <img src={imgUrl} alt="post" />
    //   </div>
    // </div>
    <div
      style={{ display: imgUrl ? "block" : "none" }}
      className="modal-bg"
      onClick={() => updateUrl(null)}
    >
      <img
        className="modal-img"
        src={imgUrl}
        alt="img"
        style={{ width: "500px" }}
      ></img>
    </div>
  );
};

export default Modal;
