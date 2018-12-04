// DOES THE SHOW OBJECT HAVE A POSTER IMAGE:
const show = {name: "Wolcott, Jr.", posterImg: undefined};
function checkShowPosterImg(show) {
  if(show.posterImg === undefined) {
    return false;
  } else {
    return true;
  }
}

describe("Check if show has poster img", function() {
  context("img", function() {
    it("has poster img", function() {
      expect(checkShowPosterImg(show)).to.eq(true);
    })
  })
})

// DOES CLICKING ON SHOW DETAILS BRING UP THE MODAL:
const state = {showShowDetails: true}
function showingDetails(state) {
  if(state.showShowDetails === true) {
    return true;
  } else {
    return false;
  }
}

describe("Check showing show's details modal", function() {
  context("state status", function() {
    it("it is showing show details", function() {
      expect(showingDetails(state)).to.eq(true);
    })
  })
})

// (PROBLEM WITH LOWERCASING AN ARRAY) DOES THE SEARCHBAR INPUT FILTER SHOWS:
const shows = ["Hamilton", "The Lion King", "Wicked", "Frozen", "Aladdin"];
const userInput = "In";
function checkShowsFilter(shows, userInput) {
  let filteredShows = shows;
  filteredShows.filter(shows => show.toLowerCase().includes(userInput.toLowerCase()));
  if(filteredShows === ["The Lion King", "Aladdin"] || ["Aladdin", "The Lion King"]) {
    return true;
  } else {
    return false;
  }
}

describe("Is filter working", function() {
  context("search filter", function() {
    it("is filtering shows with user input", function() {
      expect(checkShowsFilter(shows, userInput)).to.eq(true);
    })
  })
})

// (UNFINISHED) ARE THE LIST OF SHOWS ALPHABETICAL:
// const shows = ["Hamilton", "The Lion King", "Wicked", "Frozen", "Aladdin"]
// function alphabeticalShows(shows) {
//   let aShowsZ = show;
//   aShowsZ.sort();
//   for (let show of aShowsZ) {
//   }
//   if()
// }
