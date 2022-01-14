import ComponentB from "./ComponentB";

export default function ComponentA(props) {
    return (
        <>
            <h1>Component A</h1>
            <ComponentB name={props.name}/>
        </>
    )
}
