import { videos } from './videos.static.js';
import { blog } from './blog.static.js';
import { courses } from './courses.static.js';

export const homeData = {
  pageNav: [
    { id: 'videos',  label: 'Videos',  icon: '🗺️' },
    { id: 'blog',    label: 'Blog',    icon: '📊' },
    { id: 'courses', label: 'Courses', icon: '🎨' }
  ],
  videos,
  blog,
  courses
};
