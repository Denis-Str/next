import {useSelector} from "react-redux";
import { fetchHitsList, hitsList } from "@/redux/hits";
import { wrapper } from "@/redux";
import Preloader from "@/components/common/Preloader";
import SalesList from "@/components/pages/Index/TopSales";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => await store.dispatch(fetchHitsList())
);

function HomePage() {
  const hits = useSelector(hitsList) || [];

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Preloader />
        <SalesList list ={hits} />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Preloader />
      </section>
    </>
  )
}
// import axios from "axios";
// function HomePage({hits}) - тут принимаем как пропс
// export async function getStaticProps() {
//   const { data: hits } = await axios.get('http://localhost:7070/api/top-sales');
//
//   return {
//     props: {
//       hits,
//     },
//   }
// }

export default HomePage;
