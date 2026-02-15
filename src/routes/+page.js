// export const prerender = true;

export async function load({ fetch }) {
  // Content base (keep simple for now)
  // If needed later, move to env or config injection
  const CONTENT_BASE = '';

  const [homeRes, videosRes, blogRes, coursesRes] =
    await Promise.all([
      fetch('/data/home.json'),
      fetch('/data/videos.json'),
      fetch('/data/blog.json'),
      fetch('/data/courses.json')
    ]);

  if (
    !homeRes.ok ||
    !videosRes.ok ||
    !blogRes.ok ||
    !coursesRes.ok
  ) {
    throw new Error('Failed to load home data');
  }

  const home = await homeRes.json();
  const videos = await videosRes.json();
  const blog = await blogRes.json();
  const courses = await coursesRes.json();

  return {
    CONTENT_BASE,
    pageNav: home.pageNav,
    videos,
    blog,
    courses
  };
}
