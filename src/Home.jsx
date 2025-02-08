import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, MenuItem, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

const courses = [
  { id: 1, title: "Introduction to Data Analytics on Google Cloud", category: "Data Analytics", duration: "8 hours", level: "Introductory", points: "400 pts", description: "Explore data analysis basics like collection, storage, and visualization.", image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/529c4e7c41cc.png" },
  { id: 2, title: "Introduction to AI and Machine Learning on Google Cloud", category: "AI/ML", duration: "8 hours", level: "Introductory", points: "400 pts", description: "Learn AI and machine learning on Google Cloud to build predictive projects.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAo80l320pNja7FkRfwQDohdJC3TZnKVsuw&s" },
  { id: 3, title: "Responsible AI: Applying AI Principles with Google Cloud", category: "Responsible AI", duration: "2 hours", level: "Introductory", points: "400 pts", description: "Understand the importance of building AI responsibly.", image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/529c4e7c41cc.png" },
];

const CourseCard = ({ course }) => (
  <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3, transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
    <CardMedia component="img" height="140" image={course.image} alt={course.title} />
    <CardContent>
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.duration} • {course.level}</p>
      <p className="text-green-600 font-bold">+{course.points}</p>
      <p className="text-sm text-gray-700">{course.description}</p>
    </CardContent>
    <CardActions>
      <Link to="/second">
        <Button size="small" variant="contained" color="primary">Start Lab</Button>
      </Link>
    </CardActions>
  </Card>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter ? course.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-lg font-medium">Google Cloud Skills Boost</h1>
        </header>
        
        {/* Google Cloud Next 2023 Learning Path Section */}
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

        {/* Search and Filter Section */}
        <div className="flex gap-4 my-6">
          <TextField
            label="Search Labs"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <TextField
            select
            label="Filter by Category"
            variant="outlined"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Data Analytics">Data Analytics</MenuItem>
            <MenuItem value="AI/ML">AI/ML</MenuItem>
            <MenuItem value="Responsible AI">Responsible AI</MenuItem>
          </TextField>
        </div>

        {/* Courses Section */}
        <div className="flex flex-wrap justify-center">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
          ) : (
            <p>No labs found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
