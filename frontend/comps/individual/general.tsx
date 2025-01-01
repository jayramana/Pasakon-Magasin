import { Laptop } from "../../types/types";



const General = ({ product }: { product: Laptop }) => {
  return (
    <div className="flex flex-col gap-2 pl-2  py-2 ">
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Name : </span>
      <span className="font-semibold text-white">{product?.name ?? 'N/A'}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Model : </span>
      <span className="font-semibold text-white">{product?.model ?? 'N/A'}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Brand : </span>
      <span className="font-semibold text-white">{product?.brand ?? 'N/A'}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Category : </span>
      <span className="font-semibold text-white">{product?.category ?? 'N/A'}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Weight : </span>
      <span className="font-semibold text-white">{product?.spec?.weight ?? 'N/A'}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Color : </span>
      <span className="font-semibold text-white">{product?.additionalDetails?.color ?? 'N/A'}</span>
      </p>
      <p>
        <span className="font-semibold text-teal-500 text-lg">Released On : </span>
        <span className="font-semibold text-white">{product?.release ?? 'N/A'}</span>
      </p>
  </div>
  )
}

export default General