import React from 'react'
import data from '../Assets/data'
import Items from '../../Components/Items/Items'

const RelatedProducts = () => {
  return (
    <section className="mt-10" id="Newcollection">
      <div className="flex py-5 flex-col items-center gap-5">
        <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase  font-bold xl:text-6xl ">
          Related Products
        </h1>
        <hr className=" w-[20%] sm:w-[10%] h-2  sm:h-3 bg-[#252525] rounded-md" />
      </div>
      <div className="flex flex-wrap gap-5 justify-center my-24">
        {data.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            title={item.name}
            newprice={item.new_price}
            oldprice={item.old_price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts