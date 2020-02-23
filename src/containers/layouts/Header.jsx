import React, { useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

import Search from 'assets/svg/Search';
import Cross from 'assets/svg/Cross';
import getImage from 'utils/images';
import { getItems, itemsFilterChange, clearItems } from 'redux/actions/Item';

const Header = props => {
  const {
    dispatch,
    filters,
    location: { pathname }
  } = props;

  const { search = '' } = filters;
  const myInp = useRef(null);
  function loadData(searchValue) {
    dispatch(clearItems());
    dispatch(getItems());
  }
  const delayedQuery = useCallback(debounce(loadData, 300), []);

  const onSearch = event => {
    const {
      target: { value }
    } = event;
    dispatch(itemsFilterChange({ search: value, sort: '', order: '', skip: 0 }));

    delayedQuery(value);
  };
  const clearSearch = () => {
    dispatch(itemsFilterChange({ search: '', sort: '', order: '', skip: 0 }));
    loadData('');
  };

  const moveToHome = () => {
    props.history.push('/home');
  };

  return (
    <div className="Header center">
      <Navbar color="none" dark expand="md" className="Header_navbar">
        <NavbarBrand href="#/home">
          <img src={getImage('logo')} alt="logo" style={{ maxHeight: 35, opacity: 0.8 }} onClick={moveToHome} />
        </NavbarBrand>
        <Nav navbar className="Header_wrapper center">
          <div className="search-wrapper center">
            {pathname === '/home' ? (
              <div
                className="search center"
                onClick={() => {
                  myInp.current.focus();
                }}>
                <Search className="Header_icon search_icon" />
                <input
                  className="search_input"
                  placeholder="Search by name"
                  onChange={onSearch}
                  value={search}
                  ref={myInp}
                />
                {search.length ? <Cross onClick={clearSearch} /> : null}
              </div>
            ) : (
              void 0
            )}
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    filters: state.itemsReducer.filters
  };
};

const HeaderWithRouter = withRouter(props => <Header {...props} />);
export default connect(mapStateToProps)(HeaderWithRouter);
