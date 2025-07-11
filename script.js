const ANSWERS = document.querySelectorAll(".answer");

const PLUES = document.querySelectorAll(".plus");

PLUES.forEach((plus, index) => {
    plus.addEventListener("click", () => {
        const answer = ANSWERS[index];
        const isHidden = answer.classList.contains("hidden");

        if (isHidden) {
            answer.classList.remove("hidden");
            answer.style.animation = "fade-in-slide-up 0.6s forwards";
            plus.src = "assets/images/icon-minus.svg";
        } else {
            answer.style.animation = "fade-out-slide-out 0.6s forwards";

            answer.addEventListener(
                "animationend",
                function handler() {
                    answer.classList.add("hidden");
                    answer.removeEventListener("animationend", handler);
                }
            );

            plus.src = "assets/images/icon-plus.svg";
        }
    });
});

