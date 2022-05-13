import { ChatTeardropDots } from "phosphor-react";
import { Container } from "../Container";

import './styles.css'

interface IWidgetProps {
  handleOpenContainer: () => void
  handleCloseContainer: () => void

  isWidgetOpen: boolean
}

export function Widget({
  handleOpenContainer,
  handleCloseContainer,
  isWidgetOpen
}: IWidgetProps) {

  return (
    <>
      <button type="button" className="widget-button" onClick={handleOpenContainer}>
        <ChatTeardropDots 
          color='#F4F4F5' 
          size={30} 
        />
      </button>
      
      {
        isWidgetOpen === true ? <Container title="Informe uma avaliação" handleCloseContainer={handleCloseContainer} />  : ''
      }
      
    </>
  )
}