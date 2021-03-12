const search = document.getElementById("search");
const resultList = document.getElementById("result-list");

// Filtering the Json File for the date
const searchPublications = async (searchYear) => {
  const res = await fetch("../data/SampleData.json");
  const data = await res.json();
  console.log(data.date);
  let results = data.filter((result) => {
    const regex = new RegExp(`^${searchYear}`, "gi");

    return data.date.match(regex);
  });

  if (searchText.length === 0) {
    results = [];
  }

  //   console.log(results);
};

search.addEventListener("input", () => searchPublications(search.value));
