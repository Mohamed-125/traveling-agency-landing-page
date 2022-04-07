import React from "react";
import "./Book.css";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Book = () => {
  return (
    <section className="book__section section__padding">
      <div className="book__grid_div">
        <div className="book__text_cards_div">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p style={{ marginTop: "1rem" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ut
            porro totam, aut voluptates saepe unde! Sit doloribus provident
            voluptatum illum, rem, quibusdam obcaecati consequuntur alias,
            beatae iure labore cum! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aut illum dicta est tempora rem quis mollitia nam
            neque quisquam, vero eos modi sit beatae voluptatibus nostrum
            assumenda ipsam, fugiat corporis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Enim aliquam doloribus nemo inventore
            sunt non vero esse repellendus, recusandae ab consequatur placeat
            labore soluta! Natus at atque expedita dignissimos itaque? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Rerum quaerat
            hic consequatur minima. Quia at eos porro necessitatibus doloremque
            sequi? Beatae eligendi, rerum commodi vitae tenetur necessitatibus
            dolorem voluptatem suscipit?
          </p>
          <div className="book__cards">
            <div className="book__card">
              <div>
                <h3>LENDING SERVICES</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
              <RiCustomerService2Fill className="book__cards_icons" />{" "}
            </div>

            <div className="book__card">
              <div>
                <h3>AUTOMATED BOOKINGS</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
              <MdOutlineTravelExplore className="book__cards_icons" />
            </div>
          </div>
        </div>
        <div className="book__book flex__center flex__coulmn">
          <div className="book__text">
            <p>GET ADDITIONAL 10% OFF</p>
            <p> 12 HOURS LEFT</p>
            <button className="custom__button"> BOOK NOW </button>
          </div>
          <div className="book__input flex__center flex__coulmn">
            <label>Destination</label>
            <input type="text" />
            <label>Check-In</label>
            <input type="date" />
            <label>Check-In</label>
            <input type="date" />
            <button
              style={{
                position: "relative",
                top: "0.7rem",
                backgroundColor: "#3e64c7",
              }}
              className="book__button custom__button "
            >
              Check Avilable and Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
