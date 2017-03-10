const SORT_RULE = {
  AVA_PROPERTYCOUNT_DESC: (a, b) => b.avaPropertyCount - a.avaPropertyCount,
  AVA_PROPERTYCOUNT_ASC: (a, b) => a.avaPropertyCount - b.avaPropertyCount,
  PROPERTYCOUNT_DESC: (a, b) => b.propertyCount - a.propertyCount,
  PROPERTYCOUNT_ASC: (a, b) => a.propertyCount - b.propertyCount,
  TRUSTREC_PROPERTYCOUNT_DESC: (a, b) => b.trustRecPropertyCount - a.trustRecPropertyCount,
  TRUSTREC_PROPERTYCOUNT_ASC: (a, b) => a.trustRecPropertyCount - b.trustRecPropertyCount,
  KEY_PROPERTYCOUNT_DESC: (a, b) => b.keyPropertyCount - a.keyPropertyCount,
  KEY_PROPERTYCOUNT_ASC: (a, b) => a.keyPropertyCount - b.keyPropertyCount,
  REALSUR_PROPERTYCOUNT_DESC: (a, b) => b.realSurPropertyCount - a.realSurPropertyCount,
  REALSUR_PROPERTYCOUNT_ASC: (a, b) => a.realSurPropertyCount - b.realSurPropertyCount,
  BMRECOM_PROPERTYCOUNT_DESC: (a, b) => b.bmRecomPropertyCount - a.bmRecomPropertyCount,
  BMRECOM_PROPERTYCOUNT_ASC: (a, b) => a.bmRecomPropertyCount - b.bmRecomPropertyCount,
  DMRECOM_PROPERTYCOUNT_DESC: (a, b) => b.dmRecomPropertyCount - a.dmRecomPropertyCount,
  DMRECOM_PROPERTYCOUNT_ASC: (a, b) => a.dmRecomPropertyCount - b.dmRecomPropertyCount
}

export default SORT_RULE
