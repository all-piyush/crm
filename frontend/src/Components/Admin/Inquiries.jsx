import React from 'react'

import { useNavigate, useOutletContext } from 'react-router-dom';




const Inquiries = (props) => {
  const url = import.meta.env.VITE_APP_URL;
  const navigate = useNavigate();
  const { inquiries, setinquiries } = useOutletContext();
  async function Delete(id) {
    const response = await fetch(`${url}/api/delete-inquiry/${id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    const result = await response.json();
    if (result.success) {

      const updated = inquiries.filter((inquiry) => inquiry._id !== id)
      setinquiries(updated);

    }
  }


  return (
    <div class="pt-4 w-full p-2">
      <div >
        <h2 className="text-4xl font-semibold mb-6">All Inquiries</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {inquiries.map((inquiry) => (
            <div key={inquiry._id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{inquiry.name}</h3>
                  <p className="text-gray-500 ">{inquiry.company}</p>
                </div>

                <span className="text-sm text-gray-600">
                  {inquiry.country}
                </span>
              </div>

              <div className="mt-5 space-y-2 ">
                <p className="break-all">
                  <span className="font-medium">Email:</span>{" "}
                  {inquiry.email}
                </p>

                <p className="text-red-500">
                  <span className="font-medium text-gray-700">Phone:</span>{" "}{inquiry.phone}
                </p>
              </div>

              <hr className="my-5" />

              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <p className="text-gray-500">Industry</p>
                  <p className="font-medium">{inquiry.industry}</p>
                </div>

                <div>
                  <p className="text-gray-500">Company Size</p>
                  <p className="font-medium">{inquiry.companysize}</p>
                </div>
              </div>

              <hr className="my-5" />

              <div>
                <p className="text-gray-500 mb-2">Message</p>

                <p className=" text-gray-700">{inquiry.message}</p>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button className="px-4 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-50 cursor-pointer">Update</button>

                <button className="px-4 py-2 border rounded-lg text-red-600 border-red-600 hover:bg-red-50 cursor-pointer" onClick={()=>{Delete(inquiry._id)}}> Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Inquiries
