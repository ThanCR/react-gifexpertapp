//Clase para mejorar el functional component GifGrid, en los helpers se escriben los metodos o extractos de codigos que se pueden
//hacer externamente para simplificar las clases de los componentes


export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=HkuN1uavqRT6CE8u1BhLA9cE7XBJXM1C`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    });

    return gifs;

}


