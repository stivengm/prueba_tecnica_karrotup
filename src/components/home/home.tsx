import { Link } from "react-router-dom";

function Home() {

  return (
    <div style={{ gap: '20px', display: 'flex' }}>
      <Link to="/colombia">
        <button>
          Colombia
        </button>
      </Link>
      <Link to="/mexico">
        <button>
          México
        </button>
      </Link>
    </div>
  )
}

export default Home;
