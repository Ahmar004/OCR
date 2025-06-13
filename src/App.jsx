import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = {
    'Ai/ML with Python': [
      'https://www.kaggle.com/learn/machine-learning',
      'https://scikit-learn.org/stable/tutorial/basic/tutorial.html'
    ],
    'Mern-stack web-dev': [
      'https://www.mongodb.com/mern-stack',
      'https://reactjs.org/docs/getting-started.html'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <div className="text-xl font-bold">OCR</div>
        <ul className="flex gap-6 text-sm md:text-base">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="relative">
            <span
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Resources
            </span>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-md">
                {Object.keys(categories).map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowDropdown(false);
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="hover:text-blue-400 cursor-pointer">Contribute</li>
          <li className="hover:text-blue-400 cursor-pointer">Help</li>
        </ul>
      </nav>

      {/* Main Content */}
      {!selectedCategory && (
        <div className="text-center p-6">
          {/* Header Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OCR - Open-source Computer Science Repository
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Your one-stop platform to find and share awesome resources related to any skill in the field of CS.
          </p>
          <a
            href="https://chat.whatsapp.com/DStsHNqYnU5GVTXU3VpVeX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            Join OCR WhatsApp Community
          </a>

          {/* Skills Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Explore Skills:</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resource View */}
      {selectedCategory && (
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">{selectedCategory}</h2>
          <ul className="space-y-4">
            {categories[selectedCategory].map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4 mt-10 text-sm text-gray-400">
        "Start building, start learning — one project at a time. Great developers were once beginners too."
      </footer>
    </div>
  );
}

export default App
