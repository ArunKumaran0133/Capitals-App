import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeSelectId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeSelectId: event.target.value})
  }

  getCapital = () => {
    const {activeSelectId} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeSelectId,
    )

    return activeCapitalAndCountry.country
  }

  render() {
    const {activeSelectId} = this.state
    const country = this.getCapital(activeSelectId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeSelectId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-country-para">Is Capital of which Country?</p>
          </div>
          <h1 className="capital">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
