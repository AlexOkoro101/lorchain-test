import { ClipLoader } from "react-spinners";

const LoadingState = () => {

  return (
    <div className="bg-bg w-full h-full flex justify-center items-center">
      <ClipLoader
        color="#cacaca"
        loading={true}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingState;