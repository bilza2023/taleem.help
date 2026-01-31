<script>
  const course = {
    title: "taleem.help",
    description:
      "Education for Every Pakistani — we offer AI, IT, and Board classes built to empower the next generation. Learn at your own pace, with modern tools, and practical outcomes. For curious learners from schools to startups.",
    thumbnail: "/brand/banner_brand_section.png",
  };
</script>

<section class="w-full bg-[#3d2e1e]/90">
  <div
    class="max-w-7xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row items-start gap-12"
  >
    <!-- Left: Image pinned left -->
    <div class="md:w-2/5 pr-4">
      <img
        src={course.thumbnail}
        alt="Taleem Banner"
        class="max-h-[300px] w-full object-contain rounded-md border border-[#c4a77f] shadow-md"
      />
    </div>

    <!-- Right: Text -->
    <div
      class="w-full md:w-3/5 flex flex-col justify-center space-y-5 text-white"
    >
      <h2
        class="text-4xl font-bold border-b-2 border-[#c4a77f] pb-2 tracking-tight"
      >
        {course.title}
      </h2>

      <p class="text-lg leading-relaxed tracking-wide font-medium">
        {course.description}
      </p>

      <div class="text-base italic opacity-90">
        🌍 Part of the <strong>Taleem.Help</strong> national learning initiative.
      </div>
    </div>
  </div>
</section>
