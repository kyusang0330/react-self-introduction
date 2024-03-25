import React from 'react';


const Grid = (props) => {

    return (
        <div className="container text-center">
            <div className="row g-2">
                <div className="col-6">
                    {props.grid1}
                </div>
                <div className="col-6">
                    {props.grid2}
                </div>
            </div>
        </div>
    );
};


export default Grid;