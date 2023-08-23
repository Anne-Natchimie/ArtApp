import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase'

const Detail = () => {

    const {id} = useParams()
    const [color, setColor] = useState({})

    const getColor = async () => {

        setLoading(true)

        const rqColor = doc(collection(firestore, 'colors', idvideo))
        const snapColor = await getDoc(rqColor)

        if (snapColor.exists){
            setColor(snapColor.data())
        }

        setLoading(false)

    }

    useEffect(()=>{
        getColor(id)
    }, [id])

    if (!color) {
        return <div>Chargement...</div>; // Ajoutez une indication de chargement
    }

    return (
        <div>

            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={color.image}
                    alt={color.name}
                    className='object-contain w-[500px] h-[500px]'
                />
            </div>

        </div>
    )
}

export default Detail