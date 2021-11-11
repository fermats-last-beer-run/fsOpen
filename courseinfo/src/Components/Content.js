import React from 'react'
import Part from './Part'

const Content = ({content}) => {
    return(
        <div>
            {content.map((c) => 
                <Part content={c.name} total={c.exercises} /> ) 
            }
        </div>
    )
}

export default Content;