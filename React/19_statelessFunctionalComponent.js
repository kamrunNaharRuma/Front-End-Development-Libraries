class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper/>
            </div>
        );
    }
};

const Camper = (props) => {
    return (
        <h1>
            <p>{props.name}</p>
        </h1>
    )
}
Camper.propTypes = {
    name: PropTypes.string.isRequired
}
Camper.defaultProps = {
    name: 'CamperBot'
}


// Change code below this line
