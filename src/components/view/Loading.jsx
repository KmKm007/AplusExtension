import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const style = {
  textAlign: 'center',
  marginTop: '50px'
}

class Loading extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)}
  }
  render () {
    return (
     <div style={style}>
       <CircularProgress size={60} thickness={7} />
     </div>
    )
  }
}

Loading.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Loading
