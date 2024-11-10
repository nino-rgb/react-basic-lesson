type propsText = {text:string};

export const TEST = (props:propsText) =>{
  return(
    <button>{props.text}</button>
  )
}