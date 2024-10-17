import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {

  const[image1,setImage1] = useState(false)
  const[image2,setImage2] = useState(false)
  const[image3,setImage3] = useState(false)
  const[image4,setImage4] = useState(false)

  const[name,setName] = useState("");
  const[description,setDescription] = useState("");
  const[price,setPrice] = useState("");
  const[category,setCategory] = useState("Men");
  const[subCategory,setSubCategory] = useState("Topwear");
  const[bestseller,setBestseller] = useState(false);
  const[sizes,setSizes] = useState([])


  const onSubmitHandler = async (e)=> {
    e.preventDefault();


    try{
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1  &&  formData.append("image1",image1)
      image2  &&  formData.append("image2",image2)
      image3  &&  formData.append("image3",image3)
      image4  &&  formData.append("image4",image4)
    
      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
      
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setSizes([])
        setBestseller(false)

      }else{
        toast.error(response.data.message)
      }
    }
    catch(error){
      console.log(error)
      toast.error(error.message)
    }
    }


  return(
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2 font-semibold"> Upload Image </p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-14" src={  !image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1"  hidden/>
          </label>
          <label htmlFor="image2">
            <img className="w-14" src={  !image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className="w-14" src={  !image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className="w-14" src={  !image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="mb-2 font-semibold">Product Name </p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" id="Product-Name" required />
      </div>

      <div className="w-full mt-4">
        <p className="mb-2 font-semibold">Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" id="Description" required />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8  mt-4">
        <div>
          <p className="mb-2 font-semibold">Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-3 py-2" name="Category">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>


        <div>
          <p className="mb-2 font-semibold ">Sub category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2" name="SubCategory">
            <option value="Topwear">Topwear</option>
            <option value="Underwear">Underwear</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <p className="mb-2 font-semibold ">Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="Number" placeholder="$$$$$$" id="Product-Price" />
        </div>
      </div>

<div className="mt-4">
    <p className="mb-2 font-semibold ">Product Sizes</p>
      <div className="flex gap-3 ">
          <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
            <p className={`${sizes.includes("S") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div  onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
            <p className={`${sizes.includes("M") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div  onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
            <p className={`${sizes.includes("L") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div  onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div  onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
      </div>

</div>

<div className="flex gap-2 mt-2">
  <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
  <label className="cursor-pointer" htmlFor="bestseller"> Add to bestseller </label>
</div>

<button type="submit" className="w-28 py-3 mt-4 bg-black text-white">Add Product</button>

    </form>
  )
}

export default Add