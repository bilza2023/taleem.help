<script>
    import SidebarCard from "./SidebarCard.svelte"
</script>


<div
class={` p-4 rounded-xl shadow flex flex-col space-y-4 min-h-screen border-2  border-[#93754b] text-white bg-[#2E1C02]`}
>
<h4 class="text-lg font-bold mb-2 text-white">📢 Updates & Insights</h4>

<SidebarCard
  icon="🏆"
  title="Collection of Class 9th Theorems"
  details="Collection of Class 9th Theorems along with Images for revision of students. From Chpater 10 ,11 and 12."
  url="/blog/class9_all_theorems_pt1.html"
/>

<SidebarCard
  icon="🚀"
  title="Be Part of AI Revolution"
  details="World is entering into a new era. This is a time to act for Pakistani Students. AI bring new oppertunities."
  url="/blog/be-part-of-ai-revolution.html"
/>

<SidebarCard
  icon="📜"
  title="AI Foundation Track"
  details="Introducing AI Foundation Track - Taleem.Help. In the current economic conditions AI is a new form of business and earning."
  url="/blog/ai-foundation-track-brochure.html"
/>

<SidebarCard
  icon="👨‍🎓"
  title="Future in AI Era for Pakistani Students"
  details="A brief blog post about some of the steps suggested for Pakistani Students"
  .
  url="/blog/future-in-the-ai-era-for--pakistani-students.html"
/>

<SidebarCard
  icon="🌳"
  title="Brief: Pakistani IT Industry 2025"
  details="A snap shot of Pakistani IT industray in 2025. Some of the Top Earners and the Industrial sectors they target"
  .
  url="blog/backend-servies-presentation/pakistani-it-industry-overview.html"
/>
</div>