import React, { useEffect, useState } from "react";
import "./ImagesSlider.css";
const ImagesSlider = () => {
  const [index, setIndex] = useState(0);
  const [operation, setOperation] = useState("");
  const images = [
    `https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80`,
    `https://images.unsplash.com/photo-1600255821058-c4f89958d700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80`,
    `https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`,
    `https://images.unsplash.com/photo-1547594022-1e40e87849e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80`,
    `https://images.unsplash.com/photo-1608347212618-87abc72d4835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    `https://images.unsplash.com/photo-1600273970168-c3db62dcf905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    `https://images.unsplash.com/photo-1593705528563-c193527ea423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    `https://images.unsplash.com/photo-1543348750-466b55f32f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    `https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    `https://images.unsplash.com/photo-1544067612-e676aca74a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
  ];
  useEffect(() => {
    if (operation === "next") {
      document.querySelector(
        ".imageSlider__imgs_contener"
      ).style.transform = `translate(${-900 * index}px)`;
    }
    if (operation === "prev") {
      console.log(index);
      document.querySelector(
        ".imageSlider__imgs_contener"
      ).style.transform = `translate(${-900 * index}px)`;
    }
  }, [index]);
  const nextOrPre = (e) => {
    switch (e.target.id) {
      case "next":
        setOperation("next");
        if (index === images.length - 1) {
          setIndex(0);
        } else {
          setIndex((pre) => pre + 1);
        }
        break;
      case "prev":
        setOperation("prev");
        if (index === 0) {
          setIndex(images.length - 1);
        } else {
          setIndex((pre) => pre - 1);
        }
        break;

      default:
        break;
    }
  };
  return (
    <section className="imageSlider__section  section__padding flex__center">
      <div className="imgesSlider__contener">
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            zIndex: "10",
            width: "800px",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button id="next" onClick={nextOrPre} className="imgesSlider__button">
            next
          </button>
          <button id="prev" onClick={nextOrPre} className="imgesSlider__button">
            pre
          </button>
        </div>
        <div className="imageSlider__imgs_contener">
          {images.map((img, index) => {
            return <img className="imageSlider__img" src={img} alt="/" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ImagesSlider;
