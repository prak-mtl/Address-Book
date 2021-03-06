import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";

class DisplaySection extends Component {
  state = {
    list: this.props.peopleList
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.peopleList) {
      this.setState({
        list: nextProps.peopleList
      });
      localStorage.setItem("peopleList", JSON.stringify(nextProps.peopleList));
    }
  }

  render() {
    return (
      <section className="data-section">
        {this.state.list &&
          this.state.list.map((item, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="list-items">{item.name}</p>
                </div>
                <div
                  className="flip-card-back"
                  onClick={() => this.props.showPerson(index)}
                >
                  <p>Click to view details</p>
                </div>
              </div>
            </div>
          ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  peopleList: state.peopleList
});
const mapDispatchToProps = dispatch => ({
  showPerson: val => dispatch({ type: "SHOW_PERSON", payload: val })
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
