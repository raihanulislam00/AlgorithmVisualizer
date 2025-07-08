import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Settings, BarChart3 } from 'lucide-react';

import { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Controls</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Configure visualization settings
                        </p>
                    </div>

                    {/* Algorithm Selection */}
                    <div className="space-y-3">
                        <CustomSelect
                            title="Visualization Mode"
                            options={["Sieve of Eratosthenes", "Ulam Spiral"]}
                            onChange={this.props.setAlgo}
                        />
                        <div className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                            {this.props.currentAlgo === 0 
                                ? "Classic algorithm for finding primes" 
                                : "Spiral pattern showing prime distribution"
                            }
                        </div>
                    </div>

                    {/* Speed Control */}
                    <div className="space-y-3">
                        <CustomSlider
                            onChange={this.props.onChangeSpeed}
                            title="Animation Speed"
                            marks={false}
                            defaultValue={10}
                            step={1}
                            min={10}
                            max={50}
                            isDisabled={this.props.isRunning}
                        />
                        <div className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                            Slower speeds show more detail
                        </div>
                    </div>

                    {/* Range Control */}
                    <div className="space-y-3">
                        <CustomSlider
                            onChange={this.props.onChangeValues}
                            title="Number Range"
                            marks={false}
                            defaultValue={100}
                            step={1}
                            min={10}
                            max={500}
                            isDisabled={this.props.isDisabled}
                        />
                        <div className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                            Find primes from 1 to {this.props.totalNumbers || 100}
                        </div>
                    </div>

                    {/* Statistics */}
                    {this.props.primeCount > 0 && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <BarChart3 className="w-4 h-4" />
                                Statistics
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="text-center">
                                    <div className="font-bold text-lg text-blue-600 dark:text-blue-400">
                                        {this.props.primeCount}
                                    </div>
                                    <div className="text-xs text-gray-500">Primes Found</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-lg text-purple-600 dark:text-purple-400">
                                        {Math.round((this.props.primeCount / this.props.totalNumbers) * 100)}%
                                    </div>
                                    <div className="text-xs text-gray-500">Density</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 transition-all duration-200 transform hover:scale-[1.02]"
                            onClick={this.props.onVisualize}
                            disabled={this.props.isDisabled}
                        >
                            <Play className="w-4 h-4 mr-2" />
                            {this.props.isRunning ? 'Running...' : 'Start Visualization'}
                        </Button>
                        
                        <Button
                            variant="outline"
                            className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                            onClick={this.props.onRefresh}
                            disabled={this.props.isDisabled}
                        >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reset
                        </Button>
                    </div>

                    {/* Loading indicator */}
                    {this.props.isRunning && (
                        <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 ml-2">
                                Processing...
                            </span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Menu;