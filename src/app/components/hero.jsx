import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
            
            <div className="container mx-auto px-6 py-16 w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-2/3 space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                            Algorithm Visualizer
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                        Explore algorithms with 
                        <span className="font-semibold text-blue-600 dark:text-blue-400"> step-by-step visualizations</span>,
                        simplifying the learning process and making it more 
                        <span className="font-semibold text-purple-600 dark:text-purple-400"> engaging</span>
                        for a better understanding.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Interactive Learning</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Real-time Visualization</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Multiple Algorithms</span>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/algorithm.png"
                                alt="Algorithm Visualization"
                                width={300}
                                height={200}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

