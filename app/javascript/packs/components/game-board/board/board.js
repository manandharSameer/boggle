import React from "react";
import Tile from "../tile/tile";
import "./board.css"

const Board = props => {
    const { board } = props;
    return (
        <div >
            {board.map((row, index) => {
                return (
                    <div className="row" key={index}>
                        {row.map(tile => {
                            return (
                                <Tile
                                    selected={tile.selected}
                                    letter={tile.letter}
                                    key={tile.columnId}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
