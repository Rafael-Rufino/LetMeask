import { ButtonHTMLAttributes } from "react"


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps){

  return (
    <button 
        className= {`button ${isOutlined ? 'outlined' : ''}`}
        {...props}/>
  )
}


//aula01 codigo
// #together

//aula02
//#unidade

//aula03
//#embuscadeevolução

//aula04
// #legacy