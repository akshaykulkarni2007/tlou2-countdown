import React, { Component } from "react"
import "./App.css"

class App extends Component {
	state = {
		days: 0,
		hours: 0,
		mins: 0,
		secs: 0
	}

	targetDate = new Date("2020-02-21T00:00:00-0700")
	interval

	componentDidMount() {
		this.interval = setInterval(() => {
			const now = new Date().getTime()
			const difference = this.targetDate - now

			const days = Math.floor(difference / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
			const secs = Math.floor((difference % (1000 * 60)) / 1000)

			this.setState({
				days,
				hours,
				mins,
				secs
			})
		}, 1000)
	}

	componentWillUnmout() {
		clearInterval(this.interval)
	}

	render() {
		const { days, hours, mins, secs } = this.state

		document.title = `Countdown to Last of Us Part II Release Date | ${days}:${hours}:${mins}:${secs}`

		return (
			<div className="App">
				<div className="countdown">
					<div className="container">
						<div className="row">
							<div className="col-md-3 ">
								<div className="countdown-box">
									{days} <br /> Days
								</div>
							</div>
							<div className="col-md-3 ">
								<div className="countdown-box">
									{hours} <br /> Hours
								</div>
							</div>
							<div className="col-md-3 ">
								<div className="countdown-box">
									{mins} <br /> Minutes
								</div>
							</div>
							<div className="col-md-3 ">
								<div className="countdown-box">
									{secs} <br /> Seconds
								</div>
							</div>
						</div>
					</div>
					<h3>
						Until{" "}
						<a
							href="https://store.playstation.com/en-us/product/UP9000-CUSA07820_00-THELASTOFUSP2DLX"
							target="_blank">
							The Last of Us Part II
						</a>{" "}
						release day
					</h3>
				</div>

				<footer>
					<a href="https://github.com/akshaykulkarni2007">Akshay Kulkarni</a>
				</footer>
			</div>
		)
	}
}

export default App
