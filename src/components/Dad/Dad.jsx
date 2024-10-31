import MySelf from "../MySelf/MySelf"
import Brother from "../Brother/Brother"
import Sister from "../Sister/Sister"

function Dad({asset}) {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
       <MySelf asset={asset}></MySelf>
       <Brother></Brother>
       <Sister></Sister>
      </section>
    </div>
  )
}

export default Dad
