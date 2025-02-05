import React from "react";
import { Link } from "react-router-dom";



  
    <div className="bg-white font-roboto">
      <div className="max-w-7xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-lg font-medium">Google Cloud Skills Boost</h1>
        </header>
        <main>
          <div className="flex items-center mb-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/rbRvUyl5msAoyYTpxHmgFihnd92NIEvZGLj1xWp8pLY.jpg"
              alt="Decorative icon"
              className="mr-2"
              width="40"
              height="40"
            />
            <h2 className="text-4xl font-bold">Google Cloud Next 2023 Learning Path</h2>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <div className="flex items-center mr-4">
              <i className="fas fa-box mr-1"></i>
              <span>5 activities</span>
            </div>
            <div className="flex items-center mr-4">
              <i className="fas fa-clock mr-1"></i>
              <span>Last updated 3 days</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-user mr-1"></i>
              <span>Managed by Google Cloud</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            This learning path contains courses and hands-on activities related to breakout session content and launches announced at Google Cloud Next 2023.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center">
            <i className="fas fa-arrow-right mr-2"></i>
            Start learning path
          </button>
        </main>
      </div>
    </div>
  







const courses = [
  {
    id: 1,
    title: "Introduction to Data Analytics on Google Cloud",
    duration: "8 hours",
    level: "Introductory",
    points: "400 pts",
    description:
      "This introductory course explores the basics of data analysis, including collection, storage, exploration, visualization, and sharing. This course also.",
    image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/529c4e7c41cc.png", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Introduction to AI and Machine Learning on Google Cloud",
    duration: "8 hours",
    level: "Introductory",
    points: "400 pts",
    description:
      "This course introduces the AI and machine learning (ML) offerings on Google Cloud that build both predictive and generative AI projects.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAo80l320pNja7FkRfwQDohdJC3TZnKVsuw&s", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    duration: "2 hours",
    level: "Introductory",
    points: "400 pts",
    description:
      "As the use of enterprise Artificial Intelligence and Machine Learning continues to grow, so too does the importance of building it responsibly.",
    image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/529c4e7c41cc.png", // Replace with actual image URL
  },
];

const CourseCard = ({ course }) => {
  return (
    
    <div className="bg-white p-4 shadow-lg rounded-lg w-80">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      
      <h2 className="text-lg font-semibold mt-3">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.duration} • {course.level}</p>
      <p className="text-green-600 font-bold mt-1">+{course.points}</p>
      <p className="text-sm text-gray-700 mt-2">{course.description}</p>
      <Link to="/second">
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Start Course
      </button></Link>
    </div>
  );
};
const Home = () => {
  return (
    <div className="flex justify-center gap-6 p-8 bg-gray-100 min-h-screen">
      <div className="bg-white font-roboto">
        <div className="max-w-7xl mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-lg font-medium">Google Cloud Skills Boost</h1>
          </header>
          <main>
            <div className="flex items-center mb-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/rbRvUyl5msAoyYTpxHmgFihnd92NIEvZGLj1xWp8pLY.jpg"
                alt="Decorative icon"
                className="mr-2"
                width="40"
                height="40"
              />
              <h2 className="text-4xl font-bold">Google Cloud Next 2023 Learning Path</h2>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-4">
                <i className="fas fa-box mr-1"></i>
                <span>5 activities</span>
              </div>
              <div className="flex items-center mr-4">
                <i className="fas fa-clock mr-1"></i>
                <span>Last updated 3 days</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-user mr-1"></i>
                <span>Managed by Google Cloud</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              This learning path contains courses and hands-on activities related to breakout session content and launches announced at Google Cloud Next 2023.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center">
              <i className="fas fa-arrow-right mr-2"></i>
              Start learning path
            </button>
          </main>

          {/* Courses Section */}
          <div className="flex justify-center items-center gap-6 mt-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 