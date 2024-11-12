document
  .getElementById("streaming-service")
  .addEventListener("change", function () {
    const strService = this.value;
    const musicPlayer = document.getElementById("music-player");

    // Clear previous content
    musicPlayer.innerHTML = "";

    // Embed the appropriate player based on the selected platform
    if (strService === "spotify") {
      musicPlayer.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3c1SXIKR5dmRRypPCB68Uq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else if (strService === "apple-music") {
      musicPlayer.innerHTML = `
            <iframe style="width: 300px; height: 380px;" src="https://embed.music.apple.com/us/album/YOUR_TRACK_ID" frameborder="0" allow="autoplay" allowfullscreen></iframe>
        `;
    } else if (strService === "soundcloud") {
      musicPlayer.innerHTML = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1905435367&color=%238b9816&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mindlex" title="MiNDLEX" target="_blank" style="color: #cccccc; text-decoration: none;">MiNDLEX</a> · <a href="https://soundcloud.com/mindlex/sets/best-of-mindlex" title="Best of MiNDLEX" target="_blank" style="color: #cccccc; text-decoration: none;">Best of MiNDLEX</a></div>`;
    }
  });
