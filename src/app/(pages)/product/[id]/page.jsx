import Carousel from '@/components/Carousel/Carousel'
import Rating from '@/components/Rate/Rate'
import Image from 'next/image'

export default function Item() {
  return (
    <div className="flex gap-3">
        <div className="w-3/4 h-fit flex flex-col gap-3 bg-white rounded-3xl p-3">
            <div className="w-full h-auto flex gap-3 max-md:flex-col">
                <Carousel />
            <div className="">
                <p className=' line-clamp-1 text-dim text-lg'>Oyetade Kehinde David Goodness</p>
                <div className="flex gap-2 text-lg">
                    <h4 className='text-base font-medium text-dim'>Brand:</h4>
                    <span className='text-secondary'>Apple</span>
                </div>
                <div className="flex gap-2 text-lg items-center">
                    <h4 className='text-base font-medium text-dim'>Quantity:</h4>
                    <span className='text-sm'>285</span>
                </div>
                <label htmlFor="color" className='text-lg font-medium text-dim'>Color:</label>
                <ul id='color' className='w-full h-auto flex gap-2'>
                    <li className='w-14 aspect-square h-auto shrink-0'>
                        <Image className='w-full h-full rounded-lg' width={100} height={100} alt='' src="/assets/img/holiday.png"/>
                    </li>
                    <li className='w-14 aspect-square h-auto shrink-0'>
                        <Image className='w-full h-full rounded-lg' width={100} height={100} alt='' src="/assets/img/holiday.png"/>
                    </li>
                    <li className='w-14 aspect-square h-auto shrink-0'>
                        <Image className='w-full h-full rounded-lg' width={100} height={100} alt='' src="/assets/img/holiday.png"/>
                    </li>
                    <li className='w-14 aspect-square h-auto shrink-0'>
                        <Image className='w-full h-full rounded-lg' width={100} height={100} alt='' src="/assets/img/holiday.png"/>
                    </li>
                    <li className='w-14 aspect-square h-auto shrink-0'>
                        <Image className='w-full h-full rounded-lg' width={100} height={100} alt='' src="/assets/img/holiday.png"/>
                    </li>
                </ul>
                <label htmlFor="tag">Tags:</label>
                <ul id='tag' className='w-full h-fit flex flex-wrap gap-1 mt-1.5'>
                    <li className='rounded-full w-fit h-fit px-2 py-1 text-sm block text-white bg-secondary'>Best Seller</li>
                    <li className='rounded-full w-fit h-fit px-2 py-1 text-sm block text-white bg-secondary'>Free Shipping</li>
                    <li className='rounded-full w-fit h-fit px-2 py-1 text-sm block text-white bg-secondary'>Kit</li>
                    <li className='rounded-full w-fit h-fit px-2 py-1 text-sm block text-white bg-secondary'>Easter Special</li>
                    <li className='rounded-full w-fit h-fit px-2 py-1 text-sm block text-white bg-secondary'>Bonzy Promo</li>
                </ul>
                <label htmlFor="price">Percentage discount:</label>
                <p className='text-lg font-semibold text-secondary -py-1'>40%</p>
                <label htmlFor="price">Price:</label>
                <h4 className='text-2xl font-medium text-dim -py-3'>₦ 500,000</h4>
            </div>
            </div>
            <div className="text-base w-full h-auto">
                    <label htmlFor="description" className='font-medium text-dim'>Description:</label>
                    <div className="bg-gray-100 rounded-xl p-2 h-40 mt-1.5">
                        <span id='description' className='text-base text-dim rounded-lg text-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui id suscipit a. Corrupti perspiciatis, odio doloremque velit a adipisci pariatur quibusdam eius facere eveniet labore nemo. Blanditiis dignissimos officiis magni quis, perferendis consectetur similique velit distinctio alias eius eaque quam accusamus officia quos modi cupiditate!
                        </span>
                    </div>
                </div>
        </div>
        <div className="p-2 bg-white rounded-xl w-1/4 gap-2 flex flex-col">
            <div className="w-full  gap-2 px-4 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center justify-center text-dim text-lg"></div>
              <div className="flex gap-1 items-center">
                <p className="text-sm text-dim">3.5</p>
                <Rating size={25} rate={3.5} />
                <p className="text-sm text-dim">{3.5}</p>
              </div>
              <ul className="w-full flex flex-col gap-1">
                <li className="text-sm flex items-center">
                  1&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="1.2"
                  ></progress>
                  &nbsp;1.2
                </li>
                <li className=" text-sm flex items-center">
                  2&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="2.5"
                  ></progress>
                  &nbsp;2.5
                </li>
                <li className="text-sm flex items-center">
                  3&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="3.7"
                  ></progress>
                  &nbsp;3.7
                </li>
                <li className="text-sm flex items-center">
                  4&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="4.9"
                  ></progress>
                  &nbsp;4.9
                </li>
                <li className="text-sm flex items-center">
                  5&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="0.8"
                  ></progress>
                  &nbsp;0.8
                </li>
              </ul>
            </div>
            <ul>
              <li>Review (2)</li>
            </ul>
            <div className="w-full h-auto gap-2 flex flex-col">
                <div className="comments bg-gray-200 rounded-lg p-2">
                  <div className="flex justify-between items-center text-dim ">
                    <div className="flex items-center gap-1">
                      <p className="text-base">okennyd</p>
                      <Image
                        width={12}
                        height={10}
                        src="/assets/img/summer.png"
                        alt="flag"
                      />
                    </div>
                    <span className="flex items-center gap-1 -my-1 text-xs">
                      11:34pm
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <Rating
                      className="py-2"
                      size={15}
                      rate={3.5}
                    />
                    <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae voluptatibus ducimus tempore, a repellendus?</p>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}
