import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Homepage.scss";
import signs from "../../data/signs.json";
import Card from "../../components/card/Card";

class Homepage extends Component {
  state = {
    signs,
    selectedSign: "",
    signData: "",
    cardDisplay: false,
  };

  handleSelectedSign = (id) => {
    let selectedSign = this.state.signs.find((sign) => sign.id === id);
    console.log(selectedSign);
 
    this.setState({
      selectedSign: selectedSign,
      cardDisplay: true
    });
  };

  handleModal = (handler, selectedSign) => {
    this.setState({
      cardDisplay: false,
    });
  };

  render() {
    return (
      <>
      <section className="page">
        <div className="signs">
          <div className="signs__container" key={this.state.selectedSign.id}>
            {this.state.signs.map((sign) => {
              return(
            <div
              onClick={() => this.handleSelectedSign(sign.id)}
              className="signs__item"
              id={sign.id}
              key={sign.id}
            >
              <img className="signs__image" src={sign.image} alt="astro sign icon" />
            </div>
            )})}
            
          </div>
        </div> 
        {this.state.cardDisplay ? (
          <Card
            handleModal={this.handleModal}
            selectedSign={this.state.selectedSign}
          />
        ) : null}
      <Link className="signs__link" to="/magic"> Magic </Link>
      </section>
        </>
    );
  } 
}

export default Homepage;
