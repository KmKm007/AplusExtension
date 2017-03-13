import React, { PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import cs from 'classnames'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const style = {
  heanderTitle: {
    margin: '8px 0'
  },
  t1: {
    width: '20px'
  },
  t2: {
    width: '40px'
  },
  t3: {
    width: '60px'
  },
  t4: {
    width: '80px'
  },
  t5: {
    width: '100px'
  },
  t6: {
    width: '120px'
  },
  t7: {
    width: '140px'
  },
  t8: {
    width: '160px'
  },
  t9: {
    width: '180px'
  },
  t10: {
    width: '200px'
  }
}

class EstateData extends React.Component {
  constructor(props) {
    super(props)
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }
  render () {
    let activeHeaderClass = cs('table-header', 'active-table-header')
    let headerClass = cs('table-header')
    let sortRule = this.props.sortRule
    return (
      <div>
        <Table fixedHeader={true} >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>行政区</TableHeaderColumn>
              <TableHeaderColumn style={style.t6}>片区</TableHeaderColumn>
              <TableHeaderColumn style={style.t7}>楼盘</TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'PROPERTYCOUNT_ASC' || sortRule === 'PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handlePropertyCountClick}>房源总数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'AVA_PROPERTYCOUNT_DESC' || sortRule === 'AVA_PROPERTYCOUNT_ASC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleAvaPropertyCountClick}>有效房源
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'REALSUR_PROPERTYCOUNT_ASC' || sortRule === 'REALSUR_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleRealPropertyCountClick}>实勘房源
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'KEY_PROPERTYCOUNT_ASC' || sortRule === 'KEY_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleKeyPropertyCountClick}>钥匙房源
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'TRUSTREC_PROPERTYCOUNT_ASC' || sortRule === 'TRUSTREC_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleTrustRecPropertyCountClick}>委托房源
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'BMRECOM_PROPERTYCOUNT_ASC' || sortRule === 'BMRECOM_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleBMRecomPropertyCountClick}>经理推荐
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'DMRECOM_PROPERTYCOUNT_ASC' || sortRule === 'DMRECOM_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={this.props.handleDMRecomPropertyCountClick}>区经推荐
                </a>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
          {this.props.dataList.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableRowColumn>{data.estate.district.name}</TableRowColumn>
                <TableRowColumn style={style.t6}>{data.estate.region.name}</TableRowColumn>
                <TableRowColumn style={style.t7}><span title={data.estate.name}>{data.estate.name}</span></TableRowColumn>
                <TableRowColumn>{data.propertyCount}</TableRowColumn>
                <TableRowColumn>{data.avaPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.realSurPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.keyPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.trustRecPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.bmRecomPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.dmRecomPropertyCount}</TableRowColumn>
              </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

EstateData.propTypes= {
  dataList: PropTypes.array.isRequired,
  handlePropertyCountClick: PropTypes.func.isRequired,
  handleAvaPropertyCountClick: PropTypes.func.isRequired,
  handleRealPropertyCountClick: PropTypes.func.isRequired,
  handleKeyPropertyCountClick: PropTypes.func.isRequired,
  handleTrustRecPropertyCountClick: PropTypes.func.isRequired
}

EstateData.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default EstateData
