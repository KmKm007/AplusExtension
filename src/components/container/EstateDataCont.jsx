import React from 'react'
import EstateData from '../view/EstateData'
import PageNavigation from '../view/PageNavigation'
import Loading from '../view/Loading'
import EstateDataToolbar from '../view/EstateDataToolbar'
import EstateSearchBarView from '../view/EstateSearchBarView'
import districtList from '../../constant/districtList.js'
import { remove } from '../../util/ArrayUtil'
import SORT_RULE from '../../constant/sortRule'
import { url, exportUrl, regionListUrl } from '../../appConfig/urls'

class EstateDataCont extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      dataList: null,
      currentPage: 1,
      pageSize: 20,
      sortRule: 'AVA_PROPERTYCOUNT_DESC',
      showSearchBar: false,
      regionList: null,
      filter: {
        districtIdList: [],
        regionIdList: []
      }
    }
  }
  componentDidMount() {
    this.fetchData()
    this.fetchRegionList()
  }

  fetchData() {
    this.resetState()
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'filter=' + JSON.stringify(this.state.filter)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let dataList = null
      let maxPage = null
      if (responseJson.status === 0) {
        dataList = responseJson.dataList.sort(SORT_RULE[this.state.sortRule])
        let rowCount = dataList.length
        let pageSize = this.state.pageSize
        maxPage = rowCount % pageSize === 0 ?
                    rowCount / pageSize :(parseInt((rowCount / pageSize)) + 1)
      } else {
        console.log(responseJson.message)
      }
      this.setState({
        isLoaded: true,
        dataList,
        maxPage
      })
    })
    .catch((error) => {
      console.log(error)
      this.setState({
        isLoaded: true
      })
    })
  }

  fetchRegionList() {
    fetch(regionListUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === 0) {
        this.setState({
          regionList: responseJson.dataList
        })
      } else {
        console.log('异常')
      }

    })
  }

  resetState() {
    this.setState({
      isLoaded: false,
      dataList: null,
      maxPage: null,
      currentPage: 1,
      sortRule: 'AVA_PROPERTYCOUNT_DESC'
    })
  }

  computeShownRegionList() {
    let { regionList } = this.state
    let selectedDistrictIdList = this.state.filter.districtIdList
    let computedList = regionList.filter(region => {
        return selectedDistrictIdList
                .some(districtId => districtId === region.district.id)
      }
    )
    return computedList
  }

  handlePageClick = (page) => {
    this.setState({
      currentPage: page
    })
  }

  handleAvaPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'AVA_PROPERTYCOUNT_DESC') {
      rule = 'AVA_PROPERTYCOUNT_ASC'

    } else {
      rule = 'AVA_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleRealPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'REALSUR_PROPERTYCOUNT_DESC') {
      rule = 'REALSUR_PROPERTYCOUNT_ASC'

    } else {
      rule = 'REALSUR_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleKeyPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'KEY_PROPERTYCOUNT_DESC') {
      rule = 'KEY_PROPERTYCOUNT_ASC'

    } else {
      rule = 'KEY_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleTrustRecPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'TRUSTREC_PROPERTYCOUNT_DESC') {
      rule = 'TRUSTREC_PROPERTYCOUNT_ASC'

    } else {
      rule = 'TRUSTREC_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handlePropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'PROPERTYCOUNT_DESC') {
      rule = 'PROPERTYCOUNT_ASC'

    } else {
      rule = 'PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleBMRecomPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'BMRECOM_PROPERTYCOUNT_DESC') {
      rule = 'BMRECOM_PROPERTYCOUNT_ASC'
    } else {
      rule = 'BMRECOM_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleBMRecomPropertyCountClick = () => {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'BMRECOM_PROPERTYCOUNT_DESC') {
      rule = 'BMRECOM_PROPERTYCOUNT_ASC'

    } else {
      rule = 'BMRECOM_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleDMRecomPropertyCountClick() {
    let sortRule = this.state.sortRule
    let rule
    if (sortRule === 'DMRECOM_PROPERTYCOUNT_DESC') {
      rule = 'DMRECOM_PROPERTYCOUNT_ASC'

    } else {
      rule = 'DMRECOM_PROPERTYCOUNT_DESC'
    }
    this.setState({
      sortRule: rule,
      dataList: this.state.dataList.sort(SORT_RULE[rule])
    })
  }

  handleNextPageClick = () => {
    let currentPage = this.state.currentPage
    let maxPage = this.state.maxPage
    if (currentPage < maxPage) {
      this.setState({
        currentPage: currentPage + 1
      })
    }
  }

  handlePrePageClick = () => {
    let currentPage = this.state.currentPage
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1
      })
    }
  }

  handleDataExport = () => {
    window.location.href= exportUrl
  }

  handleSearchBarClick = open => {
    this.setState({
      showSearchBar: open
    })
  }

  handleSearchSubmit = () => {
    this.fetchData()
  }

  handleDistrictChipCilck = id => {
    let filter = this.state.filter
    let districtIdList = filter.districtIdList
    let isExist = districtIdList.some( d => d === id )
    if (isExist) {
      remove(id, districtIdList)
    } else {
      districtIdList.push(id)
    }
    this.setState({
      filter
    })
  }

  handleRegionChipClick = id => {
    let filter = this.state.filter
    let regionIdList = filter.regionIdList
    let isExist = regionIdList.some( i => i === id )
    if (isExist) {
      remove(id, regionIdList)
    } else {
      regionIdList.push(id)
    }
    this.setState({
      filter
    })
  }

  render() {
    if (!this.state.isLoaded)
      return <Loading />
    else {
      let currentPage = this.state.currentPage
      let pageSize = this.state.pageSize
      let dataList = this.state.dataList
      let renderDataList = dataList.slice((currentPage -1) * pageSize, currentPage * pageSize)
      let maxPage = this.state.maxPage
      return (
        <div>
          <EstateDataToolbar
            title={this.props.tableTitle}
            handleDataExport={() => this.handleDataExport()}
            handleSearchBarClick={ (open) => this.handleSearchBarClick(open) }
          />
          <EstateData
            dataList={renderDataList}
            handleTableCellClick={ (row, id) => this.handleTableCellClick(row, id) }
            handleAvaPropertyCountClick={ () => this.handleAvaPropertyCountClick() }
            handlePropertyCountClick={ () => this.handlePropertyCountClick() }
            handleTrustRecPropertyCountClick={ () => this.handleTrustRecPropertyCountClick() }
            handleRealPropertyCountClick={ () => this.handleRealPropertyCountClick() }
            handleKeyPropertyCountClick={ () => this.handleKeyPropertyCountClick() }
            handleBMRecomPropertyCountClick={ () => this.handleBMRecomPropertyCountClick() }
            handleDMRecomPropertyCountClick={ () => this.handleDMRecomPropertyCountClick() }
            sortRule={this.state.sortRule}
          />
          <PageNavigation currentPage={currentPage} maxPage ={maxPage}
            handlePageClick={ page => this.handlePageClick(page)}
            handlePrePageClick={ () => this.handlePrePageClick() }
            handleNextPageClick={ () => this.handleNextPageClick() }
          />
        <EstateSearchBarView
          open={ this.state.showSearchBar }
          handleSearchBarClick ={ open => this.handleSearchBarClick(open) }
          districtList={districtList}
          regionList={this.computeShownRegionList()}
          selectedDistrictIdList={this.state.filter.districtIdList}
          selectedRegionIdList={this.state.filter.regionIdList}
          handleDistrictChipCilck={ id => this.handleDistrictChipCilck(id) }
          handleRegionChipClick={ id => this.handleRegionChipClick(id)}
          handleSearchSubmit={ () => this.handleSearchSubmit() }
        />
        </div>
      )
    }
  }
}

EstateDataCont.defaultProps = {
  tableTitle: '楼盘信息统计表'
}

export default EstateDataCont
