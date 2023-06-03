import React from 'react';
import { Container, Header } from '../components/ui/Container';
import { Item, List } from '../components/ui/list';
import { Title } from '../components/ui/Text';

function Coins() {
	return (
		<>
			<Header>
				<Title>Coin List</Title>
			</Header>
			<Container>
				<List>
					<Item>으앙..</Item>
				</List>
			</Container>
		</>
	);
}

export default Coins;
