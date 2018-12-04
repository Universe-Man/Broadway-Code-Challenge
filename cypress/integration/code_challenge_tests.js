function alphabeticalShows(shows) {
  let aShowsZ = [];

}

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
      expect(checkShowPosterImg(show)).to.eq(true)
    })
  })
})
