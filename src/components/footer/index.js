import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import './index.css'

class Footer extends PureComponent {

  render() {
    const { t } = this.props

    return (
      <Flex p={1}>
        <Flex w={1} p={1} align='center' column>
          <h2>{ t('nav.contact') }</h2>
          <ul>
            <li>
              <a href="http://www.facebook.com/HK.MandM" className="fa fa-facebook solo">
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="mailto:hkmnm1@gmail.com" className="fa fa-envelope solo">
                <span>Email</span>
              </a>
            </li>
          </ul>
          <div id="copyright">&copy;{t('copyright')}</div>
        </Flex>
      </Flex>
    )
  }
}

const mapStateToProps = (state) => state

export default withTranslation()(connect(mapStateToProps)(Footer))
