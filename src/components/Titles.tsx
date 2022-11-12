import { FC } from "react"


type PropsType = {
    title: string
}
export const Subtitle: FC<PropsType> = ({title}) => {
    return (
        <h2 className='text-darkBlue text-[28px] font-bold border-b border-lineColor pb-3 sm:pb-1 sm:border-0 '>{title}</h2>
    )
}