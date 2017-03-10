import React from 'react'
import EstateDataCont from '../container/EstateDataCont'

class EstateDataPage extends React.Component {
  componentDidMount() {
    document.title = this.props.title
  }
  render () {
    return (
      <div className="cont-estate-data">
        <EstateDataCont />
      </div>
    )
  }
}

EstateDataPage.defaultProps = {
  title: '楼盘信息统计'
}

export default EstateDataPage;
