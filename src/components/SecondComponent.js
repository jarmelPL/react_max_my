import './Component.css'

function SecondComponent(props) {
    props.showSth('something')

    return (
        <li>Second component</li>
    )
}

export default SecondComponent