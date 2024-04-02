import "./Wrapper.scss"

export const Wrapper = ({className, children}) => {
  return (
    <div className={`wrapper ${className || ""}`}>
        {children}
    </div>
  )
}

// minuto 18:40
