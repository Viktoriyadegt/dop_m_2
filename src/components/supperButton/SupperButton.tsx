import {ButtonHTMLAttributes} from "react";


type ColorProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type SupperButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
    & { background: string }
    & Omit<ColorProps, 'color4' | 'color5'>

export const SupperButton = (props: SupperButtonProps) => {
    const {onClick, children, ...rest} = props
    console.log(rest.color3)
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    );
};