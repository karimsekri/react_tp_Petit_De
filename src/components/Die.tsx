
import { useCallback, useEffect, useState } from "react";

const Die = (props: {onRoll?: (newValue: number) => void }) => {
    const min = 1;
    const max = 6;
    let value =  Math.floor(Math.random() * (max - min) + min);
    const [nbreAleatoire, setnbreAleatoire] = useState(value);

    useEffect(()=>{
        props.onRoll && props.onRoll(nbreAleatoire) 
    },[nbreAleatoire]);

    const genererNbreAleatoire = useCallback(
        () => {
            const rand = Math.floor(Math.random() * (max - min) + min)
            props.onRoll && props.onRoll(rand)   
            setnbreAleatoire(rand)
        }, [nbreAleatoire]
    );



    return (
        <div onClick={genererNbreAleatoire }  >
            <h2>Dé : {nbreAleatoire} </h2>

        </div>
    );
}

export default Die;


