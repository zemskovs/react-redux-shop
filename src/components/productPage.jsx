import React from "react";
import { Container } from "semantic-ui-react";

const Product = props => {
	return (
		<Container>
			<Grid.Row>
				<Grid.Column>
					<Image src={props.image} />
				</Grid.Column>
				<Grid.Column>

				</Grid.Column>
			</Grid.Row>
		</Container>
	);
};
