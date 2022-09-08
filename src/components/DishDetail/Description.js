import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import { baseUrl } from '../../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

export const Description = ({ dish }) => {
    return (
        <>
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </>

    );
}