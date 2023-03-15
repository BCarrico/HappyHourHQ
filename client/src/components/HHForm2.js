import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import Footer from './Footer'

function SignUp() {
	

  let navigate = useNavigate();

  const [msg, setMsg] = React.useState({
      text: '',
      success: false,
  })

  const [formData, setFormData] = React.useState(
      {
          name: "", 
          startTime: "",
          endTime: "", 
          address: "",
          zipcode: "",
          state: "",
          city: "", 
          website: "https://",
          phone: "",
          monday: false, 
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false, 
          drinks: false,
          food: false,
          
          
      }
  )

  function handlePhoneChange(value){
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              phone: value,
          }
      })
      console.log(formData.phone)
  }

  function handleChange(event){
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
          console.log(formData)
          return{
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value,
          }
      })
  }

  const handleSubmit = async event => {
      event.preventDefault();
      try {
          console.log(formData.website)
          const response = await axios({
              method: 'POST',
              data: {
                  name: formData.name,
                  address: formData.address,
                  zipcode: formData.zipcode,
                  state: formData.state,
                  city: formData.city,
                  website: formData.website,
                  phone: formData.phone,
                  startTime: formData.startTime,
                  endTime: formData.endTime,
                  monday: formData.monday,
                  tuesday: formData.tuesday,
                  wednesday: formData.wednesday,
                  thursday: formData.thursday,
                  friday: formData.friday,
                  saturday: formData.saturday,
                  sunday: formData.sunday,
                  user: formData.user,
                  drinks: formData.drinks,
                  food: formData.food
              },
              url: '/createHH',
              withCredentials: true,
          });
          setMsg({
              text: response.data.message.msgBody,
              success: true,
          })
          setTimeout(() => navigate('/feed'), 1500)
      } catch (err) {
          console.log(err);
          
      }
      console.log(formData)
  };
	

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow" >

        <section className="bg-gradient-to-b from-gray-100 to-white ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl sm:w-4/5 xl:w-1/2 mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome to Happy Hour HQ!</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm sm:w-2/3 lg:w-1/3 mx-auto p-6 rounded shadow-2xl">
                <form onSubmit={handleSubmit}>
                 <div>
                      <label className="block text-gray-800 text-md font-medium my-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input 
                        name="userName" 
                        type="text" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Restaurant Name" 
                        onChange={handleChange}
                        value={formData.name}
                        required 
                      />
                  <div className="flex flex-wrap gap-4 -mx-3 mb-4">
                    <div className="w-full px-3 space-y-1">
                      <label className="block text-gray-800 text-md font-medium my-1">Location <span className="text-red-600">*</span></label>
                      <input 
                        name="address" 
                        type="text" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Street Address" 
                        onChange={handleChange}
                        value={formData.address}
                        required 
                      />
                      <input 
                        name="city" 
                        type="text" 
                        className="form-input w-full text-gray-800" 
                        placeholder="City" 
                        onChange={handleChange}
                        value={formData.city}
                        required 
                      />
                      {/* State Downdown Menu */}
                    
                      <select id="state" name="state" value={formData.state} onChange={handleChange} className="input rounded input-bordered w-full max-w-xs" required>
                          <option value="">Select A State</option>
                          <option value="AK">Alaska</option>
                          <option value="AL">Alabama</option>
                          <option value="AR">Arkansas</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DC">District of Columbia</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="IA">Iowa</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MD">Maryland</option>
                          <option value="ME">Maine</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MO">Missouri</option>
                          <option value="MS">Mississippi</option>
                          <option value="MT">Montana</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="NE">Nebraska</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NV">Nevada</option>
                          <option value="NY">New York</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VA">Virginia</option>
                          <option value="VT">Vermont</option>
                          <option value="WA">Washington</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WV">West Virginia</option>
                          <option value="WY">Wyoming</option>
                      </select>
                      <input 
                        name="zipcode" 
                        type="text" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Zipcode" 
                        onChange={handleChange}
                        value={formData.zipcode}
                        minLength={5}
                        maxLength={5}
                        required 
                      />
                      <label className="block text-gray-800 text-md font-medium my-1">Website <span className="text-red-600">*</span></label>
                      <input 
                        name="website" 
                        type="url" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Website" 
                        onChange={handleChange}
                        value={formData.website}
                        required 
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className="block text-gray-800 text-md font-medium mb-1 -mt-3" htmlFor="phone">Phone Number <span className="text-red-600">*</span></label>
                    <PhoneInput 
                    placeholder="Enter Phone Number"
                    defaultCountry="US"
                    onChange={handlePhoneChange}
                    value={formData.phone}
                    required
                    className="input rounded input-bordered w-full max-w-xs"
                    />
                  <label className="block text-gray-800 text-md font-medium my-1" htmlFor="startTime">Start Time <span className="text-red-600">*</span></label>
                  <input 
                    name="startTime" 
                    type="time" 
                    className="form-input w-full text-gray-800" 
                    onChange={handleChange}
                    value={formData.startTime}
                    step="1800"
                    required 
                  />
                  <label className="block text-gray-800 text-md font-medium my-1" htmlFor="endTime">End Time <span className="text-red-600">*</span></label>
                  <input 
                    name="endTime" 
                    type="time" 
                    className="form-input w-full text-gray-800" 
                    onChange={handleChange}
                    value={formData.endTime}
                    step="1800"
                    required 
                  />
                  <label className="block text-gray-800 text-md font-medium my-1 mb-3" htmlFor="drinks">Happy Hour Type</label>
                  <div className='flex gap-2'>
                    <input 
                      name="drinks"
                      id="drinks" 
                      type="checkbox" 
                      className="w-6 h-6" 
                      onChange={handleChange}
                      value={formData.drinks}
                      required 
                    />
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="drinks">Drinks <span className="text-red-600">*</span></label>
                    <input 
                      name="food"
                      id="food" 
                      type="checkbox" 
                      className="w-6 h-6" 
                      onChange={handleChange}
                      value={formData.food}
                      required 
                    />
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="drinks">Food <span className="text-red-600">*</span></label>
                  </div>
                  <label className="block text-gray-800 text-md font-medium my-2 mt-4" htmlFor="drinks">Days Open? <span className="text-red-600">*</span></label>
                  <div className="flex space-x-4 sm:space-x-4 w-full">
                      <div className="flex flex-col items-center">
                          <label htmlFor="monday" className="block text-gray-800 text-sm font-medium mb-1">M</label>
                          <input
                              type ="checkbox"
                              id="monday"
                              checked={formData.monday}
                              onChange={handleChange}
                              name="monday"
                              className="w-6 h-6"
                              
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="tuesday" className="block text-gray-800 text-sm font-medium mb-1">T</label>
                          <input
                              type ="checkbox"
                              id="tuesday"
                              checked={formData.tuesday}
                              onChange={handleChange}
                              name="tuesday"
                              className="w-6 h-6"
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="wednesday" className="block text-gray-800 text-sm font-medium mb-1">W</label>
                          <input
                              type ="checkbox"
                              id="wednesday"
                              checked={formData.wednesday}
                              onChange={handleChange}
                              name="wednesday"
                              className="w-6 h-6"
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="thursday" className="block text-gray-800 text-sm font-medium mb-1">Th</label>
                          <input
                              type ="checkbox"
                              id="thursday"
                              checked={formData.thursday}
                              onChange={handleChange}
                              name="thursday"
                              className="w-6 h-6"
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="friday" className="block text-gray-800 text-sm font-medium mb-1">F</label>
                          <input
                              type ="checkbox"
                              id="friday"
                              checked={formData.friday}
                              onChange={handleChange}
                              name="friday"
                              className="w-6 h-6"
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="saturday" className="block text-gray-800 text-sm font-medium mb-1">Sa</label>
                          <input
                              type ="checkbox"
                              id="saturday"
                              checked={formData.saturday}
                              onChange={handleChange}
                              name="saturday"
                              className="w-6 h-6"
                          />
                      </div>
                      <div className="flex flex-col items-center">
                          <label htmlFor="sunday" className="block text-gray-800 text-sm font-medium mb-1">Su</label>
                          <input
                              type ="checkbox"
                              id="sunday"
                              checked={formData.sunday}
                              onChange={handleChange}
                              name="sunday"
                              className="w-6 h-6"
                          />
                      </div>
                  </div>
                </div>
                  <div className={msg.success ? 'text-green-400 text-center font-semibold -mb-2 mt-2': 'text-red-400 font-semibold text-center -mb-2 mt-2'}>
								      {msg ? msg.text : ''}
							    </div>
                  <div className="flex flex-wrap -mx-3 mt-12">
                    <div className="w-full px-3">
                      <button className="btn text-black bg-sky-400 hover:bg-sky-700 w-full">Submit</button>
                    </div>
                  </div>

                </form>               

                
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;