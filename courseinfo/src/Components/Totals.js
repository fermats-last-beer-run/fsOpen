import React from "react";

const Totals = ({content}) => {
    return(
        <div>
            <p>
                Number of exercises {content.reduce(((sum, c) => sum + c.exercises ), 0)}
            </p>
        </div>

    )
}

export default Totals;