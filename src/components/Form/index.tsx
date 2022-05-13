import { ArrowLeft, SmileyWink } from "phosphor-react";
import { useState } from "react";
import { Header, optionType } from "../Header";
import { Success } from "../Success";

import './styles.css'

interface IFormProps {
  option: string
}

export function Form ({
  option
}: IFormProps) {
  const [employeeName, setEmployeeName] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [sendFeedback, setSendFeedback] = useState<boolean>(false)

  function handleGetEmployeeName(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement
    setEmployeeName(target.value)
  }

  function handleGetComment(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement
    setComment(target.value)
  }

  function handleSendReview(e: React.FormEvent) {
    e.preventDefault()
    console.log({
      employeeName,
      comment,
      option
    })

    setSendFeedback(true)
  }
  return (
    
    <>
      {
        !sendFeedback ?
        <div className="option">
          <form onSubmit={handleSendReview}>
            <textarea placeholder="Envie um comentário (opcional)" onChange={handleGetComment}/>
            
            <select name="employees" value={employeeName as string} onChange={handleGetEmployeeName}>
              <option defaultValue="default" hidden>Selecione um funcionário</option>T
              <option value="Carla Batista">Carla Batista</option>
              <option value="Bruna de Oliveira">Bruna de Oliveira</option>
              <option value="Fernando da Silva">Fernando da Silva</option>
              <option value="Matheus Silva">Matheus Silva</option>
            </select>

            <button type="submit">Enviar avaliação</button>
          </form>
        </div>
        :
        <>
          <Success />
        </>
      }
    </>
  )
}