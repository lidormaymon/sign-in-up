function chkData() {
    const userName = document.getElementById('user-name').value
    const userPwd = document.getElementById('password-html').value
    const alretMessage = document.getElementById('error-message')
    axios.get('http://localhost:3000/users')
        .then(response => {
            const data = response.data;
            const user = data.find(user => user.username === userName || user.email === userName  && user.password === userPwd)
            if (user) {
                window.location.href = 'pages/welcome-page.html';
                log('wofks')
            }else{
                alretMessage.style.color = 'red'
                alretMessage.innerHTML = 'Wrong password or username'
            }
        })
}