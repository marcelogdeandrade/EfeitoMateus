import React, { Component } from 'react'
import { Grid, Image, Segment, Header, Icon, Container, Rating, Divider, Button} from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import { addRating, getVideoRating } from '../modules/requests'

class VideoPlayer extends Component {
  constructor(props){
    super()
    this.state = {
      url : props.url,
      hasSubmitted : false,
      rating: 3,
      avg: 0,
      videoRatings: []
    }
    this.render = this.render.bind(this)
    this.renderEnd = this.renderEnd.bind(this)
    this.addRatingMethod = this.addRatingMethod.bind(this)
  }

  componentDidMount(){
    this.getRating()
  }
  
  addRatingMethod(){
    const url = this.state.url
    const rating = this.state.rating
    addRating(url, rating, this.props.isIndependent)
      .then(result => {
        this.setState({
          hasSubmitted : true
        })
      })
  }

  getAverageRating(ratings){
    if (ratings.length == 0) {
      return 0
    }
    ratings = ratings.map(rating => {
      return rating.rating
    })
    let sum = 0;
    for (var i = 0; i < ratings.length; i++) {
      sum += parseInt(ratings[i], 10)
    }
    var avg = sum / ratings.length;
    return avg.toFixed(2)
  }

  getRating(){
    const url = this.state.url
    getVideoRating(url)
      .then(result => {
        const avg = this.getAverageRating(result.data)
        this.setState({
          avg : avg
        })
      })
  }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  renderRating(){
    return(
      <Header>
        Rating médio: {this.state.avg}
      </Header>
    )
  }

  renderRecommended(){
    if (this.props.isIndependent && this.props.id == 0){
      return (
        <div></div>
      )
    }
    return (
      <div>
      <Icon name='star' size='huge' color='yellow' />
      Recomendado
      </div>
    )
  }

  renderEnd(){
    if (this.state.hasSubmitted){
      return (
        <Segment textAlign='center'>
          <Icon name='checkmark' size='huge' color='green' />
        </Segment>
      )
    } else {
      return(
      <div>
        <Segment textAlign='center'>
            {this.renderRating()}
            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' onRate={this.handleRate} />
        </Segment>
        <Segment textAlign='center'>
            <Button primary onClick={this.addRatingMethod}>Avaliar Video {this.props.id}</Button>
        </Segment>
      </div>
      )
    }
  }
  render() {
    return (
      <div>
        <Segment textAlign='center'>
          <Header> Video {this.props.id}</Header>
          {this.renderRecommended()}
          <ReactPlayer
            url={this.props.url}
            controls
           />
        </Segment>
        {this.renderEnd()}
        <Divider />
      </div>
    )
  }
}


export default VideoPlayer
