import { Smiley, SmileySad, SmileyWink } from "phosphor-react";
import React from "react";

import './styles.css'

interface IOptionsProps {
  sendTheOption: (e: React.MouseEvent) => void
}

export function Options({
  sendTheOption
}: IOptionsProps) {
  return (
    <div className="options">
      <div 
        className="option" 
        onClick={sendTheOption}
      >
        <SmileyWink color="#4682B4" size={38}/>
        <span id="excellent">Ótimo</span>
      </div>
      
      <div 
        className="option" 
        onClick={sendTheOption}
      >
        <Smiley color="#4682B4" size={38}/>
        <span id="regular">Bom</span>
      </div>

      <div 
        className="option" 
        onClick={sendTheOption}
      >
        <SmileySad color="#4682B4" size={32} />
        <span id="bad">Ruim</span>
      </div>
    </div>  
      
  )
}