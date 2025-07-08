"use client";

import Navbar from '@/components/navbar';
import { seive } from "@/lib/algorithms/prime";
import { Component } from 'react';
import Cells from "./cells";
import Menu from "./menu";
import Spiral from "./spiral";

class Seive extends Component {
    state = {
        number: 100,
        cells: [],
        isRunning: false,
        speed: 500,
        primes: [],
        maxPrime: 0,
        algo: 0
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const cells = getCells(this.state.number);
        this.setState({ cells });
    }
    setAlgo = (val) => {
        this.setState({ algo: val });
    }

"use client";

import Navbar from '@/components/navbar';
import { seive } from "@/lib/algorithms/prime";
import { Component } from 'react';
import Cells from "./cells";
import Menu from "./menu";
import Spiral from "./spiral";

class Seive extends Component {
    state = {
        number: 100,
        cells: [],
        isRunning: false,
        speed: 500,
        primes: [],
        maxPrime: 0,
        algo: 0
    }

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const cells = getCells(this.state.number);
        this.setState({ cells });
    }
    
    setAlgo = (val) => {
        this.setState({ algo: val });
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
                <Navbar title="Prime Numbers" />
                
                {/* Header Section */}
                <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-6 py-8">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Prime Number Visualization
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Watch the Sieve of Eratosthenes algorithm in action and explore prime numbers through beautiful visualizations
                            </p>
                            <div className="flex justify-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
                                    <span>Prime Numbers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                                    <span>Composite Numbers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-blue-400 rounded animate-pulse"></div>
                                    <span>Currently Checking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 min-h-[calc(100vh-200px)]">
                    <Menu
                        onChangeSpeed={this.changeSpeed}
                        onChangeValues={this.handleValueIncease}
                        onVisualize={this.startAlgo}
                        onRefresh={this.handleRefresh}
                        isDisabled={this.state.isRunning}
                        setAlgo={this.setAlgo}
                        currentAlgo={this.state.algo}
                        isRunning={this.state.isRunning}
                        totalNumbers={this.state.number}
                        primeCount={this.state.cells.filter(cell => cell.isPrime).length}
                    />
                    
                    <div className="flex-1 p-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full overflow-auto">
                            {this.state.algo === 0 && (
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                            Sieve of Eratosthenes
                                        </h3>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Numbers 1 - {this.state.number}
                                        </div>
                                    </div>
                                    <Cells
                                        num={this.state.number}
                                        cells={this.state.cells}
                                    />
                                </div>
                            )}
                            {this.state.algo === 1 && (
                                <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-semibold text-white">
                                            Ulam Spiral
                                        </h3>
                                        <div className="text-sm text-gray-300">
                                            Prime Distribution Pattern
                                        </div>
                                    </div>
                                    <Spiral
                                        num={this.state.number}
                                        primes={this.state.primes}
                                        maxPrime={this.state.maxPrime}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeSpeed = (speed) => {
        //console.log(typeof speed);
        this.setState({ speed: 600 - speed * 10 });
    }
    handleValueIncease = (value) => {
        this.setState({ number: value });
        if (this.state.algo === 0) {
            this.setState({ cells: getCells(value), isRunning: false });

        }
        // console.log(value);
    }
    handleRefresh = () => {
        this.setState({ cells: getCells(this.state.number), isRunning: false });
    }

    startAlgo = () => {
        if (this.state.algo === 0) {
            this.startSeive();
        } else if (this.state.algo === 1) {
            this.startSpiral();
        }
    }
    startSpiral = async () => {
        let pprimes = seive(this.state.number * 100);
        let primes = [];
        this.setState({ primes: [], maxPrime: pprimes[pprimes.length - 1] });
        let mod = Math.ceil(this.state.number / 10);
        for (let i = 0; i < pprimes.length; i++) {
            primes.push(pprimes[i]);

            if (i % mod === 0) {
                this.setState({ primes });
                await sleep(10);
            }
        }
        console.log('done');
    }
    startSeive = async () => {
        const speed = this.state.speed;
        this.setState({ isRunning: true });
        const prime = [];
        for (let i = 0; i <= this.state.number; i++) {
            prime.push(1);
        }
        prime[0] = prime[1] = 0;
        let changedCells = this.state.cells;
        let prevCheck = -1;
        let counter = 0;
        for (let i = 2; i <= this.state.number; i++) {
            if (prime[i] === 1) {
                //   setTimeout(()=>{
                changedCells = getNewCellPrimeToggled(changedCells, i - 1);
                this.setState({ cells: changedCells });
                //},counter*speed);
                await sleep(this.state.speed);
                counter++;
                for (let j = i * i; j <= this.state.number; j += i) {
                    //setTimeout(()=>{
                    if (prevCheck != -1) {
                        changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
                    }
                    prevCheck = j - 1;
                    changedCells = getNewCellCheckToggled(changedCells, j - 1);
                    changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
                    this.setState({ cells: changedCells });
                    //  },counter*speed);
                    await sleep(this.state.speed);
                    counter++;
                    prime[j] = 0;
                }
            }
        }
        //  setTimeout(()=>{
        changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
        this.setState({ cells: changedCells, isRunning: false });
        // },counter*speed);
    }
}

const getNewCellPrimeToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isPrime: true
    }
    newCells[pos] = newCell;
    return newCells;
}

const getNewCellVisitingToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isVisiting: !cell.isVisiting
    }
    newCells[pos] = newCell;
    return newCells;
}

const getNewCellCheckToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
        ...cell,
        isChecking: true
    }
    newCells[pos] = newCell;
    return newCells;
}

const getCells = (rows) => {
    const cells = [];
    for (let cell = 1; cell <= rows; cell++) {
        cells.push(createCell(cell))
    }
    return cells;
}
const createCell = (val) => {
    return {
        val,
        isChecking: false,
        isVisiting: false,
        isPrime: false
    };
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default Seive;