// taken almost word for word from https://reactrouter.com/en/main/start/tutorial
// im not proud of it
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ margin: "150px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: 40, fontSize: "3rem" }}>Sorry,</h1>
      <p style={{ lineHeight: 0, color: "#777" }}>An unexpected error has occured:</p>
      <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        <i>{ error.statusText || error.message }</i>
      </p>
    </div>
  );
}

export default Error;
