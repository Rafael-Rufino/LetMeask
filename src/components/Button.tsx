import { ButtonHTMLAttributes } from "react"


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){

  return (
    <button className="button"{...props}/>
  )
}


//aula01 codigo
// #together

//aula02
//#unidade