import React, { Component } from "react";
import "./Card.scss";
import signsData from "../../data/signs.json";

const signs = signsData;
const URL = "https://aztro.sameerkumar.website";

class Card extends Component {
  state = {
    horoscope: null,
    yesterday: "",
    today: "",
    tomorrow: "",
  };

  loadHoroscopes() {
    fetch(
      `${URL}/?sign=${this.props.selectedSign.name.toLowerCase()}&day=yesterday`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((yes) => this.setState({ yesterday_horo: yes }));

    fetch(
      `${URL}/?sign=${this.props.selectedSign.name.toLowerCase()}&day=today`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((to) => this.setState({ today_horo: to }));

    fetch(
      `https://aztro.sameerkumar.website/?sign=${this.props.selectedSign.name.toLowerCase()}&day=tomorrow`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((tom) => this.setState({ tomorrow_horo: tom }));
  }

  render() {
    return (
      <div className="scope-card" key={this.props.selectedSign.id}>
        <div className="scope-card__inner">
          <button
            className="scope-card__inner--btn"
            onClick={this.props.handleModal}
          >
            close
          </button>

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
              {this.props.selectedSign.text}
            </p>
          </div>

          <div className="scope-card__buttons">
            <button className="scope-card__buttons-item">Yesterday</button>
            <button className="scope-card__buttons-item">Today</button>
            <button className="scope-card__buttons-item">Tommorow</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
