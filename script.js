function searchMembers() {

    let input =
        document.getElementById("search").value.toLowerCase();

    let members =
        document.querySelectorAll(".member-card");

    members.forEach(function(member) {

        let name =
            member.querySelector("h3");

        if (!name) return;

        let text =
            name.textContent.toLowerCase();

        if (text.includes(input)) {

            member.style.display = "flex";

        } else {

            member.style.display = "none";

        }

    });

}
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (music) {

    // พยายามเปิดเพลงทันที
    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Browser blocked autoplay");
    });

    if (musicButton) {

        musicButton.addEventListener("click", function () {

            if (music.paused) {

                music.play();
                musicButton.textContent = "🔊 เพลง";

            } else {

                music.pause();
                musicButton.textContent = "🔇 ปิดเพลง";

            }

        });

    }
}