import { type ButtonProp } from "../types/portfolio.ts"

const Button = ({ children, className, onClick, id } : ButtonProp) => (
    <button className={className} id={id} onClick={onClick}>
        {children}
    </button>
)

export { Button }