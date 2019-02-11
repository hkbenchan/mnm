import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import './index.css'

class Footer extends PureComponent {

  render() {
    const { t } = this.props

    return (
      <div id='footer-wrapper'>
        <footer id='footer' className='container'>
          <div className='row'>
            <section className='widget-contact'>
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
            </section>
          </div>
          <div className='row'>
            <div id="copyright">&copy;{t('copyright')}</div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default withTranslation()(connect(mapStateToProps)(Footer))
