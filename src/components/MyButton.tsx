import React from 'react'



interface BtnProps {
    customOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MyButton: React.FC<BtnProps> = ({customOnClick}) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        console.log('Button clicked')
    }


    return (
        <button onClick={(e)=>{customOnClick(e)}} >Click Me!</button>
    )
}

export default MyButton