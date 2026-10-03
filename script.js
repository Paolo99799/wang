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

if (music) {

    const savedTime = localStorage.getItem("musicTime");
    const wasPlaying = localStorage.getItem("musicPlaying") === "true";

    music.volume = 0.45;

    // จำตำแหน่งเพลง
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // บันทึกตำแหน่งทุก 1 วินาที
    music.addEventListener("timeupdate", () => {
        localStorage.setItem("musicTime", music.currentTime);
    });

    // จำสถานะเล่น/หยุด
    music.addEventListener("play", () => {
        localStorage.setItem("musicPlaying", "true");
    });

    music.addEventListener("pause", () => {
        localStorage.setItem("musicPlaying", "false");
    });

    // พยายามเล่นต่อ
    if (wasPlaying) {
        music.play().catch(() => {
            console.log("Browser blocked autoplay");
        });
    }
}