import Empty from "@/layouts/empty";

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
}

Custom500.getLayout = function getLayout(page) {
  return (
    <Empty>
      {page}
    </Empty>
  )
}
