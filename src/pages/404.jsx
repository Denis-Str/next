import { useSelector } from "react-redux";
import { errorMessage } from "@/redux/errors";

export default function ErrorPage() {
  const message = useSelector(errorMessage)
  return (
    <div className="row">
      <div className="col">
        <section className="top-sales">
          <h2 className="text-center">Страница не найдена</h2>
          <p>
            Извините, такая страница не найдена!
            { message }
          </p>
        </section>
      </div>
    </div>
  )
}
