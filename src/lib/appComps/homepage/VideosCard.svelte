<script>
    // No dynamic data needed as per request, using static image path
  </script>
  
  <style>
    :global(body) {
      background-color: #1e1e1e;
      color: #f0f0f0;
      font-family: Arial, sans-serif;
      margin: 0;
      /* padding: 2rem; */
    }
  
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #ffffff;
    }
  
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.5rem;
      padding: 0 1rem;
    }
  
    .gallery-item {
      background-color: #C4A77F;
      border: 1px solid #444;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
  
    .gallery-item img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 0.5rem;
      border: 1px solid #555;
    }
  
    .details {
      font-size: 0.9rem;
      color: #291701;
    }
  </style>
  
  <div>
    <h2>Lessons </h2>
    <div class="gallery">
      <!-- Static card with taleem.webp image -->
      <div class="gallery-item">
        <img src="/images/taleem.webp" alt="Sample Image">
        <div class="details"><strong>Sample Image</strong></div>
        <div class="details">{new Date().toLocaleString()}</div>
      </div>
      <!-- Additional static cards for demonstration -->
      <div class="gallery-item">
        <img src="/images/taleem.webp" alt="Sample Image">
        <div class="details"><strong>Sample Image</strong></div>
        <div class="details">{new Date().toLocaleString()}</div>
      </div>
      <div class="gallery-item">
        <img src="/images/taleem.webp" alt="Sample Image">
        <div class="details"><strong>Sample Image</strong></div>
        <div class="details">{new Date().toLocaleString()}</div>
      </div>
    </div>
  </div>