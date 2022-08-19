import { useEffect, useState } from "react";
import BasicCard from "../../components/BasicCard";
import fallback from "../../images/fallback.jpg";
import { Rings } from "react-loader-spinner";

function Home() {
  const [data, setData] = useState([]);
  let [inputValue, setInputValue] = useState("");
  const [information, setInformation] = useState("");
  const [url, setUrl] = useState(`https://dev.to/api/articles`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getArticles() {
      setLoading(true);
      fetch(url)
        //This operation returns a promise that could either resolve or reject
        // we must resolve the Response object to JSON format using the json() method
        .then((response) => response.json())
        // This also returns a promise and from there, we can resolve to get the actual data that we need
        .then((articles) => {
          console.log(articles);
          setData(articles);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getArticles();
    // to track the url changes, we can pass it as argument
  }, [url]);

  function submitSearch(event) {
    event.preventDefault();
    if (inputValue) {
      setUrl(`https://dev.to/api/articles?tag=${inputValue}`);
      setInformation(`Find all about ${inputValue}`);
    } else {
      // if user click submit button without a value
      setInformation("Please search for an article topic");
    }
  }

  function updateInputValue(event) {
    setInputValue(event.target.value);
    if (event.target.value === "") {
      // if the user cleans the input
      setUrl(`https://dev.to/api/articles`);
      setInformation("Please search for an article topic");
    }
  }

  const articlesArray = data?.map((article) => (
    <BasicCard
      key={article.id}
      alt={article.alt}
      date={article.created_at}
      description={article.description}
      imgPath={article.cover_image || fallback}
      link="Read more"
      title={article.title}
      url={article.url}
    />
  ));

  if (!loading) {
    return (
      <div className="App">
        <h1 className="title_primary">Articles</h1>
        <div className="search__container">
          <form onSubmit={submitSearch}>
            <input
              className="search__input"
              type="search"
              placeholder="Search a topic"
              onChange={updateInputValue}
            />
            <input
              className="submit__input"
              type="submit"
              value="Search"
            ></input>
            {/* <button className="search__btn" type="submit">
              Search
            </button> */}
            <div className="search"></div>
          </form>
          <div className="articles__container">
            <h4 className="subtitle">{information}</h4>
            <div className="articles">
              {articlesArray.length ? articlesArray : "Sorry no results found"}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader">
        {" "}
        <Rings
          className="loader-rings"
          arialabel="ring-loading"
          height="150"
          width="150"
          radius="20"
          color="blueviolet"
        />
      </div>
    );
  }
}

export default Home;
