function alphabeticalShows(shows) {
  let aShowsZ = [];

}

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
