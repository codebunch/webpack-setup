import img from './hello.png';

function MyButton() {
    return (
      <button onClick={handleClick}>
        hello I just a button
      </button>
    );
  }

function handleClick() {
  console.log('Button clicked');
}
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
        <img src={img} alt="Girl in a jacket" width="500" height="600"></img>
      </div>
    );
  }