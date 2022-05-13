import { Smiley, SmileySad, SmileyWink } from "phosphor-react";
import { useState } from "react";
import { Form } from "../Form";
import { Header, optionType } from "../Header";
import { Options } from "../Options";
import { Success } from "../Success";

import './styles.css'
interface IContainerProps {
  title: string
  handleCloseContainer: () => void
}

export const reviewItems = {
  'Ótimo': {
    name: 'excellent',
    icon: <SmileyWink color="#4682B4" size={38}/>

  },
  'Bom':{
    name: 'regular',
    icon: <Smiley color="#4682B4" size={38}/>
  },
  'Ruim':{
    name: 'sad',
    icon: <SmileySad color="#4682B4" size={38}/>
  }
}
 
export function Container({ title, handleCloseContainer }:IContainerProps) {
  const [sendOption, setSendOption] = useState<optionType | null>(null)

  function sendTheOption(e: React.MouseEvent) {
    const target = e.target as HTMLTextAreaElement
    setSendOption(target.innerText as optionType)
  }

  function handleRestoreOptions() {
    setSendOption(null)
  }

  return (
    <div className="container">
      {
        !sendOption ? (
          <>
            <Header 
              title="Selecione uma avaliação" 
              handleCloseContainer={handleCloseContainer}
              /> 
            <Options sendTheOption={sendTheOption}/>
          </>
        )
        :
        (
          <>
            <Header 
              title={sendOption} 
              typeOption={sendOption}
              handleCloseContainer={handleCloseContainer}
              handleRestoreOptions={handleRestoreOptions}
            /> 
            <Form option={sendOption}/>
          </>
        )

      }
      

    </div>
  )
}