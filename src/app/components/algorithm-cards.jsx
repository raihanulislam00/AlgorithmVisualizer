import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'



const algorithms = [
  {
    id: 'pathfinder',
    title: "Pathfinder",
    description: "Visualize graph algorithms like dijkstra, BFS, DFS",
    image: '/images/graph.png'
  },
  {
    id: 'recursion-tree',
    title: 'Recursion Tree',
    description: "The process in which a function calls itself directly or indirectly is called recursion",
    image: '/images/recursion.jpg'
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithm',
    description: "Compare different sorting algorithms",
    image: '/images/sort.png'
  },
  {
    id: 'recursive-sorting',
    title: 'Recursive Sorting',
    description: "Compare different recursive sorting algorithms",
    image: '/images/sort.png'
  },
  {
    id: 'n-queen',
    title: 'N Queen',
    description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
    image: '/images/queen.PNG'
  },
  {
    id: 'turing-machine',
    title: 'Turing Machine',
    description: "A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
    image: '/images/turing.jpg'
  },
  {
    id: 'prime-numbers',
    title: 'Prime Numbers',
    description: "Visualize how Seive is better than brute force",
    image: '/images/primes.jpg'
  },
  {
    id: 'convex-hull',
    title: 'Convex Hull',
    description: "The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
    image: '/images/convex-hull.png'
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: "Binary search is an efficient algorithm for finding an item from a sorted list of item",
    image: '/images/binary-search.png'
  },
  // {
  //   id: '15-puzzle',
  //   title: '15 Puzzle',
  //   description: "The 15-puzzle is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing",
  //   image: '/images/15puzzle.PNG'
  // }
]

export function AlgorithmCards() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Choose Your Algorithm
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Select from our collection of interactive algorithm visualizations to enhance your understanding
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {algorithms.map((algorithm, index) => (
          <Link key={algorithm.id} href={`/${algorithm.id}`} className="block group">
            <div className={`
              relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
              animate-fade-in-up
            `} style={{ animationDelay: `${index * 100}ms` }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={algorithm.image}
                  alt={algorithm.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                  Interactive
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {algorithm.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {algorithm.description}
                </p>
                
                {/* Action indicator */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                    Click to explore
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

