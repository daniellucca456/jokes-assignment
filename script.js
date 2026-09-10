const score = document.getElementById("score");
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thank-you-component");
const submit = document.getElementById("submit");
const ratings = document.querySelectorAll(".rating");

let selectedRating = 0;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRating = Number(rating.value);

    console.log("Selected rating:", selectedRating);
  });
});

submit.addEventListener("click", () => {

  if (selectedRating > 0 && selectedRating <= 5) {

    score.textContent = `You selected ${selectedRating} out of 5`;

    ratingComponent.classList.add("hidden");
    thankYouComponent.classList.remove("hidden");

  } else {

    alert("Please select a rating first.");

  }

});