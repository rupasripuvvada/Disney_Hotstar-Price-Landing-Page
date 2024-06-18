document.querySelectorAll(".b1").forEach(button => {
    button.addEventListener("click", function(event) {
        document.querySelectorAll(".b1").forEach(btn => btn.disabled = true);
        event.target.disabled = false;
        if (event.target.id === "b") {
            alert("You purchased the mobile subscription");
        } else if (event.target.id === "b2") {
            alert("You purchased the super subscription");
        } else if (event.target.id === "b3") {
            alert("You purchased the premium subscription");
        }
    });
});