import React from 'react';
import { useParams } from 'react-router';

import { ICoin } from '../types/coin';

function Coin() {
	const { id } = useParams<ICoin>();

	return <div>Coin: {id}</div>;
}

export default Coin;
