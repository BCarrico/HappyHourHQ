import React, { useDebugValue } from "react";
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../auth/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarActive, faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarInactive } from '@fortawesome/free-regular-svg-icons'
import { formatPhoneNumber } from 'react-phone-number-input'
import HHType from "./HHType";

import HeroImage from '../images/Hero800x800.png'


export default function DashboardText(){
    const { user } = useAuth();
    
    const navigate = useNavigate();

    const [dataHH, setDataHH] = React.useState([{}])
    const [isLoading, setLoading] = React.useState(true);
    const [dataLoaded, setDataLoaded] = React.useState(0);
    const [update, setUpdate] = React.useState(0)
    
    console.log(process.env.NODE_ENV)


  
    const [userData, setUserData] = React.useState([{}])
    React.useEffect(() => {
        function getUserData(){
            
            fetch("/getUserData", {credentials: 'include'})
            .then((response) => response.json())
            .then((data) => {
                // API REQUEST ENDS UP HERE IF/WHEN FETCH DATA IS RETURNED
                setUserData(data)
                setDataLoaded(prevValue => prevValue + 1)
            }); 
        }
        getUserData()         
    }, [])

    React.useEffect(() => {
        async function getHHData(){
            try {
                const response = await axios({
                    method: 'POST',
                    data: {
                        favArray: userData.favoritePosts
                    },
                    url: `/getFavoritePosts`
                }) 
                const data = await response.data
                setDataHH(data)
                
            } catch (err) {
                console.log(err);
            }  
            
            setLoading(false)

        }
        console.log(dataLoaded)
    if (dataLoaded != 0){
        getHHData()
    }
                
    }, [dataLoaded])

   
   
    const handleAddToFavorite = async event => {
        event.preventDefault();
        const button = event.currentTarget;
        console.log("added to favorites")
        setUserData(prevValue => {
            console.log(prevValue.favoritePosts, button.getAttribute('action'))
            return {
                ...prevValue,
                favoritePosts: [...prevValue.favoritePosts, button.getAttribute('action')]
            }
        })
        try {
            const response = await axios({
                method: 'put',
                data: {
                    post: button.getAttribute('action'),
                },
                url: `/addFavorite/${user._id}`
            }) 
        } catch (err) {
			console.log(err);
		}  
    }

    const handleRmFavorite = async event => {
        event.preventDefault()
        const button = event.currentTarget;
        console.log(`Removed from favorites`)
        
        setUserData(prevValue => {
            return {
                ...prevValue,
                favoritePosts: prevValue.favoritePosts.filter(id => id !== button.getAttribute('action'))
            }
        })
        
        try {
            const response = await axios({
                method: 'delete',
                data: {
                    post: button.getAttribute('action'),
                },
                url: `/rmFavorite/${user._id}`   
            })   
            
        } catch (err) {
			console.log(err);
		}    
    }

    
    function handleTime(time){
        let splitTime = time.split(":")
        if (Number(splitTime[0]) > 12){return `${Number(splitTime[0] - 12)}:${splitTime[1]} PM`} else {
            return `${splitTime[0]}:${splitTime[1]} AM`
        }
    }

   

    if (isLoading) {
        return (<div>
                    <div>Loading....</div>
                   <span>If not redirected click<a href="/dashboard"> HERE</a></span>
                </div>)
        
    }

    if (isLoading == false) return (
        
        <div>
            <h1 className="sm:hidden text-center text-3xl text-gray-200 border-b-3xl border-b-2 border-gray-600 pb-1 mx-4">Favorites</h1>

{/* Desktop View */}
<div className="hidden sm:flex justify-center">
{dataHH.map((item, index) => 
<div className="w-3/4 flex items-center p-5 lg:px-10 overflow-hidden relative ">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl sm:p-10 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="flex w-full md:w-1/2 px-10 mb-10 md:mb-0 ">
                <div className=" h-[150px] w-[150px]  sm:h-[275px] sm:w-[275px]">
                    {item.images.length > 0 ? <div className="w-full z-10">
                        <img src={HeroImage} className="border-4 border-yellow-200"/>
                    </div>  : <div className="flex items-center justify-center sm:p-3 sm:mx-1 border-black border rounded">No Photo Yet</div>}                           
                </div>
            </div>
            <div className=" text-xl md:w-1/2 px-10">
                <div className="mb-10">
                    <div className="flex items-center"><Link to ={`/HHPost/${item._id}`}><h1 className="font-bold uppercase text-3xl">{item.name}</h1></Link><span className="pl-2">- {item.city}</span></div>
                    <div className="star-rating flex items-center">
                              {item.ovRatingAvg != null ? <div>{String(item.ovRatingAvg).length === 1 ? <div className="pr-1">{item.ovRatingAvg}.0</div> : <div className="pr-1">{item.ovRatingAvg}</div>}</div> : <div className="hidden"></div>}
                              {[...Array(4)].map((star, index) => {
                              index += 1;
                              return (
                                 <div
                                 key={index}
                               className={item.ovRatingAvg <= index-1 || item.ovRatingAvg == undefined ? "text-gray-300" : "text-green-400"}
                              >
                            <span className="star text-xl">&#9733;</span>
                             </div> 
                         );
                         })}
                         <span className="text-sm text-sky-400 pl-1">({item.ratedBy.length})</span> 
                    </div>
                    <div>{handleTime(item.startTime)} - {handleTime(item.endTime)}</div>
                            <div className="flex text-lg space-x-1">
                                {item.monday && <div>M</div>}
                                {item.tuesday && <div>T</div>}
                                {item.wednesday && <div>W</div>}
                                {item.thursday && <div>Th</div>}
                                {item.friday && <div>F</div>}
                                {item.saturday && <div>Sa</div>}
                                {item.sunday && <div>Su</div>}
                            </div>
                            <HHType drinks={item.drinks} food={item.food}/>
                            <div className="text-lg">{formatPhoneNumber(item.phone)}</div>
                </div>
                <div>
                <div className="flex gap-x-2 -mb-4">
                    
                    <button className="btn text-white bg-sky-600 hover:bg-sky-900 w-2/5 mb-4 sm:w-auto sm:mb-0">Website & Menu</button>
                    <div>{
                            userData.favoritePosts.includes(item._id) ?
                            <div><button action={`${item._id}`} type="submit" className="btn text-white bg-sky-600 hover:bg-sky-900 w-2/5 mb-4 sm:w-auto sm:mb-0" onClick={handleRmFavorite}>Remove Favorites <FontAwesomeIcon icon={faStarActive} className="text-sky-400"/></button></div>
                             : 
                            <div><button action={`${item._id}`} type="submit" className="btn text-white bg-sky-600 hover:bg-sky-900 w-2/5 mb-4 sm:w-auto sm:mb-0" onClick={handleAddToFavorite}>Add To Favorites <FontAwesomeIcon icon={faStarInactive} className="text-sky-400"/></button></div>
                            }
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)}
</div>
{/* Mobile View */}
<div className="sm:hidden">
            {dataHH.map((item, index) => 
            
            <div className="z-[-10] flex justify-center py-2" >
                <div className="flex justify-center sm:justify-around bg-white shadow-xl flex-wrap rounded mx-4 sm:w-[60%] my-2 px-4 py-6 space-y-2 " key={index}>
   
                    <Link to ={`/HHPost/${item._id}`}><span className="text-2xl font-bold uppercase sm:pb-2">{item.name}</span></Link>
                    <div className="flex justify-between sm:w-1/4 p-1.5 sm:p-1 space-x-0.5 flex-grow">
                    <div className="flex-col flex justify-between sm:pl-2 sm:mx-1 w-1/2 sm:min-h-min">
                        <div className="sm:space-y-2">
                            <div className="star-rating flex items-center text-xl">
                                {item.ovRatingAvg != null ? <div>{String(item.ovRatingAvg).length === 1 ? <div className="pr-1">{item.ovRatingAvg}.0</div> : <div className="pr-1">{item.ovRatingAvg}</div>}</div> : <div className="hidden"></div>}
                                {[...Array(4)].map((star, index) => {
                                index += 1;
                                return (
                                    <div
                                    key={index}
                                    className={item.ovRatingAvg <= index-1 || item.ovRatingAvg == undefined ? "text-gray-300" : "text-green-400"}
                                    >
                                    <span className="star text-2xl">&#9733;</span>
                                    </div> 
                                );
                                })}
                                <span className="text-sm pt-0.5 text-sky-400 pl-1">({item.ratedBy.length})</span> 
                            </div>
                            <div className="sm:space-y-2">
                                <div className="text-lg">{handleTime(item.startTime)} - {handleTime(item.endTime)}</div>
                                <div className="flex text-lg space-x-1">
                                    {item.monday && <div>M</div>}
                                    {item.tuesday && <div>T</div>}
                                    {item.wednesday && <div>W</div>}
                                    {item.thursday && <div>Th</div>}
                                    {item.friday && <div>F</div>}
                                    {item.saturday && <div>Sa</div>}
                                    {item.sunday && <div>Su</div>}
                                </div>
                            </div>
                        
                        <HHType drinks={item.drinks} food={item.food}/>
                        <div className="text-lg sm:hidden">{item.city}, {item.state}</div>
                        <div className="text-lg">{formatPhoneNumber(item.phone)}</div>
                        <div className="flex justify-between items-center">
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}
                    {console.log(item.images)}
                    <div className=" pt-2">
                        {item.images.length > 0 ? <div className="w-full z-10">
                            <img src={item.images[0]} className="border-4 border-yellow-200  h-[175px] w-[175px] sm:h-[275px] sm:w-[275px]"/>
                        </div>  : <div className="flex items-center justify-center h-[175px] w-[175px]  sm:h-[275px] sm:w-[275px] border-black border rounded">No Photo Yet</div>}                           
                    </div>                           
                    </div>
                  
                    {/* MOBILE CONTACT INFO VIEW */}
                    <div className="sm:hidden flex justify-around p-1.5 space-x-0.5 flex-grow">        

                            {/* <span>Contact Info:</span> */}
                                <button className="btn text-white bg-sky-600 hover:bg-sky-900 w-2/5 sm:w-auto sm:mb-0">Website</button>
                        <div className="flex items-center justify-center">{
                            userData.favoritePosts.includes(item._id) ?
                            <div><button action={`${item._id}`} type="submit" onClick={handleRmFavorite}>Remove Favorites <FontAwesomeIcon icon={faStarActive} className="text-sky-400"/></button></div>
                             : 
                            <div><button action={`${item._id}`} type="submit" onClick={handleAddToFavorite}>Add To Favorites <FontAwesomeIcon icon={faStarInactive} className="text-sky-400"/></button></div>
                            }
                        </div>
                                                              
                    </div>       
                    </div>
                </div>
            
              
        )}
    </div>
        </div>
    )
}