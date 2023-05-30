import React, { useRef, useState } from 'react'
import './App.css'

function App() {

  const nameRef = useRef()
  const mailRef = useRef()
  const pwRef = useRef()
  const confPwRef = useRef()
  const agreeRef = useRef()

  function handlerSubmit(e) {

    const passwordCheck = pwRef.current.value === confPwRef.current.value ? true : false

    if (!passwordCheck) {
      alert('[ERRO] As senhas não conferem!')
    } else {
      alert('[ERRO] Dados enviados com sucesso!')
      console.log('INFO',
        nameRef.current.value,
        mailRef.current.value,
        pwRef.current.value,
        confPwRef.current.value,
        agreeRef.current.value
      )
    }
    e.preventDefault()
  }

  const [ValidForm, setValidForm] = useState(false)


  function ValidateForm() {


    const validInfo = nameRef.current.value &&
      mailRef.current.value &&
      pwRef.current.value &&
      confPwRef.current.value &&
      agreeRef.current.checked


    setValidForm(validInfo)

  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label htmlFor="">Full name: </label>
          <input type="text" onChange={ValidateForm} ref={nameRef} />
        </fieldset>
        <fieldset>
          <label htmlFor="">E-mail: </label>
          <input type="email" onChange={ValidateForm} ref={mailRef} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Type your password: </label>
          <input type="password" onChange={ValidateForm} ref={pwRef} /> <br />
          <label htmlFor="">Confirm password: </label>
          <input type="password" onChange={ValidateForm} ref={confPwRef} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Aceitar os termos de uso </label>
          <input type="checkbox" onChange={ValidateForm} name="agree" value="AGREE" ref={agreeRef} />
        </fieldset>
        <button type="submit" disabled={ValidForm ? undefined : true}>ENVIAR</button>
      </form>

    </>
  )
}

export default App
