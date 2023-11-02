import Click from "./Click"


function Welcome(props) {
  return (
    <section>
    <h1 class="">Welcome {props.firstname} {props.lastname}!</h1>
    <Click />
    </section>
  );
}

export default Welcome