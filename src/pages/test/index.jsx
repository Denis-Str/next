import Empty from "@/layouts/empty";

export default function Test() {
  return (
    <h2>test page</h2>
  )
}

Test.getLayout = function getLayout(page) {
  return (
    <Empty>
      <section>{page}</section>
    </Empty>
  )
}
