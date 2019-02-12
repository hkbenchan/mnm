import React from 'react'
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import Carousel from 'nuka-carousel'
import './index.css'

const Home = props => {
  const { t, pathKey } = props

  return (
    <>
      <Flex>
        <Box id='banner-wrapper'>
          <div id='banner'>
            <Box w={1/2} p={1}>
              <img alt='group' width="100%" src="images/group_photo3.png" />
            </Box>
            <Box w={1/2} p={1}>
              <h3>{ t('home.intro.what') }</h3>
              <h5>{ t('home.intro.content') }</h5>
            </Box>
          </div>
        </Box>
      </Flex>
      <Box p={2}>
        <h2>{ t('nav.projects' )}</h2>
        <Flex w={1} m={1}>
          <Box w={[0.9, 0.45]} m={2} p={1} className='features-box'>
            <Carousel key={`${pathKey}-kindness`} autoplay wrapAround withoutControls>
              <img src='images/practice_kindness/PK_logo_transparent_space.png' alt='practice_kindness_1' />
              <img src='images/practice_kindness/759_pk1.png' alt='practice_kindness_2' />
              <img src='images/practice_kindness/759_pk2.png' alt='practice_kindness_3' />
              <img src='images/practice_kindness/759_pk3.png' alt='practice_kindness_4' />
              <img src='images/practice_kindness/759_pk4.png' alt='practice_kindness_5' />
              <img src='images/practice_kindness/UST_pk1.png' alt='practice_kindness_6' />
              <img src='images/practice_kindness/UST_pk2.png' alt='practice_kindness_7' />
              <img src='images/practice_kindness/UST_pk3.png' alt='practice_kindness_8' />
            </Carousel>
            <h4>{ t('projects.practicekindness.title') }</h4>
            <p>{ t('projects.practicekindness.description') }</p>
            <p><Link to={{ pathname: '/projects', query: { p: 'practicekindness' } }}>{ t('projects.readmore') }</Link></p>
          </Box>
          <Box w={[0.9, 0.45]} m={2} p={1} className='features-box'>
            <Carousel key={`${pathKey}-minggor`} autoplay wrapAround withoutControls>
              <img src='images/ming_gor/ming1.png' alt='ming_1' />
              <img src='images/ming_gor/ming3.png' alt='ming_2' />
              <img src='images/ming_gor/ming4.png' alt='ming_3' />
            </Carousel>
            <h4>{ t('projects.minggor.title') }</h4>
            <p>{ t('projects.minggor.description') }</p>
            <p><Link to={{ pathname: '/projects', query: { p: 'minggor' } }}>{ t('projects.readmore') }</Link></p>
          </Box>
        </Flex>
      </Box>
    </>
  )
}


const mapStateToProps = state => ({
  pathKey: state.router.location.key
})

export default withTranslation()(connect(
  mapStateToProps
)(Home))
