import React, { useState, useEffect } from "react";
import './App.css'; 

function Modal({ onClose }) {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Заказ 18020642-0063 доставлен</h2>
        </div>
        <div className="modal-body">
          <hr />
          <p>
            Заберите его в пункте выдачи до 15 апреля включительно, потом
            заказ придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="buttonfirst" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    
    console.log("showModal:", showModal);
  }, [showModal]); 

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getRandomNumber = () => {
    const random = Math.random();
    setRandomNumber(random);
  };

  return (
    <div className="app">
      <div className="notification-section">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="buttonsec" onClick={openModal}>
              Уведомления
            </button>
            {showModal && <Modal onClose={closeModal} />}
          </div>
        </div>
      </div>

      <div className="random-number-section">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="buttonthird" onClick={getRandomNumber}>
              Получить число
            </button>
            {randomNumber && <p>Случайное число: {randomNumber}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
