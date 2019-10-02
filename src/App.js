import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		days: 0,
		hours: 0,
		mins: 0,
		secs: 0
	};

	targetDate = new Date("2020-02-21T00:00:00-0700");
	interval;

	componentDidMount() {
		this.interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = this.targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const secs = Math.floor((difference % (1000 * 60)) / 1000);

			this.setState({
				days,
				hours,
				mins,
				secs
			});
		}, 1000);
	}

	componentWillUnmout() {
		clearInterval(this.interval);
	}

	render() {
		const { days, hours, mins, secs } = this.state;

		document.title = `Countdown to Last of Us Part II Release Date | ${days}:${hours}:${mins}:${secs}`;

		return (
			<div className="App">
				<div className="countdown">
					<div>
						<span className="days">
							{days} <br /> Days
						</span>
					</div>
					<div>
						<span className="hours">
							{hours}
							<br /> Hours
						</span>
					</div>
					<div>
						<span className="mins">
							{mins}
							<br /> Minutes
						</span>
					</div>
					<div>
						<span className="secs">
							{secs}
							<br /> Seconds
						</span>
					</div>
				</div>
				<h3>
					Until <a href="#!">The Last of Us Part II</a> release day
				</h3>

				<footer>
					By <a href="https://github.com/akshaykulkarni2007">Akshay Kulkarni</a>
				</footer>
			</div>
		);
	}
}

export default App;
