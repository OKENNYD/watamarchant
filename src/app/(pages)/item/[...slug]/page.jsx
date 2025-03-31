"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Images from "@/_util/constants/images";
import Rating from "@/components/Rate/Rate";
import goods from "../../../../_util/api/goods"
import { IoAdd, IoHeart, IoRemove, IoClose, IoClipboardOutline, IoHeartOutline, IoChevronForward, IoTicket, IoMedalOutline, IoCashOutline, IoCar, IoTimeOutline, IoPaperPlane, IoText, IoShieldCheckmark, IoBus } from "react-icons/io5";
import { useGlobalContext } from "@/_util/constants/context";
import { useParams } from "next/navigation";

export default function Item({ params }) {
  const { currencyCode } = useGlobalContext();
  let [stockCount, setStockCount] = useState(1)
  let [liked, setLiked] = useState(false)
  let [colorPick, setColorPick] = useState(false)

  useEffect(() => {
    let filterGoods = goods.filter(stock => stock.id === 2)
    console.log(filterGoods);
  }, [])
  let imgSrc = useRef(null)
  let imgClick = (e) => {
    console.log(e.currentTarget);
  }
  let handleClick = () => {
    setLiked(!liked)
  }
  let handleIncrement = () => {
    setStockCount(stockCount++);
  }
  let handleDecrement = (e) => {
    e.currentTarget.disabled = true;
    setStockCount(stockCount--);
  }

  return (
    <div className="w-full px-8 max-sm:px-2 py-4 h-auto flex gap-4 max-sm:flex-col">
      <div className="w-full m-auto h-auto gap-4 flex flex-col">
        <div className="flex max-sm:flex-col max-sm:gap-1 gap-3">
          <div className=" w-full h-auto flex max-sm:flex-col gap-2 max-sm:gap-2 bg-white max-sm:bg-transparent rounded-3xl p-2">
            <div className="flex w-4/6 box-border max-sm:flex-col max-md:flex-col">
              <Image
                src={Images.dimension}
                alt="product img"
                className=" mx-auto w-auto rounded-2xl aspect-square h-full"
                priority
              />
              <div className="flex p-2 flex-col max-md:flex-row max-sm:flex-row w-1/4 max-sm:w-full max-md:w-full gap-2">
                <input type="radio" className="sr-only peer/thumbnail1" name="size" id="cover1" />
                <label htmlFor="cover1" className="overflow-hidden w-[76px] max-sm:w-16 md:w-16 aspect-square object-contain border-2 rounded-xl peer-checked/thumbnail1:border-primary">
                  <Image
                    src={Images.dimension}
                    alt="product img"
                    onClick={imgClick}
                    className="aspect-square w-full h-full"
                    priority
                  />
                </label>
                <input type="radio" className="sr-only peer/thumbnail2" name="size" id="cover2" />
                <label htmlFor="cover2" className="overflow-hidden w-[76px] max-sm:w-16 md:w-16 aspect-square object-contain border-2 rounded-xl peer-checked/thumbnail2:border-primary">
                  <Image
                    src={Images.dimension}
                    alt="product img"
                    className="aspect-square w-full h-full"
                    priority
                  />
                </label>
                <input type="radio" className="sr-only peer/thumbnail3" name="size" id="cover3" />
                <label htmlFor="cover3" className="overflow-hidden w-[76px] max-sm:w-16 md:w-16 aspect-square object-contain border-2 rounded-xl peer-checked/thumbnail3:border-primary">
                  <Image
                    src={Images.dimension}
                    alt="product img"
                    className="aspect-square w-full h-full"
                    priority
                  />
                </label>
                <input type="radio" className="sr-only peer/thumbnail4" name="size" id="cover4" />
                <label htmlFor="cover4" className="overflow-hidden w-[76px] max-sm:w-16 md:w-16 aspect-square object-contain border-2 rounded-xl peer-checked/thumbnail4:border-primary">
                  <Image
                    src={Images.dimension}
                    alt="product img"
                    className="aspect-square w-full h-full"
                    priority
                  />
                </label>
                <input type="radio" className="sr-only peer/thumbnail5" name="size" id="cover5" />
                <label htmlFor="cover5" className="overflow-hidden w-[76px] max-sm:w-16 md:w-16 aspect-square object-contain border-2 rounded-xl peer-checked/thumbnail5:border-primary">
                  <Image
                    src={Images.dimension}
                    alt="product img"
                    className="aspect-square w-full h-full"
                    priority
                  />
                </label>

              </div>
            </div>
            <div className="w-2/6 box-border max-sm:w-full h-auto gap-2 flex flex-col">
              <h2 className="font-bold text-lg text-slate-600">Product name</h2>
              <div className="flex gap-2 flex-col">
                <div className="font-normal text-xs text-slate-600 inline-flex gap-1" ><Rating />
                  <p className="">4.7</p></div>
                <div className="font-normal text-xs text-slate-600 flex gap-4">
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-slate-600 font-semibold text-center" >
                      671
                    </span>
                    reviews
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-slate-600 font-semibold text-center">
                      100+
                    </span>
                    sold
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-slate-600 font-semibold text-center" >
                      150
                    </span>
                    stock
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-[24px]  text-red-600 font-semibold text-center" onClick={handleClick}>
                      {liked ? <IoHeart /> : <IoHeartOutline className="text-slate-400" />}
                    </span>

                  </p>
                </div>
              </div>
              <hr className="px-4" />
              <form>
                <div className=" box-border text-lg font-semibold">
                  <h3 className=" text-slate-600">Color: blue</h3>
                  <div className="gap-2 flex h-8 flex-row ">
                    <input checked type="radio" className="sr-only peer/blue" name="size" id="img3" />
                    <label htmlFor="img3" className="h-8 w-8 overflow-hidden border-2 rounded-xl peer-checked/blue:border-primary">
                      <Image
                        src={Images.dimension}
                        alt="product img"
                        className="aspect-square w-full h-full"
                        priority
                      />
                    </label>
                    <input type="radio" className="sr-only peer/red" name="size" id="img4" />
                    <label htmlFor="img4" className="h-8 w-8 overflow-hidden border-2 rounded-xl peer-checked/red:border-primary">
                      <Image
                        src={Images.dimension}
                        alt="product img"
                        className="aspect-square w-full h-full"
                        priority
                      />
                    </label>
                  </div>
                </div>
                <div className=" w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-slate-600">Size:</h3>
                  <div className="gap-2 flex h-8 flex-row ">
                    <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                    <label htmlFor="42" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
                    <input checked type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                    <label htmlFor="43" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
                  </div>
                </div>
                {/* <div className=" w-auto h-auto box-border text-lg font-semibold">
              <h3 className=" text-slate-600">Plug:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
              </div>
            </div>
            <div className=" w-auto h-auto box-border text-lg font-semibold">
              <h3 className=" text-slate-600">Material:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
              </div>
            </div> */}
                <div className=" w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-slate-600">Quantity:</h3>
                  <div className=" p-1 w-24 h-8 gap-2 flex text-slate-600 items-center text-1xl outline-0 border-0 bg-slate-200 rounded-full cursor-pointer ">
                    <button onClick={handleDecrement} className=" text-2xl text-white bg-primary dark:bg-secondary rounded-full" >
                      <IoRemove />
                    </button>
                    <p className=" w-full border-0 outline-0 text-center bg-transparent">{stockCount}
                    </p>
                    <button onClick={handleIncrement} className=" text-2xl text-white bg-primary dark:bg-secondary rounded-full" >
                      <IoAdd />
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="price w-full items-baseline flex gap-2 ">
                  <p className=" -my-[2px] text-2xl max-sm:text-base font-bold flex items-baseline text-slate-500">
                    <span className=" max-sm:text-xs text-sm">{currencyCode}</span>
                    3000.00
                  </p>
                  <p className=" -my-[2px] text-lg line-through flex items-baseline text-slate-400 font-medium">
                    <span className=" max-sm:text-xs text-sm">{currencyCode}</span>
                    260.87
                  </p>
                </div>
                <div className="w-full flex gap-2 px-2">
                  <button className="mt-2 w-full py-1 font-bold border-2 border-slate-400 rounded-full text-slate-400">
                  Buy Now
                </button>
                  <button className="mt-2 w-full py-1 font-bold rounded-full text-white bg-primary">
                  Add to Cart
                </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-2/5 max-sm:w-full h-auto flex flex-col gap-3 ">
            <div className="w-full h-auto rounded-2xl bg-white p-2">
              <div className=" bg-secondary font-semibold flex items-center justify-between text-white pe-4 ps-2 rounded-lg py-2">
                <div className="flex gap-1 items-center">
                  <IoTicket />
                  <p>Discount & Coupon</p>
                </div>
                <IoChevronForward />
              </div>
              <div className=" p-2 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 rounded-full px-2 w-auto h-auto">
                  <IoMedalOutline />
                  Best Seller
                </span>
                <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 rounded-full px-2 w-auto h-auto">
                  <IoCashOutline />
                  Best Price
                </span>
                <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 rounded-full px-2 w-auto h-auto">
                  <IoCar />
                  Fast Delivery
                </span>
              </div>
              <div className="flex ps-4 text-slate-400 font-semibold text-xl items-center">
                <span>-25% off</span>
              </div>
                <div className=" text-normal text-sm text-slate-400">
                  <span className="flex items-center gap-1 font-bold text-sm text-slate-600"><IoBus/> Free Shipping</span>
                  <p className="flex ps-4">Delivery: <span className=" font-semibold">April 3rd-17th</span></p>
              </div>
              <div className=" text-normal text-sm text-slate-400">
                  <span className="flex items-center gap-1 font-bold text-sm text-slate-600"><IoClipboardOutline/> Return Delivery</span>
                  <p className="flex ps-4">Returns between: <span className=" font-semibold">April 3rd-17th</span></p>
              </div>
            </div>
            <div className="w-full h-auto rounded-2xl bg-white p-2">
              <span className="flex items-center gap-1 font-bold text-sm text-slate-600"><IoShieldCheckmark/> Security & Privacy</span>
              <p className="text-slate-400 text-sm font-normal">
              Safe payments: We do not share your personal details with any third partie without your consent.
              </p>
              <p className="text-slate-400 text-sm font-normal">
              Secure personal details: We protect your privacy and keep your personal details safe and secure.
              </p>
            </div>
            <div className="w-full h-auto rounded-2xl bg-white p-2">
              <div className=" flex justify-between items">
                <div className="seller-Logo -my-1 flex items-center">
                <Image
                    src={Images.shop}
                    alt="user"
                    className=" h-5 w-5 rounded-full"
                    priority
                  />
                  <p className=" font-bold text-slate-800 text-base">Seller Logo</p>
                </div>
                <IoChevronForward className=" text-slate-400 text-xl" />
              </div>
              <h1 className=" font-medium text-base ps-2 text-slate-600">About shop owner</h1>
              <p className=" text-sm text-slate-400 ps-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nihil ea eligendi repellendus est quos corporis similique odit quis impedit error qui iste ratione,...</p>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-3">
          <div className="w-full h-auto bg-white rounded-3xl px-4 py-2">
            <h2 className="text-slate-600 text-lg font-bold">Description</h2>
            <div className="w-fill h-auto">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ut nulla rerum ab, recusandae quis similique, vel numquam quidem libero veritatis! Distinctio eos saepe, iusto voluptates molestias quis reiciendis aliquid doloribus cupiditate illo cumque corrupti doloremque magnam aperiam laudantium est error, ad numquam odio hic? Rerum illum omnis et ducimus veritatis qui totam doloremque mollitia explicabo, eaque eum id? Pariatur laborum perferendis eos ratione? Ab dolorum harum sed tempora quibusdam exercitationem? Quisquam harum ducimus, incidunt suscipit voluptatem tempora illum doloremque rerum sapiente odit a exercitationem veniam sequi labore, distinctio eum minus! Inventore cumque harum voluptates incidunt nostrum corrupti veniam dignissimos.
              </p>
            </div>
          </div>
          <div className="reviews w-2/5 max-sm:w-full h-auto bg-white rounded-3xl px-4 py-2">
            <h2 className="text-slate-600 text-lg font-bold">Reviews</h2>
            <div className="w-full h-auto">
              <div className="flex flex-col py-2 gap-2">
                <div className="comments flex gap-1 ">
                  <Image
                    src={Images.avatar}
                    alt="user"
                    className=" h-10 w-10 rounded-full"
                    priority
                  />
                  <div className="flex flex-col gap-1 bg-slate-200 rounded-xl p-2">
                    <div className=" flex flex-col">
                      <p className="text-sm text-slate-400 font-medium">Oyetade kehinde</p>
                      <span className="flex items-center gap-1 -my-1 text-xs text-slate-300 font-medium"><IoTimeOutline /> 11:34pm</span>
                    </div>
                    <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur magni enim quas quam veritatis?</p>
                  </div>
                </div>
                <div className="comments flex gap-1 ">
                  <Image
                    src={Images.avatar}
                    alt="user"
                    className=" h-10 w-10 rounded-full"
                    priority
                  />
                  <div className="flex flex-col gap-1 bg-slate-200 rounded-xl p-2">
                    <div className=" flex flex-col">
                      <p className="text-sm text-slate-400 font-medium">Oyetade kehinde</p>
                      <span className="flex items-center gap-1 -my-1 text-xs text-slate-300 font-medium"><IoTimeOutline /> 11:34pm</span>
                    </div>
                    <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur magni enim quas quam veritatis?</p>
                  </div>
                </div>
                <div className="comments flex flex-row-reverse gap-1 ">
                  <Image
                    src={Images.avatar}
                    alt="user"
                    className=" h-10 w-10 rounded-full"
                    priority
                  />
                  <div className="flex flex-col gap-1 bg-slate-200 rounded-xl p-2">
                    <div className=" flex flex-col text-right">
                      <p className="text-sm text-slate-400 font-medium">Oyetade kehinde</p>
                      <span className="flex items-center text-right justify-end gap-1 -my-1 text-xs text-slate-300 font-medium"><IoTimeOutline /> 11:34pm</span>
                    </div>
                    <p className="text-sm text-slate-400 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur magni enim quas quam veritatis?</p>
                  </div>
                </div>
              </div>
              <form className=" w-full p-1 flex h-10 dark:bg-slate-600 bg-slate-200 max-sm:h-10 overflow-hidden rounded-full">
                <input
                  type="text"
                  name="subscription"
                  id="subscription"
                  className=" outline-none text-base w-full max-sm:w-full max-sm:text-lg caret-primary dark:caret-secondary px-2 bg-inherit placeholder:text-slate-400"
                  placeholder="comment"
                />
                <button
                  type="submit"
                  className=" rounded-3xl text-xs px-2 h-full w-auto text-white max-sm:text-base dark:bg-secondary bg-primary font-bold "
                >
                  <IoPaperPlane size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
