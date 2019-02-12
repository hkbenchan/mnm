import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import Carousel from 'nuka-carousel'

class MingGor extends PureComponent {

  renderArthor = (chi) => {
    const { t } = this.props
    const configs = [
      {
        img: 'images/ming_gor/keith_profile_pic.png',
        name: 'keith',
        count: 3
      },
      {
        img: 'images/ming_gor/jimmy_profile_pic.png',
        name: 'jimmy',
        count: 2
      },
      {
        img: 'images/ming_gor/vincci_profile_pic.png',
        name: 'vincci',
        count: chi ? 3 : 0
      }
    ]

    return configs.map(config => {
      if (config.count === 0) return null

      let content = []
      for (var i = 1; i <= config.count; i++) {
        content.push(<p key={`minggor.${config.name}.${i}`} style={{ lineHeight: '1.6rem' }}>{ t(`projects.minggor.content.${config.name}.${i}`)}</p>)
      }

      return (
        <Flex w={1} key={`minggor.${config.name}`}>
          <Flex w={1/3} column p={1}>
            <img alt={config.name} src={config.img} width='100%' style={{ objectFit: 'contain' }}/>
            <h3>{ t(`projects.minggor.content.${config.name}.name`) }</h3>
          </Flex>
          <Flex w={2/3} column p={1}>
            {content}
          </Flex>
        </Flex>
      )
    })
  }

  render() {
    const { t, i18n } = this.props

    return (
      <Box w={1}>
        <Box w={1}>
          <h1>{ t('projects.minggor.title') }</h1>
        </Box>
        <Box w={1}>
          <Carousel autoplay wrapAround withoutControls>
            <img src='images/ming_gor/ming1.png' alt='ming_1' />
            <img src='images/ming_gor/ming3.png' alt='ming_2' />
            <img src='images/ming_gor/ming4.png' alt='ming_3' />
            <img src='images/ming_gor/ming5.png' alt='ming_4' />
          </Carousel>
        </Box>
        { this.renderArthor(i18n.language === 'zh') }
      </Box>
    )
  }
}

const mapStateToProps = state => state

export default withTranslation()(connect(
  mapStateToProps
)(MingGor))
