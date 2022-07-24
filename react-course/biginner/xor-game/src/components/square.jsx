

const Square = (props) => {

    return (
        <button className="square"
            onClick={() => props.handleChangeSqStatus(props.value, props.number)}>
                {props.value}
        </button>
    )
}

export default Square;