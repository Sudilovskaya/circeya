import Card from './Card';


function Main(props) {
  return (
    <main className="main">
      <h1 className="headline">ut aliquip ex&nbsp;ea&nbsp;commodo consequat</h1>
      <div className="main__content">
        {props.images.map((image) => (
          <Card key={image.id} images={ image.img }/>
        ))}
      </div>
    </main>
  );
}

export default Main;
