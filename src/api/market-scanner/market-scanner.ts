export enum LocationCode {
  BOND_US = "BOND.US",
  EFP = "EFP",
  //  FUT_ECBOT = "FUT.ECBOT",
  FUT_EU_BELFOX = "FUT.EU.BELFOX",
  //  FUT_EU_DTB = "FUT.EU.DTB",
  FUT_EU_FTA = "FUT.EU.FTA",
  FUT_EU_IDEM = "FUT.EU.IDEM",
  FUT_EU_LIFFE = "FUT.EU.LIFFE",
  FUT_EU_MEFFRV = "FUT.EU.MEFFRV",
  FUT_EU_MONEP = "FUT.EU.MONEP",
  FUT_EU = "FUT.EU",
  //  FUT_GLOBEX = "FUT.GLOBEX",
  FUT_HK_HKFE = "FUT.HK.HKFE",
  FUT_HK_JAPAN = "FUT.HK.JAPAN",
  FUT_HK_KSE = "FUT.HK.KSE",
  FUT_HK_NSE = "FUT.HK.NSE",
  FUT_HK_OSE_JPN = "FUT.HK.OSE.JPN",
  FUT_HK_SGX = "FUT.HK.SGX",
  FUT_HK_SNFE = "FUT.HK.SNFE",
  FUT_HK_TSE_JPN = "FUT.HK.TSE.JPN",
  FUT_HK = "FUT.HK",
  FUT_IPE = "FUT.IPE",
  FUT_NA_CDE = "FUT.NA.CDE",
  FUT_NA = "FUT.NA",
  FUT_NYBOT = "FUT.NYBOT",
  // FUT_NYMEX = "FUT.NYMEX",
  FUT_NYSELIFFE = "FUT.NYSELIFFE",
  FUT_US = "FUT.US",
  IND_EU_BELFOX = "IND.EU.BELFOX",
  // IND_EU_DTB = "IND.EU.DTB",
  IND_EU_FTA = "IND.EU.FTA",
  IND_EU_LIFFE = "IND.EU.LIFFE",
  IND_EU_MONEP = "IND.EU.MONEP",
  IND_EU = "IND.EU",
  IND_HK_HKFE = "IND.HK.HKFE",
  IND_HK_JAPAN = "IND.HK.JAPAN",
  IND_HK_KSE = "IND.HK.KSE",
  IND_HK_NSE = "IND.HK.NSE",
  IND_HK_OSE_JPN = "IND.HK.OSE.JPN",
  IND_HK_SGX = "IND.HK.SGX",
  IND_HK_SNFE = "IND.HK.SNFE",
  IND_HK_TSE_JPN = "IND.HK.TSE.JPN",
  IND_HK = "IND.HK",
  IND_US = "IND.US",
  SLB_AQS = "SLB.AQS",
  STK_AMEX = "STK.AMEX",
  STK_ARCA = "STK.ARCA",
  STK_EU_AEB = "STK.EU.AEB",
  STK_EU_BM = "STK.EU.BM",
  STK_EU_BVME = "STK.EU.BVME",
  STK_EU_EBS = "STK.EU.EBS",
  STK_EU_IBIS = "STK.EU.IBIS",
  STK_EU_IBIS_ETF = "STK.EU.IBIS-ETF",
  STK_EU_IBIS_EUSTARS = "STK.EU.IBIS-EUSTARS",
  STK_EU_IBIS_NEWX = "STK.EU.IBIS-NEWX",
  STK_EU_IBIS_USSTARS = "STK.EU.IBIS-USSTARS",
  STK_EU_IBIS_XETRA = "STK.EU.IBIS-XETRA",
  STK_EU_LSE = "STK.EU.LSE",
  STK_EU_SBF = "STK.EU.SBF",
  STK_EU_SBVM = "STK.EU.SBVM",
  STK_EU_SFB = "STK.EU.SFB",
  STK_EU_SWISS = "STK.EU.SWISS",
  STK_EU_VIRTX = "STK.EU.VIRTX",
  STK_EU = "STK.EU",
  STK_HK_ASX = "STK.HK.ASX",
  STK_HK_NSE = "STK.HK.NSE",
  STK_HK_SEHK = "STK.HK.SEHK",
  STK_HK_SGX = "STK.HK.SGX",
  STK_HK_TSE_JPN = "STK.HK.TSE.JPN",
  STK_HK = "STK.HK",
  STK_NA_CANADA = "STK.NA.CANADA",
  STK_NA_TSE = "STK.NA.TSE",
  STK_NA_VENTURE = "STK.NA.VENTURE",
  STK_NA = "STK.NA",
  STK_NASDAQ_NMS = "STK.NASDAQ.NMS",
  STK_NASDAQ_SCM = "STK.NASDAQ.SCM",
  STK_NASDAQ = "STK.NASDAQ",
  STK_NYSE = "STK.NYSE",
  STK_OTCBB = "STK.OTCBB",
  STK_PINK = "STK.PINK",
  STK_US_MAJOR = "STK.US.MAJOR",
  STK_US_MINOR = "STK.US.MINOR",
  STK_US = "STK.US",
  WAR_EU_ALL = "WAR.EU.ALL",
}

export enum Instrument {
  STK = "STK",
  BOND = "BOND",
  EFP = "EFP",
  FUT_EU = "FUT.EU",
  FUT_HK = "FUT.HK",
  FUT_NA = "FUT.NA",
  FUT_US = "FUT.US",
  IND_EU = "IND.EU",
  IND_HK = "IND.HK",
  IND_US = "IND.US",
  PMONITOR = "PMONITOR",
  PMONITORM = "PMONITORM",
  SLB_US = "SLB.US",
  STOCK_EU = "STOCK.EU",
  STOCK_HK = "STOCK.HK",
  STOCK_NA = "STOCK.NA",
  WAR_EU = "WAR.EU",
}

export enum ScanCode {
  TOP_PERC_GAIN,
  TOP_PERC_LOSE,
  MOST_ACTIVE,
  ALL_SYMBOLS_ASC,
  ALL_SYMBOLS_DESC,
  BOND_CUSIP_AZ,
  BOND_CUSIP_ZA,
  FAR_MATURITY_DATE,
  HALTED,
  HIGH_BOND_ASK_CURRENT_YIELD_ALL,
  HIGH_BOND_ASK_YIELD_ALL,
  HIGH_BOND_DEBT_2_BOOK_RATIO,
  HIGH_BOND_DEBT_2_EQUITY_RATIO,
  HIGH_BOND_DEBT_2_TAN_BOOK_RATIO,
  HIGH_BOND_EQUITY_2_BOOK_RATIO,
  HIGH_BOND_EQUITY_2_TAN_BOOK_RATIO,
  HIGH_BOND_NET_ASK_CURRENT_YIELD_ALL,
  HIGH_BOND_NET_ASK_YIELD_ALL,
  HIGH_BOND_NET_SPREAD_ALL,
  HIGH_BOND_SPREAD_ALL,
  HIGH_COUPON_RATE,
  HIGH_DIVIDEND_YIELD,
  HIGH_DIVIDEND_YIELD_IB,
  HIGHEST_SLB_BID,
  HIGH_GROWTH_RATE,
  HIGH_MOODY_RATING_ALL,
  HIGH_OPEN_GAP,
  HIGH_OPT_IMP_VOLAT,
  HIGH_OPT_IMP_VOLAT_OVER_HIST,
  HIGH_OPT_OPEN_INTEREST_PUT_CALL_RATIO,
  HIGH_OPT_VOLUME_PUT_CALL_RATIO,
  HIGH_PE_RATIO,
  HIGH_PRICE_2_BOOK_RATIO,
  HIGH_PRICE_2_TAN_BOOK_RATIO,
  HIGH_QUICK_RATIO,
  HIGH_RETURN_ON_EQUITY,
  HIGH_SYNTH_BID_REV_NAT_YIELD,
  HIGH_VS_13W_HL,
  HIGH_VS_26W_HL,
  HIGH_VS_52W_HL,
  HOT_BY_OPT_VOLUME,
  HOT_BY_PRICE,
  HOT_BY_PRICE_RANGE,
  HOT_BY_VOLUME,
  LIMIT_UP_DOWN,
  LOW_BOND_BID_CURRENT_YIELD_ALL,
  LOW_BOND_BID_YIELD_ALL,
  LOW_BOND_DEBT_2_BOOK_RATIO,
  LOW_BOND_DEBT_2_EQUITY_RATIO,
  LOW_BOND_DEBT_2_TAN_BOOK_RATIO,
  LOW_BOND_EQUITY_2_BOOK_RATIO,
  LOW_BOND_EQUITY_2_TAN_BOOK_RATIO,
  LOW_BOND_NET_BID_CURRENT_YIELD_ALL,
  LOW_BOND_NET_BID_YIELD_ALL,
  LOW_BOND_NET_SPREAD_ALL,
  LOW_BOND_SPREAD_ALL,
  LOW_COUPON_RATE,
  LOWEST_SLB_ASK,
  LOW_GROWTH_RATE,
  LOW_MOODY_RATING_ALL,
  LOW_OPEN_GAP,
  LOW_OPT_IMP_VOLAT,
  LOW_OPT_IMP_VOLAT_OVER_HIST,
  LOW_OPT_OPEN_INTEREST_PUT_CALL_RATIO,
  LOW_OPT_VOLUME_PUT_CALL_RATIO,
  LOW_PE_RATIO,
  LOW_PRICE_2_BOOK_RATIO,
  LOW_PRICE_2_TAN_BOOK_RATIO,
  LOW_QUICK_RATIO,
  LOW_RETURN_ON_EQUITY,
  LOW_SYNTH_ASK_REV_NAT_YIELD,
  LOW_VS_13W_HL,
  LOW_VS_26W_HL,
  LOW_VS_52W_HL,
  LOW_WAR_REL_IMP_VOLAT,
  MARKET_CAP_USD_ASC,
  MARKET_CAP_USD_DESC,
  MOST_ACTIVE_AVG_USD,
  MOST_ACTIVE_USD,
  NEAR_MATURITY_DATE,
  NOT_OPEN,
  OPT_OPEN_INTEREST_MOST_ACTIVE,
  OPT_VOLUME_MOST_ACTIVE,
  PMONITOR_AVAIL_CONTRACTS,
  PMONITOR_CTT,
  PMONITOR_IBOND,
  PMONITOR_RFQ,
  TOP_OPEN_PERC_GAIN,
  TOP_OPEN_PERC_LOSE,
  TOP_OPT_IMP_VOLAT_GAIN,
  TOP_OPT_IMP_VOLAT_LOSE,
  TOP_PRICE_RANGE,
  TOP_STOCK_BUY_IMBALANCE_ADV_RATIO,
  TOP_STOCK_SELL_IMBALANCE_ADV_RATIO,
  TOP_TRADE_COUNT,
  TOP_TRADE_RATE,
  TOP_VOLUME_RATE,
  WSH_NEXT_ANALYST_MEETING,
  WSH_NEXT_EARNINGS,
  WSH_NEXT_EVENT,
  WSH_NEXT_MAJOR_EVENT,
  WSH_PREV_ANALYST_MEETING,
  WSH_PREV_EARNINGS,
  WSH_PREV_EVENT,
}
