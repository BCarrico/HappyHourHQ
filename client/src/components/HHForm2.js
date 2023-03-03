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
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl sm:w-4/5 xl:w-1/2 mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome to Happy Hour HQ!</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm sm:w-2/3 lg:w-1/3 mx-auto">
                <form onSubmit={handleSubmit}>
                 <div>
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input 
                        name="userName" 
                        type="text" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Restaurant Name" 
                        onChange={handleChange}
                        value={formData.name}
                        required 
                      />
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1">Location <span className="text-red-600">*</span></label>
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
                      <label className="block text-gray-800 text-sm font-medium mb-1">Website <span className="text-red-600">*</span></label>
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
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phone">Phone Number <span className="text-red-600">*</span></label>
                    <PhoneInput 
                    placeholder="Enter Phone Number"
                    defaultCountry="US"
                    onChange={handlePhoneChange}
                    value={formData.phone}
                    required
                    className="input rounded input-bordered w-full max-w-xs"
                    />
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="startTime">Start Time <span className="text-red-600">*</span></label>
                  <input 
                    name="startTime" 
                    type="time" 
                    className="form-input w-full text-gray-800" 
                    onChange={handleChange}
                    value={formData.startTime}
                    step="1800"
                    required 
                  />
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="endTime">End Time <span className="text-red-600">*</span></label>
                  <input 
                    name="endTime" 
                    type="time" 
                    className="form-input w-full text-gray-800" 
                    onChange={handleChange}
                    value={formData.endTime}
                    step="1800"
                    required 
                  />
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="drinks">Happy Hour Type</label>
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

                  {/* CONTINUE TRANSITION HERE */}

                  </div>
                </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confirm Password <span className="text-red-600">*</span></label>
                      <input 
                        name="confirmPassword" 
                        type="password" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className={msg.success ? 'text-green-400 text-center font-semibold -mb-2 mt-2': 'text-red-400 font-semibold text-center -mb-2 mt-2'}>
								      {msg ? msg.text : ''}
							    </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-black bg-sky-400 hover:bg-sky-700 w-full">Sign up</button>
                    </div>
                  </div>
                  
                  {/* TERMS AND CONDITIONS + PRIVACY POLICY NEEDED
                  

                  {/* <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                                </div> */}
                </form>               
                {/* OR LINE + ADDITIONAL AUTH */}


                {/* <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </form> */}
                <div className="text-gray-600 text-center mt-6">
                  Already using Happy Hour HQ? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;