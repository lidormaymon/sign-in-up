const showWelcome = () => {
    const welcomeMsg = document.getElementById('container')
    axios.get('http://localhost:3000/users')
    .then(response => {
        const data = response.data
        welcomeMsg = `Welcome ${response.username}`
    })
}