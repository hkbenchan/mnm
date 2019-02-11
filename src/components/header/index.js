import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import './index.css'

class Header extends PureComponent {

  updateLanguage = () => {
    const { t, i18n } = this.props
    const targetLang = t('changeLang') || 'en'
    i18n.changeLanguage(targetLang)
  }

  render() {
    const { t } = this.props

    return (
      <header id='header'>
        {/* logo */}
        <div id='logo'>
          <Link to='/'>
            <img alt='logo'
              src='images/logo_transparent.png'
              width='100%'
              height='100%'
              style={{
                maxHeight: '205px',
                maxWidth: '385px'
              }}
            />
          </Link>
        </div>
				{/* nav */}
        <nav id='nav'>
          <ul>
            <li><Link to='/'>{ t('nav.home') }</Link></li>
            <li><Link to='/projects'>{ t('nav.projects') }</Link></li>
            <li><Link to='/contact'>{ t('nav.contact') }</Link></li>
            <li><button onClick={this.updateLanguage}>{ t('nav.changeLang') }</button></li>
          </ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => state

export default withTranslation()(connect(mapStateToProps)(Header))
