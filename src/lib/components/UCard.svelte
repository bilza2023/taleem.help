
<script>
  export let title = '';
  export let thumbnail = '';
  export let href = '#';
</script>

<a class="ucard" href={href}>
  <div class="thumb">
    <img src={thumbnail} alt={title} />
  </div>

  <div class="meta">
    <div class="title">{title}</div>
  </div>
</a>

<style>
  .ucard {
    display: block;
    text-decoration: none;
    color: var(--baseTextColor);
    font-family: var(--fontBase);
  }

  .thumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: var(--borderColor);
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 6px var(--shadowColor);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .meta {
    margin-top: 8px;
  }

  .title {
    font-size: 0.9rem;
    line-height: 1.3;
    color: var(--headingColor);
  }

  .ucard:hover .title {
    color: var(--primaryColor);
  }

  .ucard {
  display: block;
  text-decoration: none;
  color: var(--baseTextColor);
  font-family: var(--fontBase);

  background: var(--shadowColor);
  padding: 10px;
  border-radius: 10px;

  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.ucard:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadowColor);
  border: 2px solid var(--borderColor);
}

.thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--borderColor);
  border-radius: 8px;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.meta {
  margin-top: 8px;
}

.title {
  font-size: 0.9rem;
  line-height: 1.3;
  color: var(--headingColor);
}

.ucard:hover .title {
  color: var(--primaryColor);
}

</style>
