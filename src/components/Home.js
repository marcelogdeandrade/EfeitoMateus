import React, { Component } from 'react'
import {Grid, Image, Segment, Header, Icon, Container, Rating } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import VideoPlayer from './VideoPlayer'
import {shuffle} from '../modules/randomize_array'

const isBrowser = typeof window !== 'undefined';
const MyWindowDependentLibrary = isBrowser ? require('semantic-ui-react') : undefined;

class Home extends Component {
  
  constructor(props){
    super()
    this.state = {
      urls: ['https://www.youtube.com/embed/hnMQIR69w8k',
             'https://www.youtube.com/embed/G4XkoysO_Pk',
             'https://www.youtube.com/embed/qn6hbW6yHRo',
             'https://www.youtube.com/embed/qmc-tq1vnDA',
             'https://www.youtube.com/embed/Bx_huC8dpHg',
             'https://www.youtube.com/embed/XiDxwgH_nKo',
             'https://www.youtube.com/embed/Cv5_Y6ZCHrM',
             'https://www.youtube.com/embed/NwP5RJgase4',
             'https://www.youtube.com/embed/02cY9arv6k8',
             'https://www.youtube.com/embed/t0xP_LiTGvg'
             ]
    }
  }

  render() {
    const isIndependent = Math.round(Math.random())
    const urls = shuffle(this.state.urls)
    return (
      <div>
        <Segment clearing>
            <Header as='h2' floated='right'>
          </Header>
            <Header as='h1' floated='left'>
              Avalie os vídeos abaixo!
          </Header>
        </Segment>
        {urls.map((url, index) =>
          <VideoPlayer
            isIndependent={isIndependent}
            key={index}
            url={url}
            id={index}
          />
        )}
      </div>
    )
  }
}


export default Home
