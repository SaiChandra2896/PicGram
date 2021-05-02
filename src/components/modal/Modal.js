import "./Modal.css";

const Modal = ({ imgUrl, updateUrl }) => {
  return (
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
