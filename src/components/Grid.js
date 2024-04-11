import React from 'react';
import "../CSS/Grid.css"

const Grid = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="first col-6">
                    {props.grid1}
                </div>
                <div className="second col-6">     {/*여기 칸을 없애서 할수 있지 않을까
                                                        여기 칸 없애고 한번 짜보기*/}
                    {props.grid2}
                </div>
            </div>
        </div>
    );
};


export default Grid;