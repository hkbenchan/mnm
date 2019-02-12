import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import Youtube from 'react-youtube'

const PracticeKindness = props => {

  const { t } = props

  const youtubeOptions = {
    width: '640',
    height: '385',
    playerVars: {
      allowFullscreen: true
    }
  }
  return (
    <Box w={1}>
      <Box w={1}>
        <h1>{ t('projects.practicekindness.title') }</h1>
      </Box>
      <Box w={[2/3, 400]}>
        <img alt='logo' width='100%' src='images/practice_kindness/PK_logo_transparent.png' />
      </Box>
      <Box>
        <Youtube
          videoId='OFej84UMLJI'
          opts={youtubeOptions}/>
      </Box>
      <Box>
        <p>{ t('projects.practicekindness.content.1') }<a href="https://www.facebook.com/practicekindnesseveryday" target="_blank">{ t('projects.practicekindness.content.2') }</a>{ t('projects.practicekindness.content.3') }</p>

        <p>{ t('projects.practicekindness.content.4') }<a href="//mnm.hk/">{ t('projects.practicekindness.content.5') }</a>{ t('projects.practicekindness.content.6') }<a href="https://www.facebook.com/HK.MandM" target="_blank">{ t('projects.practicekindness.content.7') }</a>{ t('projects.practicekindness.content.8') }</p>

        <p>{ t('projects.practicekindness.content.9') }</p>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => state

export default withTranslation()(connect(
  mapStateToProps
)(PracticeKindness))
