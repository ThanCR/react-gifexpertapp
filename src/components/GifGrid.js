import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // useEffect(() => {
    //     getGifs(category)
    //         .then(img => setImgs(img));
    // }, [ category ])
                //: sirve para renombrar en la misma clase que estoy codeando, de manera que data=images
    const {data:images, loading} = useFetchGifs( category );


    return (
        <>
            <p> {category} </p>

            {loading && <p>Loading</p>}

            <div className="card-grid">

                {images.map(img => (
                    <GifGridItem
                        key={img.id}//argumentos que le voy a pasar al componene para poder procesarlo (se lo paso en las props)
                        {...img} />
                )
                )}

            </div>
        </>
    )
}
