import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import PracticeKindness from './practicekindness'
import MingGor from './minggor'
import './index.css'

class Projects extends PureComponent {

  renderProject(query) {
    if (query === 'practicekindness') {
      return <PracticeKindness />
    } else if (query === 'minggor') {
      return <MingGor />
    }
    return (
      <div/>
    )
  }

  render() {
    const { t, location } = this.props

    const currentQuery = (location.query || {} ).p || 'practicekindness'

    const currentProject = this.renderProject(currentQuery)

    return (
      <Flex>
        <Box w={0.3} p={1}>
          {/* left */}
          <h3>{ t('nav.projects')}</h3>
          <p><Link replace to={{ pathname: '/projects', query: { p: 'practicekindness' } }}>{ t('projects.practicekindness.title') }</Link></p>
          <p><Link replace to={{ pathname: '/projects', query: { p: 'minggor' } }}>{ t('projects.minggor.title')}</Link></p>
        </Box>
        <Flex w={0.7} p={1}>
          {currentProject}
        </Flex>
      </Flex>
    )
  }
}


const mapStateToProps = state => ({
  location: state.router.location
})

export default withTranslation()(connect(
  mapStateToProps
)(Projects))
