// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, seconds: 0}

  getSecondsIncrease = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStartTimer = () => {
    this.timeId = setInterval(this.getSecondsIncrease, 1000)
    this.setState({isTimerRunning: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeId)
    this.setState({seconds: 0})
  }

  timeFormat = () => {
    const {seconds} = this.state
    const newMin = Math.floor(seconds / 60)
    const newSec = Math.floor(seconds % 60)
    const minutesStringify = newMin > 9 ? newMin : `0${newMin}`
    const secondsStringify = newSec > 9 ? newSec : `0${newSec}`
    return `${minutesStringify}:${secondsStringify}`
  }

  render() {
    const {isTimerRunning, seconds} = this.state
    console.log(isTimerRunning, seconds)
    return (
      <div className="application-page">
        <div className="timer-div">
          <h1 className="heading">Stopwatch</h1>
          <div className="stop-watch-div">
            <div className="img-label-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-label">Timer</p>
            </div>
            <h1 className="time">{this.timeFormat()}</h1>
            <div className="btn-div">
              <button
                type="button"
                className="btn green"
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn red"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn yellow"
                disabled={isTimerRunning}
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
