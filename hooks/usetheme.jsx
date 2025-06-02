import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export function usetheme(){
    console.log("usetheme function is running currently");
    return useContext(ThemeContext)
}