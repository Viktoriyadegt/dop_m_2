import {ButtonHTMLAttributes} from "react";
import s from './SupperButton.module.css'


type ColorProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type SupperButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
    & {
    background?: string
    disabled?: boolean
}
    & Omit<ColorProps, 'color4' | 'color5'>

export const SupperButton = (props: SupperButtonProps) => {
    const {
        onClick,
        children,
        className,
        color,
        disabled,
        ...rest
    } = props
    console.log(rest.color3)


/*    const SupperClassName = s.button
    +(disabled
        ? ' ' + s.disabled
        : color === 'red'
        ? ' ' + s.red
        : color === 'secondary'
        ? ' ' + s.secondary
        : ' ' + s.default)
    + (className? ' ' + className : '')*/

    //const finalClassName = s.button + ' ' + s.red
    const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled: ''}
    `

    return (
        <div>
            <button className={finalClassName} onClick={onClick}>{children}</button>
        </div>
    );
};