import { CiFaceFrown } from "react-icons/ci";


const ErrorMessage = () => {
  return (
    <>
      <div >
        <CiFaceFrown marginTop="150" color="hsl(0, 95%, 50%)" size="40" />
        <p>Something went wrong... Try again later</p>
      </div>
    </>
  );
};
export default ErrorMessage;
