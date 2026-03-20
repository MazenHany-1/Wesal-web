<<<<<<< HEAD
import React, { useState } from "react";
import { Search, Clock, BookOpen } from "lucide-react";
=======
import React from 'react';
>>>>>>> 65839a5f0dbaaf40cf1904462e654157d55e311a

function Courses() {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: "1",
      title: "Digital Marketing Mastery 2024",
      description:
        "Master digital marketing strategies, SEO, social media, and analytics to grow your online presence.",
      duration: "8 Weeks",
      level: "Beginner",
      category: "Marketing",
      enrolled: 2340,
    },
    {
      id: "2",
      title: "Full Stack Web Development",
      description:
        "Learn to build modern web applications from front-end to back-end with React, Node.js, and databases.",
      duration: "12 Weeks",
      level: "Intermediate",
      category: "Development",
      enrolled: 1890,
    },
    {
      id: "3",
      title: "Data Science Fundamentals",
      description:
        "Dive into data analysis, visualization, and machine learning with Python and popular libraries.",
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Data Science",
      enrolled: 1560,
    },
    {
      id: "4",
      title: "UI/UX Design Principles",
      description:
        "Create beautiful and user-friendly interfaces. Learn design thinking, prototyping, and user research.",
      duration: "6 Weeks",
      level: "Beginner",
      category: "Design",
      enrolled: 2100,
    },
    {
      id: "5",
      title: "Advanced JavaScript Programming",
      description:
        "Deep dive into JavaScript ES6+, async programming, design patterns, and modern frameworks.",
      duration: "8 Weeks",
      level: "Advanced",
      category: "Development",
      enrolled: 980,
    },
    {
      id: "6",
      title: "Business Analytics & Strategy",
      description:
        "Learn to analyze business data, create strategies, and make data-driven decisions.",
      duration: "7 Weeks",
      level: "Intermediate",
      category: "Business",
      enrolled: 1200,
    },
    {
      id: "7",
      title: "Mobile App Development with React Native",
      description:
        "Build cross-platform mobile apps for iOS and Android using React Native.",
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Development",
      enrolled: 1450,
    },
    {
      id: "8",
      title: "Cloud Computing Essentials",
      description:
        "Master AWS, Azure, and cloud architecture principles for modern applications.",
      duration: "9 Weeks",
      level: "Advanced",
      category: "Technology",
      enrolled: 890,
    },
  ];

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const categories = [
    "all",
    "Development",
    "Design",
    "Marketing",
    "Data Science",
    "Business",
    "Technology",
  ];

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      selectedLevel === "all" || course.level === selectedLevel;
    const categoryMatch =
      selectedCategory === "all" || course.category === selectedCategory;

    return levelMatch && categoryMatch;
  });

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[var(--background)] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl text-[var(--foreground)] mb-4">
            Courses
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl">
            Explore our wide range of courses designed to enhance your skills
            and advance your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="flex items-center gap-4 bg-[var(--card)] rounded-xl px-6 py-4 mb-6 border border-[var(--border)]">
            <Search className="w-6 h-6 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-lg"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4">
            {/* Level Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-[var(--muted-foreground)]">
                Level:
              </span>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedLevel === level
                      ? "bg-[#C8A85A] text-[#0a0a0a]"
                      : "bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border border-[var(--border)]"
                  }`}
                >
                  {level === "all" ? "All Levels" : level}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-[var(--muted-foreground)]">
                Category:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-[#C8A85A] text-[#0a0a0a]"
                      : "bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border border-[var(--border)]"
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[var(--muted-foreground)]">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[var(--card)] rounded-xl overflow-hidden hover:bg-[var(--secondary)] transition-all cursor-pointer border border-[var(--border)]"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-[#C8A85A]/20 text-[#C8A85A] rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs px-3 py-1 bg-[var(--secondary)] text-[var(--muted-foreground)] rounded-full border border-[var(--border)]">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl text-[var(--foreground)] mb-3 leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.enrolled.toLocaleString()} enrolled
                  </span>
                </div>

                <button className="w-full bg-[#0E3B2E] text-[#E8E2D6] py-3 rounded-lg hover:bg-[#0E3B2E]/90 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
=======
    <div>Courses</div>
  );
}

export default Courses;
>>>>>>> 65839a5f0dbaaf40cf1904462e654157d55e311a
