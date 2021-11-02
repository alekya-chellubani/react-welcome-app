// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    buttonValue: false,
  }

  onClickSubscribeButton = () => {
    this.setState(prevState => ({buttonValue: !prevState.buttonValue}))
  }

  getButtonText = () => {
    const {buttonValue} = this.state

    return buttonValue ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-container">
        <div className="welcome-inner-container">
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-text">Thank you! Happy Learning</p>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickSubscribeButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Welcome
