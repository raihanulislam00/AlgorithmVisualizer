'use client'

import { useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';

export default function Footer() {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    // Simulate fetching visitor count
    // In a real application, you would fetch this from an API
    setVisitors(Math.floor(Math.random() * 10000))
  }, [])

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6 mt-20 border-t border-gray-200 dark:border-gray-700" suppressHydrationWarning={true}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Copyright section */}
          <div className="text-center md:text-left">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              © {new Date().getFullYear()} Mohammad Tamimul Ehsan. All rights reserved.
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Built with ❤️ using Next.js & Tailwind CSS
            </div>
          </div>
          
          {/* GitHub buttons section */}
          <div className="flex flex-wrap justify-center gap-4 items-center" suppressHydrationWarning={true}>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <GitHubButton 
                href="https://github.com/TamimEhsan" 
                data-show-count="true" 
                data-size='large' 
                aria-label="Follow @TamimEhsan on GitHub"
              >
                Follow @TamimEhsan
              </GitHubButton>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-200">
              <GitHubButton 
                href="https://github.com/TamimEhsan/AlgorithmVisualizer" 
                data-icon="octicon-star" 
                data-size='large' 
                data-show-count="true" 
                aria-label="Star TamimEhsan/AlgorithmVisualizer on GitHub"
              >
                Star
              </GitHubButton>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-200">
              <GitHubButton 
                href="https://github.com/TamimEhsan/AlgorithmVisualizer/fork" 
                data-icon="octicon-repo-forked" 
                data-size='large' 
                data-show-count="true" 
                aria-label="Fork TamimEhsan/AlgorithmVisualizer on GitHub"
              >
                Fork
              </GitHubButton>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-200">
              <img 
                src="https://visitor-badge.laobi.icu/badge?page_id=TamimEhsan.AlgorithmVisualizer" 
                alt="Visitor count badge"
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Additional footer content */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Open source algorithm visualization tool • Made for learning and education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
