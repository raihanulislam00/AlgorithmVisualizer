import { FeatureHighlight } from '@/components/ui-components'
import { Play, Eye, Zap, BookOpen, Code, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Play className="w-6 h-6 text-white" />,
      title: "Interactive Visualizations",
      description: "Watch algorithms come to life with step-by-step animations and real-time visual feedback."
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Clear Visual Learning",
      description: "Complex algorithms made simple through intuitive visual representations and guided explanations."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Real-time Performance",
      description: "Observe algorithm efficiency and performance metrics as they execute in real-time."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Educational Content",
      description: "Comprehensive explanations and theory behind each algorithm to deepen your understanding."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Multiple Algorithms",
      description: "Explore sorting, searching, graph algorithms, and more with our extensive collection."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Open Source",
      description: "Free to use, modify, and contribute to. Join our community of learners and developers."
    }
  ]

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Algorithm Visualizer</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience algorithm learning like never before with our comprehensive, interactive, and visually engaging platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureHighlight 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
