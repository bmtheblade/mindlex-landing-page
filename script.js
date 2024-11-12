document
  .getElementById("streaming-service")
  .addEventListener("change", function () {
    const strService = this.value;
    const trackPlayer = document.getElementById("track-player");

    // Clear previous content
    trackPlayer.innerHTML = "";

    // Embed the appropriate player based on the selected platform
    if (strService === "spotify") {
      trackPlayer.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2oUAdYirtrMnm2m68mt3zM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else if (strService === "apple-music") {
      trackPlayer.innerHTML = `
            <iframe style="width: 300px; height: 380px;" src="https://embed.music.apple.com/us/album/YOUR_TRACK_ID" frameborder="0" allow="autoplay" allowfullscreen></iframe>
        `;
    } else if (strService === "soundcloud") {
      trackPlayer.innerHTML = `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
        `;
    }
  });
