import { type ButtonProp } from '../src/types/portfolio.ts'

export const Button = ({id, onClick, ariaLabel, ariaControls, children, ariaExpanded} : ButtonProp) => {
  return (
  <button id={id} onClick={onClick} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
    {children}
  </button>
  )
}
