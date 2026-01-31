
export const homeData = {
    pageNav: [
      { id: 'videos',  label: 'Videos',  icon: '🗺️' },
      { id: 'blog',    label: 'Blog',    icon: '📊' },
      { id: 'courses', label: 'Courses', icon: '🎨' }
    ],
  
    questions: [
      // Courses
      {
        id: 101,
        category: 'courses',
        title: 'Intro to Algebra',
        thumbnail: '/images/box.webp',
        href: '/syllabus?tcode=intro-algebra'
      },
  
      // Videos
      {
        id: 201,
        category: 'videos',
        title: 'Solve: 3x + 5 = 20',
        thumbnail: '/images/exp.jpeg',
        href: '/examples/linear-equation'
      },
  
      // Blog
      {
        id: 301,
        category: 'blog',
        title: 'Getting Started',
        thumbnail: '/images/class.webp',
        href: '/help/getting-started'
      }
    ]
  };
  