"use client"
import Image from "next/image";
import { useRef, useState } from "react"
import countrydata from "@/_util/api/countriesData"
import departments from "@/_util/api/departments";
import Multiselect from "@/components/Multiselect/Multiselect";
import { Ban, DollarSign, Percent } from "lucide-react";
// import { newProduct } from "@/_util/action/createProduct";

export default function Upload({ toggle }) {
  let filteredCurrency = countrydata.filter(currency => currency.currencyNameEn !== "" && currency.currencyNameEn == currency.currencyNameEn)
  let deptRef = useRef(null);
  let catRef = useRef(null);
  let [category, setCategory] = useState("")
  let [segment, setSegment] = useState("");
  let [img, setImg] = useState([]);
  let [disc, setDisc] = useState(0);
  let [imgColor, setImgColor] = useState([]);
  const [value, setValue] = useState("");
  const discount = [
    {id: 0, name: "No Discount", icon: <Ban size={15} strokeWidth={2}/>},
    {id: 2, name: "Fixed", icon: <DollarSign size={15} strokeWidth={2}/>},
    {id: 3, name: "Percentage", icon: <Percent size={15} strokeWidth={2}/>},
  ]
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
  ];
  return (
    <div className="w-full h-auto transition-opacity">
      <form className="flex flex-col gap-2">
        <fieldset className="w-full flex gap-2 max-sm:flex-col ">
          <div className="w-full">
            <label htmlFor="title" className="text-sm font-semibold text-dim">
              Product Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="title"
              placeholder="Product Name"
              className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <label htmlFor="brand" className="text-sm font-semibold text-dim">
              Product Brand
            </label>
            <select
              required
              id="currency"
              className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-dim border-none bg-gray-50 rounded-2xl text-dim pe-2"
              name="brand"
            >
              <option className="text-dim" value="">
                --select brand--
              </option>
              <option value='apple'>
                Apple
              </option>
              <option value='apple'>
                Lg
              </option>
              <option value='apple'>
                Apple
              </option>
              <option value='apple'>
                Samsung
              </option>
              <option value='apple'>
                Gucci
              </option>
              <option value='apple'>
                Unilever
              </option>
              <option value='apple'>
                Nestel
              </option>
            </select>
          </div>
        </fieldset>
        <fieldset className="w-full flex gap-2 max-sm:flex-col ">
          <div className="w-full">
            <label
              htmlFor="currency"
              className="text-sm font-semibold text-dim"
            >
              Currency
            </label>
            <select
              required
              id="currency"
              className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-dim bg-gray-50 rounded-2xl text-dim pe-2"
              name="currency"
            >
              <option className="text-dim" value="">
                --Currency--
              </option>
              {filteredCurrency.map((currency, index) => (
                <option key={index} value={currency.currencyNameEn}>
                  {currency.currencyNameEn}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="price" className="text-sm font-semibold text-dim">
              Price
            </label>
            <input
              required
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim"
            />
          </div>
        </fieldset>
        <fieldset className="w-full flex gap-2 max-sm:flex-col ">
        <div className="w-full">
          <label
            htmlFor="avalability"
            className="text-sm font-semibold text-dim"
          >
            Quantity
          </label>
          <input
            required
            type="number"
            name="stock_amount"
            id="avalability"
            placeholder="Amount"
            className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim"
          />
        </div>
          <div className="w-full">
            <label htmlFor="discount" className="text-sm font-semibold text-dim">
              Discount
            </label>
            <div className="w-full flex relative items-center">
              <input
              required
              type="number"
              name="price"
              id="discount"
              disabled={disc == 0}
              placeholder="Discount"
              className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim"
            />
            <div className="absolute right-2 flex gap-1 items-center text-secondary">
              {discount.map((_, i) => (
                <div onClick={()=>{
                  setDisc(_.id)
                }} title={_.name} key={i} className={`p-1.5 rounded-full ${disc == _.id ? "bg-secondary  text-white" : "text-secondary"}`}>{_.icon}</div>))}
            </div>
          </div>
          </div>
        </fieldset>
        <div className="w-1/2 max-sm:w-full">
          <label
            htmlFor="avalability"
            className="text-sm font-semibold text-dim"
          >
            Quantity
          </label>
          <input
            required
            type="number"
            name="stock_amount"
            id="avalability"
            placeholder="Amount"
            className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim"
          />
        </div>
        <fieldset className="w-full flex gap-2 max-sm:flex-col ">
          <div className="w-1/2 h-auto rounded-lg">
            <span className="text-sm font-semibold text-dim">Description</span>
            <textarea name="description" placeholder="Description" className="w-full h-auto aspect-video rounded-2xl outline-none border-none p-2"></textarea>
          </div>
          <div className="w-1/2 max-md:w-full">
              <label className="text-sm font-semibold text-dim" htmlFor="img">
                Image
              </label>
              <input onChange={(e) => {
                setImg([...e.target.files])
              }} type="file" multiple accept="image/*" name="imges" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim" id="color" />
              
                {img ? <div className="w-full flex overflow-x-scroll gap-2 ">{img.map((_, i) => (
                  <Image key={i} src={URL.createObjectURL(_)} alt='image colors' className="w-1/3 h-auto aspect-square rounded-lg object-cover" width={100} height={100} />
              ))}</div> : null}
          </div>
        </fieldset>
        <fieldset className="w-full grid grid-cols-2 max-sm:flex gap-2 max-sm:flex-col ">
          <div className="w-full">
            <label
              htmlFor="category"
              className="text-sm font-semibold text-dim"
            >
              Department
            </label>
            <select
              required
              className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-dim bg-gray-50 rounded-2xl text-dim pe-2"
              name="department"
              id="department"
              onChange={() => {
                setCategory(deptRef.current.value);
              }}
              ref={deptRef}
            >
              <option className="" value="">
                --Department--
              </option>
              {departments.map((dept, index) => (
                <option key={index} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="subcategory"
              className="text-sm font-semibold text-dim"
            >
              Category
            </label>
            <select
              required
              className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-dim bg-gray-50 rounded-2xl text-dim pe-2"
              name="category"
              id="category"
              onChange={() => {
                setSegment(catRef.current.value);
              }}
              ref={catRef}
            >
              <option className="" value="">
                --Category--
              </option>
              {departments.map(
                (dept) =>
                  dept.name == category &&
                  dept.categories.map((cat, i) => (
                    <option key={i}>{cat.name}</option>
                  ))
              )}
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="segment"
              className="text-sm font-semibold text-dim"
            >
              Segment
            </label>
            <select
              required
              className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-dim bg-gray-50 rounded-2xl pe-2 text-dim marker:px-4 "
              name="segment"
              id="segment"
            >
              <option className="" value="">
                --Segment--
              </option>
              {departments.map(
                (dept) =>
                  dept.name == category &&
                  dept.categories.map(
                    (cat, i) =>
                      cat.name == segment &&
                      cat.segments.map((seg, i) => (
                        <option key={i}>{seg}</option>
                      ))
                  )
              )}
            </select>
          </div>
        </fieldset>
        <fieldset className="w-full flex gap-2 flex-col ">
          <label
            htmlFor="currency"
            className="text-sm font-semibold text-dim"
          >
            Tags
          </label>
          <Multiselect options={options} defaultValue="Select fruits" />
        </fieldset>
        <fieldset className="w-full flex gap-2 max-sm:flex-col">
        <div className="w-1/2 max-md:w-full">
              <label className="text-sm font-semibold text-dim" htmlFor="imageColor">
                Color
              </label>
              <input onChange={(e) => {
                setImgColor([...e.target.files])
              }} type="file" multiple accept="image/*" name="imageColor" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-dim bg-gray-50 rounded-2xl text-dim" id="imageColor" />
              
                {imgColor ? <div className="w-full flex overflow-x-scroll gap-2 ">{imgColor.map((_, i) => (
                  <Image key={i} src={URL.createObjectURL(_)} alt='image colors' className="w-1/3 h-auto aspect-square rounded-lg object-cover" width={100} height={100} />
              ))}</div> : null}
        </div>
        </fieldset>
        <button className="w-full rounded-full bg-primary py-2 font-semibold  text-white">
          Upload
        </button>
      </form>
      <div></div>
    </div>
  );
}