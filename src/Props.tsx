type propsText = {text:string};

export const TEST = (props:propsText) =>{
  return(
    <div>{props.text}</div>
  )
}