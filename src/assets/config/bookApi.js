const config = {
  key: "AIzaSyBGuKEEU7CfRaYrAfloeojK3Q1uU66hkyo",
  keyWord: ["bukhari","muslim","hadees"],
  max: 40
} // ends config object
const word = config.keyWord[Math.floor(Math.random() * config.keyWord.length)];
export const getInitialData = async (startIndex,searchValue) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue !== undefined || searchValue !== "" ? searchValue : word}&startIndex=${startIndex}&maxResults=${config.max}`;
  try {
    const response = await fetch(url)
    const tempdata = await response.json()
    return tempdata.items

  } catch (error) {
    console.log(error)
  }
}

