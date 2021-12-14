const inputEmail = document.getElementById('email')
const button = document.getElementById('button')

function start() {
  inputEmail.focus()
  sendEmail()
}

function showAlert(message) {
  alert(message)
}

function isEmptyInput() {
  const regexValidateEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)

  if (inputEmail.value === '') {
    showAlert('E-mail vazio!')
    inputEmail.focus()
  } else if (!regexValidateEmail) {
    showAlert('E-mail inválido!')
    inputEmail.focus()
  } else {
    showAlert('E-mail enviado com sucesso!!!')
    inputEmail.textContent = ''
  }
}

function sendEmail() {
  button.addEventListener('click', () => {
    isEmptyInput()
  })
}

start()
