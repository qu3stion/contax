

function Contact(props) {


  return (
    <div>

    <img src={props.person.picture.medium} alt="photo"/>

    <div>
    <h1>props.person.name.first</h1>
    <h2>props.person.name.last</h2>
    <h3>props.person.phone</h3>
    <h4>props.person.cell</h4>


    </div>

  )

}

export default Contact
