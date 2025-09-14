function ExibirTextoPersonalizado(props) {
  return (
    <h1>
      Olá Mundo, {props.name} {props.idade}
    </h1>
  );
}

const Home = () => {
  <ExibirTextoPersonalizado nome="Rafael" idade="23" />;
};
export default Home;
/*
Olá
*/
