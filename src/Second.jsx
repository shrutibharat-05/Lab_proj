import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { Link } from 'react-router-dom';

function Second() {
  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <h1 className="text-lg font-semibold">Google Cloud Skills Boost</h1>
        </div>
      </header>
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <ol className="flex space-x-2 text-sm text-gray-600">
             <li>
             <Link to="/">Google Cloud Next 2023 Learning Path</Link>
             </li>
            
             <li>&gt;</li>
            <li>Explore and Evaluate Models using Model Garden</li>
          </ol>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/4 lg:pr-8 flex flex-col space-y-4 mb-8 lg:mb-0">
          {/* Left Sidebar - Start Lab Button and Timer */}
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full">Start Lab</button>
            <div className="text-2xl font-mono">00:30:00</div>
          </div>
          
          {/* Left Sidebar - Lab Instructions and Tasks */}
          </div>

        <div className="flex-1">
          {/* Central Content */}
          <div className="flex flex-col items-center justify-start bg-white p-4 rounded-md border border-gray-200 space-y-6 mb-4">
    <h2 className="text-4xl font-bold mb-4">Explore and Evaluate Models using Model Garden</h2>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-flask"></i>
              <span>Lab</span>
              <span>&bull;</span>
              <span>30 minutes</span>
              <span>&bull;</span>
              <span>1 Credit</span>
              <span>&bull;</span>
              <span>Introductory</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-800 p-4 rounded-md">
              <i className="fas fa-info-circle"></i>
              <span>This lab may incorporate AI tools to support your learning.</span>
            </div>
            
            {/* Additional Content Below AI Info */}
            <div className="mt-4 w-full overflow-y-auto max-h-64 p-2 border rounded-md">
            <h3 className="text-xl font-semibold">Additional Information</h3>
              <p className="text-sm text-gray-700 mt-2">
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
               in this lab, you'll explore how to evaluate and fine-tune machine learning models. You'll also gain insights into the integration of AI tools that enhance your learning experience.
                </p>
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-1/4 lg:pl-8 mt-8 lg:mt-0">
          <div className="bg-white border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Lab instructions and tasks</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>GSP1166</li>
              <li>Overview</li>
              <li>Objectives</li>
              <li>Setup and requirements</li>
              <li>Task 1. Enable APIs</li>
              <li>Task 2. Explore Model Garden</li>
              <li>Task 3. Explore Model types</li>
              <li>Congratulations!</li>
            </ul>
          </div>
          <div className="mt-4 text-right">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Next</button>
          </div>
        </aside>
        
      </main>
    </div>
  );
}

// Export the App component
export default Second;

// Create root and render the App component using React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Second />);
