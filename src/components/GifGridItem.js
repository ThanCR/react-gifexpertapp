import React from 'react'
                            //se puede usar props pero para no redundar tanto entonces se simplifica con desestructuracion
export const GifGridItem = ({id, title, url}) => {


    return (

        
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
