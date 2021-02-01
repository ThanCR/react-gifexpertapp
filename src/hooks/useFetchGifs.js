// siempre que empiece con use se trata de un hook
// que es como una funcion que yo puedo reutilizar de una forma mas facil

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs.js'


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {

                    setstate({
                        data: imgs,
                        loading: false
                    })

                });


            })

    }, [category])

    return state;//{data:[], loading: true };

}


