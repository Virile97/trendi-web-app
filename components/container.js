import utils from "@utils/index"

const Container = ({children, className}) => {
  return(
    <div className={
      utils.buildClass(
        className,
        'w-full max-w-[75rem]'
      )
    }>
      {children}
    </div>
  )
}

export default Container