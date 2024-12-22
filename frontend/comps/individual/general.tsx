import { Laptop } from "../../types/types";



const General = ({ product }: { product: Laptop }) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Name : </span>
      <span>{product?.name ?? 'N/A'}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Model : </span>
      <span>{product?.model ?? 'N/A'}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Brand : </span>
      <span>{product?.brand ?? 'N/A'}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Category : </span>
      <span>{product?.category ?? 'N/A'}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Weight : </span>
      <span>{product?.spec?.[0]?.weight ?? 'N/A'}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Color : </span>
      <span>{product?.additionalDetails?.[0]?.color ?? 'N/A'}</span>
    </p>
  </div>
  )
}

export default General