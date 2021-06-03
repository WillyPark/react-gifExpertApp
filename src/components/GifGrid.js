// import { useState, useEffect } from "react"; //Con el useEffect ejecutamos código de manera condicional
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    //Este código lo pusimos mejor en nuestro Custom Hook
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]) //En caso de volver a hacer la petición HTTP pasamos la category

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img } //Creamos un nuevo objeto y lo mandamos
                        />
                    ))
                }
            </div>
        </>
    )
}
