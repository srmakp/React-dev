// function component
export default function Profile() {
  const red = () => {
    alert("click on text");
  };
  return <div onClick={red}>Function component</div>;
}
