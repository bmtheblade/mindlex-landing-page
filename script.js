document.querySelector(".spotify").addEventListener("click", function () {
  window.location.href =
    "https://open.spotify.com/artist/3rynlmb13fe4N9wwJS6TRu?si=6ihrt35aRGGltVf0X-P6yA";
});

document.querySelector(".apple").addEventListener("click", function () {
  window.location.href = "https://music.apple.com/us/artist/mindlex/1570777933";
});
document.querySelector(".youtube").addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/@mindlex";
});
document.querySelector(".soundcloud").addEventListener("click", function () {
  window.location.href = "https://soundcloud.com/mindlex";
});
document.querySelector(".beatport").addEventListener("click", function () {
  window.location.href = "https://www.beatport.com/artist/mindlex/1107738";
});
document.querySelector(".instagram").addEventListener("click", function () {
  window.location.href = "https://instagram.com/mindlexmusic";
});
document.querySelector(".tiktok").addEventListener("click", function () {
  window.location.href = "https://www.tiktok.com/@mindlexmusic";
});

// Latest Release

document.getElementById("spotify-play").addEventListener("click", function () {
  window.location.href =
    "https://open.spotify.com/track/2Z36p50NgrBo4aL4KwrckD?si=a89ebb26d6994061";
});

document
  .getElementById("apple-music-play")
  .addEventListener("click", function () {
    window.location.href =
      "https://music.apple.com/us/album/bring-me-up/1753100058?i=1753100419";
  });

document.getElementById("youtube-play").addEventListener("click", function () {
  window.location.href = "https://youtu.be/xNyWa0ww8yw?si=d5RG0FNoOVVkDLpj";
});
document
  .getElementById("soundcloud-play")
  .addEventListener("click", function () {
    window.location.href = "https://on.soundcloud.com/1FCe8ALrab6Dc7pW7";
  });
document.getElementById("beatport-buy").addEventListener("click", function () {
  window.location.href = "https://www.beatport.com/release/bring-me-up/4622557";
});

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
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/mindlexs-vung-tau-2024-concert-set-list/pl.746f18d9210d45dbb3ac0d55d56f7ca0"></iframe>`;
    } else if (strService === "soundcloud") {
      musicPlayer.innerHTML = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1905435367&color=%238b9816&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mindlex" title="MiNDLEX" target="_blank" style="color: #cccccc; text-decoration: none;">MiNDLEX</a> · <a href="https://soundcloud.com/mindlex/sets/best-of-mindlex" title="Best of MiNDLEX" target="_blank" style="color: #cccccc; text-decoration: none;">Best of MiNDLEX</a></div>`;
    }
  });
