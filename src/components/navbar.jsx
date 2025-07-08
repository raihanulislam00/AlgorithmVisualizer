import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Home, Sparkles } from 'lucide-react'

export default function Navbar(props) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {props.title}
          </span>
        </Link>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="lg" asChild className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-gray-300 hover:border-gray-900 dark:border-gray-600 dark:hover:border-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
          >
            <Link href="https://github.com/TamimEhsan/AlgorithmVisualizer" className="flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

