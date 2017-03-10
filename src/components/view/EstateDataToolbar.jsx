import React,{PropTypes}  from 'react'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Download from 'material-ui/svg-icons/file/file-download'
import Search from 'material-ui/svg-icons/action/search'

class  Logged extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <IconMenu
        iconStyle={{color: '#fff'}}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="导出" onTouchTap={this.props.handleDataExport} leftIcon={<Download />}>
        </MenuItem>
        <MenuItem primaryText="查询" onTouchTap={this.props.handleSearchBarClick} leftIcon={<Search />}>
        </MenuItem>
      </IconMenu>
    )
  }
}

Logged.muiName = 'IconMenu'

class EstateDataToolbar extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)}
  }

  render () {
    return (
      <AppBar
        title={this.props.title}
        titleStyle={{textAlign: 'center'}}
        showMenuIconButton={false}
        iconElementRight={
          <Logged
          handleDataExport={this.props.handleDataExport}
          handleSearchBarClick={() => this.props.handleSearchBarClick(true)}
          />}
      />
    )
  }
}

EstateDataToolbar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

EstateDataToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  handleDataExport: PropTypes.func.isRequired,
  handleSearchBarClick: PropTypes.func.isRequired
}

export default EstateDataToolbar
