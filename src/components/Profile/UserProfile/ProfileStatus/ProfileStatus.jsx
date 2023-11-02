import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		isEdit: false,
		currentStatus: this.props.status,
	}

	changeEditStatus = () => {
		this.setState({
			isEdit: !this.state.isEdit,
			currentStatus: this.props.status
		})
	}

	onChangeStatusHandler = (e) => {
		this.setState({
			currentStatus: e.target.value,
		})
	}

	updateStatusHandler = () => {
		this.setState({
			isEdit: false
		})
		if (this.state.currentStatus)
			this.props.updateStatus(this.state.currentStatus)
	}


	render() {
		return (
			<div>
				{!this.state.isEdit
					? <div className={s.status}>
						<span>{this.props.status || 'Loading status...'}</span>
						<button className={s.statusEdit__btn} onClick={this.changeEditStatus.bind(this)}>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 30 30">
								<path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
							</svg>

						</button>
					</div>
					: <div className={s["status-handler"]}>
						<div>
							<input
								className="input-field"
								id='user-status'
								onChange={this.onChangeStatusHandler.bind(this)}
								value={this.currentStatus}
								maxLength={200}
								placeholder={this.props.status ? this.props.status : 'Write status'}
							/>
						</div>
						<div className={s["status-handler__btns"]}>
							<button onClick={this.updateStatusHandler.bind(this)}>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
									<path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
								</svg>
							</button>
							<button onClick={this.changeEditStatus.bind(this)}>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
									<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
								</svg>
							</button>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default ProfileStatus;