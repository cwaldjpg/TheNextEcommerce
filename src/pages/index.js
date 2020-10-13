import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import PageLayout from '@components/Layout'

const Home = () => {
  return (
    <PageLayout>
      <div>
        <Carousel animation='slide'>
          <Paper>
            asdasd
          </Paper>
          <Paper>
            asdas
          </Paper>
        </Carousel>   
      </div>
    </PageLayout>
  )
}

export default Home;