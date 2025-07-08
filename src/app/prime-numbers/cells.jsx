import React, {Component} from 'react';
import Cell from "./cell";

class Cells extends Component {
    render() {
        // Calculate responsive grid columns based on screen size and number of cells
        const getGridCols = () => {
            const cellCount = this.props.cells.length;
            if (cellCount <= 50) return "grid-cols-10";
            if (cellCount <= 100) return "grid-cols-10 md:grid-cols-12 lg:grid-cols-15";
            if (cellCount <= 200) return "grid-cols-8 md:grid-cols-12 lg:grid-cols-16 xl:grid-cols-20";
            return "grid-cols-6 md:grid-cols-10 lg:grid-cols-15 xl:grid-cols-20 2xl:grid-cols-25";
        };

        return (
            <div className={`grid ${getGridCols()} gap-1 p-4 justify-items-center max-w-full`}>
                {this.props.cells.map((cell, cellidx) => {
                    return (
                        <Cell
                            key={cellidx}
                            cell={cell}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cells;