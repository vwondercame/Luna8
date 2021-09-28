import React, { Component } from "react";
import "./Card.scss";
import signsData from "../../data/signs.json";
import axios from "axios";
// import uniqid from "uniqid";

const signs = signsData;
const URL = "https://aztro.sameerkumar.website";

class Card extends Component {
  state = {
    horoscope: null,
  };

  clickHandle(day) {
    axios
      .post(
        `${URL}/?sign=${this.props.selectedSign.name.toLowerCase()}&day=${day}`
      )
      .then((response) => {
        // this.props.handleSelectingDate(response.data.description);
        this.setState({
          horoscope: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="scope-card" key={this.props.selectedSign.id}>
        <div className="scope-card__inner">
          <button
            className="scope-card__inner--btn"
            onClick={this.props.handleModal}
          ></button>

          <div className="scope-card__image-container">
            <img
              className="scope-card__image"
              src={this.props.selectedSign.starimage}
            />
            <h2 className="scope-card__image-container--title">
              {this.props.selectedSign.name}
            </h2>
          </div>

          <div className="scope-card__text-container">
            <p className="scope-card__text-container--description">
                {this.state.horoscope ? this.state.horoscope.description
                 : this.props.selectedSign.text}
              {/* {this.props.selectedSign.text} */}
            </p>
          </div>

          <div className="scope-card__buttons">
            <button
              onClick={() => this.clickHandle("yesterday")}
              className="scope-card__buttons-item"
            >
              Yesterday
            </button>
            <button
              onClick={() => this.clickHandle("today")}
              className="scope-card__buttons-item"
            >
              Today
            </button>
            <button
              onClick={() => this.clickHandle("tomorrow")}
              className="scope-card__buttons-item"
            >
              Tomotrow
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
