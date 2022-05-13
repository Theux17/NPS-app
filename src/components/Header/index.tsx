import { ArrowLeft, SmileyWink, X } from "phosphor-react";
import { reviewItems } from "../Container";

export type optionType = keyof typeof reviewItems

interface IHeaderProps {
  title?: string,
  typeOption?: optionType,
  submit?: boolean
  handleCloseContainer?: () => void;
  handleRestoreOptions?: () => void;
}

export function Header ({
  title,
  typeOption,
  submit,
  handleCloseContainer,
  handleRestoreOptions
}:IHeaderProps) {
  return (
    <header>
      

      { 
      typeOption && !submit ? 
        <>
          <ArrowLeft 
            className="arrow-left" 
            onClick={handleRestoreOptions}
          />
          <div className="option-icon">
            {reviewItems[typeOption].icon}
            <h4 className="title">{ title }</h4>
          </div>

          <span onClick={handleCloseContainer}>
            <X
              className="close-button" 
              size={ 14 }
              />
          </span>
        </>
        : <>
        </>
      }

      {
        !submit && !typeOption? 
        <>
          <h4 className="title">{ title }</h4>
          <span onClick={handleCloseContainer}>
            <X
              className="close-button" 
              size={ 14 }
              />
          </span>
        </>
        : <></>
      }
    </header>
  )
}
