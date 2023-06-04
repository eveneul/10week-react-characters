export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface ICoinParams {
  id: string;
}

export interface ICoinLocation {
  name: string;
}

export interface ICoinDetail {
  description: string;
  development_status: string;
  first_data_at: string;
  hardware_wallet: boolean;
  hash_algorithm: string;
  id: string;
  is_active: boolean;
  is_new: boolean;
  last_data_at: string;
  logo: string;
  message: string;
  name: string;
  open_source: boolean;
  org_structure: string;
  proof_type: string;
  rank: number;
  started_at: string;
  symbol: string;
}

export interface ICoinDetailPrice {
  beta_value: number;
  circulating_supply: number;
  first_data_at: string;
  id: string;
  last_updated: string;
  max_supply: number;
  name: string;
  rank: number;
  symbol: string;
  total_supply: number;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
