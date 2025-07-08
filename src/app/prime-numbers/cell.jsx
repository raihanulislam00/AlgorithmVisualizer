import React, {Component} from 'react';

class Cell extends Component {
    render() {
        return (
            <div className={this.getClass()}>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                    {this.props.cell.val}
                </span>
            </div>
        );
    }
    
    getClass = () => {
        const { val, isVisiting, isChecking, isPrime } = this.props.cell;
        
        const baseClasses = "w-12 h-12 m-1 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 transform";
        
        if (isPrime) {
            return `${baseClasses} bg-gradient-to-br from-green-400 to-green-600 border-green-500 text-white shadow-lg animate-bounce scale-110`;
        } else if (isVisiting) {
            return `${baseClasses} bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-500 text-blue-800 dark:text-blue-200 animate-pulse scale-105`;
        } else if (isChecking) {
            return `${baseClasses} bg-gray-400 border-gray-500 text-white shadow-md scale-105`;
        } else {
            return `${baseClasses} bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600`;
        }
    }
}

export default Cell;