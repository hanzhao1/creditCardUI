import React, { Component } from 'react';
import './../styles/creditCardInput.css'

class CreditCardInput extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      cardNumber: '',
      cvv2: '',
      month: '',
      year: '',
      nameValidation: false,
      cardValidation: false,
      dateValidation: false,
    };
  };

  changeInput(stateName, value){
    let newState = {};
    newState[stateName] = value;
    this.setState(newState);
  };

  nameValidation(){
    if(this.state.name.length > 0){
      if(!this.state.nameValidation){
        this.setState({nameValidation: true});
      }
      return true;
    }
    return false;
  }

  cardValidation(){
    if(this.state.cardNumber.length === 16 && (this.state.cardNumber.indexOf('4') === 0)){
      if(this.state.cvv2.length === 3){
        if(!this.state.cardValidation){
          this.setState({cardValidation: true});
        }
        return true;
      }
      return false;
    }

    if(this.state.cardNumber.length === 15){
      if(this.state.cardNumber.indexOf('34') === 0 || this.state.cardNumber.indexOf('37') === 0){
        if(this.state.cvv2.length === 4){
          if(!this.state.cardValidation){
            this.setState({cardValidation: true});
          }
          return true;
        }
        return false;
      }
      return false;
    }
    return false;
  }

  dateValidation(){
    let newDate = new Date();
    let parsedMonth = parseInt(this.state.month);
    let parsedYear = parseInt(this.state.year);
    if(parsedYear >= newDate.getYear() + 1900){
      if(parsedYear === newDate.getYear() + 1900){
        if(parsedMonth > newDate.getMonth){
          if(!this.state.dateValidation){
            this.setState({dateValidation: true});
          }
          return true;
        } else {
          return false;
        }
      } else {
        if(!this.state.dateValidation){
          this.setState({dateValidation: true});
        }
        return true;
      }
    }
    return false;
  }

  allValidationCorrect(){
    return this.state.nameValidation && this.state.cardValidation && this.state.dateValidation;
  }

  render() {
    return (
      <div>
        <div className="inputForm">
          {this.nameValidation() ?
            <input className="form-control" placeholder="Name" value={this.state.name} onChange={(e)=>{
              this.changeInput('name', e.target.value);
            }}/> :
            <input className="incorrectInput form-control" placeholder="Name" value={this.state.name} onChange={(e)=>{
              this.changeInput('name', e.target.value);
            }}/>
          }
        </div>

        <div>
          {this.cardValidation() ?
            <div>
              <div className="inputForm">
                <input className="form-control" placeholder="Card Number" value={this.state.cardNumber} onChange={(e)=>{
                  this.changeInput('cardNumber', e.target.value);
                }}/>
              </div>

              <div className="inputForm">
                <input className="form-control" placeholder="CVV2" value={this.state.cvv2} onChange={(e)=>{
                  this.changeInput('cvv2', e.target.value);
                }}/>
              </div>
            </div> :

            <div>
              <div className="inputForm">
                <input className="incorrectInput form-control" placeholder="Card Number" value={this.state.cardNumber} onChange={(e)=>{
                  this.changeInput('cardNumber', e.target.value);
                }}/>
              </div>

              <div className="inputForm">
                <input className="incorrectInput form-control" placeholder="CVV2" value={this.state.cvv2} onChange={(e)=>{
                  this.changeInput('cvv2', e.target.value);
                }}/>
              </div>
            </div>
          }
        </div>


        <div>
        {this.dateValidation() ?
          <div className="inputForm">
            <input placeholder="Exp. Month" value={this.state.month} onChange={(e)=>{
              this.changeInput('month', e.target.value);
            }}/>

            <input placeholder="Exp. Year" value={this.state.year} onChange={(e)=>{
              this.changeInput('year', e.target.value);
            }}/>
          </div> :

          <div className="inputForm">
            <input className="incorrectInput dateValidation" placeholder="Exp. Month" value={this.state.month} onChange={(e)=>{
              this.changeInput('month', e.target.value);
            }}/>

            <input className="incorrectInput dateValidation" placeholder="Exp. Year" value={this.state.year} onChange={(e)=>{
              this.changeInput('year', e.target.value);
            }}/>
          </div>
        }
        </div>

        {this.allValidationCorrect() ?
          <button className="btn btn-primary btn-lg active"> Submit </button> :
          <button class="btn btn-lg btn-primary" disabled>Submit</button>
        }

      </div>
    );
  }
}

export default CreditCardInput;
