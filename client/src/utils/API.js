import axios from "axios";

export default {
  // Gets all savedArticles
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  //Searches for articles
  searchArticles: function (topic, startDate, endDate) {

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=453549f6a21b48999dcc00c65ad05d11&q=" + topic;

    if (parseInt(startDate)) {
      queryURL = queryURL + "&begin_date=" + startDate + "0101";
    }
    if (parseInt(endDate) && endDate !== startDate) {
      queryURL = queryURL + "&end_date=" + endDate + "0101";
    }
    return axios.get(queryURL);
  }

};
