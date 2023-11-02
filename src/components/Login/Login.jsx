export const LoginPage = (props) => {
	return <div>
		<p className="notAuthorized">You need authorize</p>
		<a href="https://social-network.samuraijs.com/login" target="_blank" without rel="noreferrer">
			<button className="btn" style={{ margin: "0 auto", display: "block" }}>
				Go Login
			</button>
		</a>
	</div>
}