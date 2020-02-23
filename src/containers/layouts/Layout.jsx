import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getItems } from 'redux/actions/Item'

import Header from './Header'
import LoadingSpinner from 'components/LoadingSpinner'
import getImage from 'utils/images'
// @ts-ignore
// import colors from 'assets/css/colors.scss';

// const { theme } = colors;

const Layout = props => {
  const { loading } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    location: { pathname = '' }
  } = history
  useEffect(() => {
    dispatch(getItems())
    // eslint-disable-next-line
  }, [])
  const handleNav = pathname => {
    history.push({ pathname })
  }
  return (
    <React.Fragment>
      <div
        className="fixed-body"
        style={{
          opacity: 0.8,
          backgroundImage: `url(${getImage('defaultBg')})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover'
        }}></div>
      {loading && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}
      <Header />
      <div className="Layout">
        <div className="Layout_body">
          <div className="Layout_tab">
            <div onClick={handleNav.bind('', '/home')} className={`tab ${pathname === '/home' ? 'active' : ''}`}>
              View my Speeches
            </div>
            <div
              onClick={handleNav.bind('', '/add-speech')}
              className={`tab ${pathname === '/add-speech' ? 'active' : ''}`}>
              Submit a new Speech
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState
  }
}
export default connect(mapStateToProps)(Layout)
