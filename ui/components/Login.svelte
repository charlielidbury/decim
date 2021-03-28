<script>
    // unique to this client :))
    // used to figure out which accessToken to use for which 
    const sessionId = Math.random().toString(16).substr(2, 8);
    localStorage.setItem("sessionId", sessionId);

    const clientId = 'oauth2client_0000A5dpELG1M7uTWsSk2D';
    const redirect_uri = `http://localhost:5000/api/callback`;
	const monzoAuthUrl = 'https://auth.monzo.com';

	const link = `${monzoAuthUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code`;

</script>

<h1>Please login first</h1>
<a href={link}>Login</a>