import { authPage } from "../middlewares/authorizationPage";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);
  console.log(token)

  return { 
    props: {
        token
    }
}

}

export default function Index(props) {
  

  return (
      <div>
        <h1>Ini index</h1>
      </div>
      
  );
}