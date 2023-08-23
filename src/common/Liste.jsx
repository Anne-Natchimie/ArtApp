import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import Colors from './Colors'

const Liste = () => {

    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(true)

    const getColors = async () => { 

        setLoading(true) 

        const rqColors = query(collection(firestore, "colors"))
        const snapColors = await getDocs(rqColors)

        if (!snapColors.empty) {

            const DataColors = snapColors.docs.map(item => {
                return {
                    id : item.id, 
                    ...item.data()
                }

            })

            setColors(DataColors)

        }

        setLoading(false)

    }

    useEffect( () => {
        getColors()
    }, [])

    return (
        <div>

            <div className='flex flex-col justify-center gap-5'>

                <h2 className='text-4xl font-palanquin font-bold'>
                    OURS <span className='text-coral-red'> ART </span> COLORS
                </h2>

            </div>

            <div className='mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>

                {loading ? 'chargement' : 

                    colors.map(itemColors => (<Colors key={itemColors.id}
                        data={itemColors} />))

                }

            </div>

        </div>
    )
}

export default Liste