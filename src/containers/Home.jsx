import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddItem from 'components/AddItem'

const Home = props => {
  let { items } = props
  const [activeIndex, setactiveIndex] = useState(0)

  return (
    <div className="Home">
      {items.length ? (
        <div className="Home_row">
          <div className="Home_col-1">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`Home_item ${activeIndex === index ? 'active' : ''}`}
                onClick={setactiveIndex.bind('', index)}>
                <span className="name">{item.authorName}</span>
                {activeIndex === index && <span>&#9658;</span>}
              </div>
            ))}
          </div>

          <div className="Home_col-2">
            <AddItem item={items[activeIndex]} />
          </div>
        </div>
      ) : (
        <div className="Home_noResult">
          <h4 className="title">No result found</h4>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items
  }
}
export default connect(mapStateToProps)(Home)
