import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [coords, setCoords] = useState({x:0, y:0})

    const { x,y } = coords;
    useEffect(() => {
        
        const mouseMove = (e) =>{
            //console.log(' :D ');
            const coords = { x: e.x, y: e.y };
            setCoords (coords)
            //console.log(coors);
        }
        //
        window.addEventListener('mousemove', mouseMove);
           //console.log(e);
           //console.log(' :D ');

        return () => {
            window.removeEventListener('mousemove', mouseMove);
           // console.log('componente desmontado');
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
