import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol, StyledCard } from '../utils/styles'
import { experiences } from '../utils/const'
import Card from 'react-bootstrap/Card';

const cardColumnStyles = {
    padding: '15px'
}

const Experience = ({id}) => {

    return (
        <StyledContainer id={id}>
            <StyledRow>
                <StyledCol>
                    <StyledSpan><h5><AccentedIndex>[2]</AccentedIndex></h5><h3>My Experience</h3></StyledSpan>
                </StyledCol>
            </StyledRow>
            <StyledRow xs={1} md={1} lg={1} xl={1}>
                {experiences.map((experience) =>
                    <StyledCol style={cardColumnStyles}>
                        <StyledCard>
                            <Card.Body>
                                <Card.Title>{experience.designation} @ <StyledLink target="_blank" rel="noreferrer" href={experience.link}>{experience.organization}</StyledLink></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                                <Card.Text>
                                    {experience.description.map((point, index) => (
                                        <p>{point}</p>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </StyledCard>
                    </StyledCol>)
                }
            </StyledRow>
        </StyledContainer>
    );
}

export default Experience;
