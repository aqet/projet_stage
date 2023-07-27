import React, { useState } from 'react';

type PopupProps = {
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div className={`popup ${visible ? 'visible' : ''}`}>
      <div className="popup-content">
        <img src="https://www.kevmax.com/images/logo_kevmax_white.svg" width="133" height="46.27" decoding="async" data-nimg="1"  loading="lazy" ></img>
        <p>Le job a bien ete enregistrer</p>
        <button onClick={handleClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Popup;