import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";
import {List, ListHeading, ListItem} from "../../components/List";
import API from "../../utils/API.js"
import {ListGroup} from "../../components/List/ListGroup";
import {SaveBtn, ViewBtn} from "../../components/Buttons/";


class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    message: "",
    search: false
  };

  componentDidMount(){
    this.setStatusMessage();
  };

  setStatusMessage = () => {
    if (!this.state.search) {
      this.setState({message: ""})
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchArticles(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res =>
        this.setState({articles: res.data.response.docs, search: true})
      )
      .catch(err => console.log(err));

    if (!this.state.articles.length){
      this.setState({message: "No results, try a different search", topic: "", startDate: "", endDate: ""})
    }
  };

  saveArticle = article => {
    API.saveArticle({
      title: article.headline.main,
      datePublished: article.pub_date,
      url: article.web_url
    }).then(res => console.log(res.data));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"/>
          <Col size="md-8">
            <Jumbotron>
              <br></br>
              <br></br>
              <h2>New York Times Search App</h2>
              <p>Search for NYT articles and save your favorites.</p>
            </Jumbotron>
            <form>
              <Input
                name="topic"
                placeholder="Enter keyword"
                onChange={this.handleInputChange}
                value={this.state.topic}
                type="text"/>
              <Input
                name="startDate"
                placeholder="Start Year"
                onChange={this.handleInputChange}
                value={this.state.startDate}
                type="text"/>
              <Input
                name="endDate"
                placeholder="End Year"
                onChange={this.handleInputChange}
                value={this.state.endDate}
                type="text"/>
              <FormBtn onClick={this.handleFormSubmit}><i className="fa fa-search" aria-hidden="true"></i> Search Articles</FormBtn>
            </form>
            <List>
              <ListHeading>
                Search Results
              </ListHeading>
              {this.state.search && this.state.articles.length ? (
                <ListGroup>
                  {this.state.articles.map(articles => (
                    <ListItem key={articles.web_url}>
                      <SaveBtn onClick={() => this.saveArticle(articles)}><i className="fa fa-download" aria-hidden="true"></i> Save</SaveBtn>
                      <ViewBtn link={articles.web_url}><i className="fa fa-eye" aria-hidden="true"></i> View</ViewBtn>
                      <h3>
                        {articles.headline.main}
                      </h3>
                      <p>Published on: {articles.pub_date}</p>
                    </ListItem>
                  ))}
                  </ListGroup>
                ) : (
                  <h4 style={{marginLeft: "15px"}}>{this.state.message}
                  </h4>)}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
