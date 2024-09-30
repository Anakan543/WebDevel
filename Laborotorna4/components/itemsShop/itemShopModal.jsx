import React, { useState } from "react";

export const ModalItem = ({
  nameItem,
  price,
  srcPicture,
  description,
  isOpen,
}) => {
  const [comments, setComments] = useState([]);
  const [textComments, setTextComments] = useState("");

  const addComents = (e) => {
    e.preventDefault();
    if (textComments.trim()) {
      setComments([...comments, textComments]);
      console.log(`Текст коментаря: ${textComments}`);
      alert(`Ваш відгук: "${textComments}" додано успішно!`);
      setTextComments("");
    }
  };
  return (
    <>
      <div className="BackgroundClick" onClick={() => isOpen(false)} />
      <div className="ModalDiv divItem">
        <div className="picture">
          <img src={srcPicture} alt="picture" />
          {comments.length === 0 ? (
            <p>Коментарі відстуні</p>
          ) : (
            <ul type="none">
              {comments.map((comments, index) => (
                <li className="comment" key={index}>
                  {comments}
                </li>
              ))}
            </ul>
          )}
          <form onSubmit={addComents} className="comments">
            <label>
              Залишити коментарій:
              <textarea
                value={textComments}
                onChange={(e) => setTextComments(e.target.value)}
                placeholder="Ваш коментарій"
              />
            </label>
            <button type="submit">Додати коментарій</button>
          </form>
        </div>
        <div className="infoItem">
          <h2>{nameItem}</h2>
          <span>{price}UAH</span>
          <div className="description">{description}</div>
          <button onClick={() => isOpen(false)}>Придбати</button>
        </div>
      </div>
    </>
  );
};
