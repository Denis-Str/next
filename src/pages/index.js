import {useDispatch} from "react-redux";
import { fetchHitsList, setHitsList } from "@/redux/hits";
import axios from "axios";

function HomePage() {
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const { data: hits } = await axios.get('http://localhost:7070/api/top-sales');

  return {
    props: {
      hits,
    },
  }
}

export default HomePage;
