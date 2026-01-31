<script>
  export let name = "Taleem.Help - Education for Every Pakistani";
  // export let description = "We offer AI, IT, and Board classes built to empower the next generation.";
  export let image = "/brand/taleem-banner.webp";
  export let color = "rgba(61, 46, 30, 0.9)";
</script>

<div class="banner-container" style="background-color: {color}">
  <div class="banner-image">
    <img src={image} alt={name} class="banner-img" />
  </div>

  <div class="banner-text">
    <h2 class="banner-title">{name}</h2>
    <!-- <p class="banner-description">{description}</p> -->

  </div>
</div>

<style>
  .banner-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1rem;
    gap: 8rem;
  }

  @media (min-width: 768px) {
    .banner-container {
      flex-direction: row;
    }
  }

  .banner-image {
    overflow: hidden;
    border-radius: 12px;
  }

  .banner-img {
    max-height: 300px;
    width: 100%;
    object-fit: contain;
    border-radius: 12px;
    border: none;
  }

  .banner-text {
    flex: 1;
    color: rgba(248, 237, 224, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
  }

  .banner-title {
    font-size: 2.5rem;
    font-weight: bold;
    border-bottom: 2px solid #c4a77f;
    padding-bottom: 0.5rem;
    margin: 0;
  }

  .banner-description {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.7;
  }

  .banner-note {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.9;
  }
</style>
