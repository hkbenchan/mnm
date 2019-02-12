import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Flex, Box } from 'reflexbox'
import './index.css'

class Header extends PureComponent {

  updateLanguage = () => {
    const { t, i18n } = this.props
    const targetLang = t('changeLang') || 'en'
    i18n.changeLanguage(targetLang)
  }

  render() {
    const { t, router: { location } } = this.props

    return (
      <header id='header'>
        {/* logo */}
        <Flex p={1} justify='space-between'>
          <Box w={1/2} p={1}>
            <div id='logo'>
              <Link to='/'>
                <img alt='logo'
                  src='images/logo_transparent.png'
                  width='50%'
                  height='50%'
                />
              </Link>
            </div>
          </Box>
  				{/* nav */}
          <Flex w={1/2}>
            <nav id='nav'>
              <ul>
                <li><Link to='/'>{ t('nav.home') }</Link></li>
                <li><Link to='/projects'>{ t('nav.projects') }</Link></li>
                {/* <li><Link to='/contact'>{ t('nav.contact') }</Link></li> */}
                <li><Link to='#' onClick={this.updateLanguage}>{ t('nav.changeLang') }</Link></li>
              </ul>
            </nav>
          </Flex>
        </Flex>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  router: state.router
})

export default withTranslation()(connect(mapStateToProps)(Header))
