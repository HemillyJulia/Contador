import "./UiButton.css";

const UiButton = (props) => {
    console.log (props)
  return (
    <button onClick = {props.onClick}>
      <span className="button_top"> {props.children}</span>
    </button>
    
  );
 

};

export default UiButton;
