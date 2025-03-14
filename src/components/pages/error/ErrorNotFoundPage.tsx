import { Link, useNavigate } from "react-router"

const ErrorNotFoundPage = () => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col justify-center h-lvh text-center gap-4">
      <h1 className="text-4xl">404 Not Found</h1>
      <p className="text-2xl">Sorry, the page you are looking for does not exist.</p>
      <Link to="#" onClick={() => navigation(-1)} className="btn btn-wide self-center">Go back to the homepage</Link>
    </div>
  )
}

export default ErrorNotFoundPage