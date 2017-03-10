import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const style = {
  margin: 5,
  minWidth: 'auto'
}

class PageNavigation extends React.Component {
  constructor(props) {
    super(props)
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)}
  }

  render() {
    let pageArray = []
    let currentPage = this.props.currentPage
    let pageCount = 5
    let maxPage = this.props.maxPage
    var halfPageCount = parseInt(pageCount / 2)
    if (maxPage > pageCount) {
      let delta = maxPage - currentPage
      if (currentPage >= (halfPageCount + 1) && delta >= halfPageCount) {
        for (let j = 0; j < halfPageCount; j++) {
          pageArray.push(currentPage - (halfPageCount - j))
        }
        pageArray.push(currentPage)
        for (let k = 1; k <= halfPageCount; k++) {
          pageArray.push(currentPage + k)
        }
      } else if (currentPage <= (halfPageCount + 1)) {
        for (let i = 1; i <= pageCount; i++) {
          pageArray.push(i)
        }
      } else if (delta < halfPageCount) {
        for (let i = (pageCount - delta - 1); i > 0; i--) {
          pageArray.push(currentPage - i)
        }
        pageArray.push(currentPage)
        for (let i = 1; i <= delta; i++) {
          pageArray.push(currentPage + i)
        }
      }
    }
      return (
        <div style={{
          textAlign: 'center'
        }}>
          <RaisedButton label={'首页'} style={style}
            onClick={() => {this.props.handlePageClick(1)}
          }/>
          <RaisedButton label={'上一页'} style={style}
            onClick={this.props.handlePrePageClick}
          />
          {pageArray.map((page) => {
            let isActive = currentPage === page
              ? true
              : false
            return (
              <RaisedButton key={page} label={page} primary={isActive} style={style}
                onClick={() => {this.props.handlePageClick(page)}
              }/>
          )})}
          <RaisedButton label={'下一页'} style={style}
            onClick={this.props.handleNextPageClick}
          />
          <RaisedButton label={'尾页'} style={style}
            onClick={() => {this.props.handlePageClick(this.props.maxPage)}}
          />
        </div>
      )
    }
  }

  PageNavigation.propTypes = {
    currentPage: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    handleNextPageClick: PropTypes.func.isRequired,
    handlePrePageClick: PropTypes.func.isRequired
  }

  PageNavigation.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  export default PageNavigation
