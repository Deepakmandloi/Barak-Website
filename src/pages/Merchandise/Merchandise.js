// import  Axios from "axios";
import React, { useState } from "react";
import merchandise from "./Merchandise.module.css"
import Logo2 from "./LOGO2.jpg";

const MERCHANDISE_AMOUNT=400; // in Rs

function Merchandise() {
    
    let data={
        name:"",
        rollNo:"",
        phone:"",
        room:"",
        nameOnTshirt:"",
        numberOnTshirt:"",
        shirtSize:"",
    }; 
    const handleChange=(e)=>{
        data[e.target.id]=e.target.value;
        // console.log(data)
    }
    
    const loadScript=(src)=>{
        return new Promise((resolve)=>{
            const script=document.createElement('script')
            script.src=src;  
            console.log(script); 
            script.onload=()=>{
                resolve(true)
            }
            script.onerror=()=>{
                resolve(false); 
            }
            document.body.appendChild(script); 
        })
    }
    const handleOrder=async (amount)=>{
        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js'); 
        if(!res){
            alert("You are offline, failed to complete order");
            return;  
        }    
        const options={
            key:"rzp_test_3uyfJIMonL5dbe",

            currency:"INR",
            amount:amount*100, 
            name:"BARAK HOSTEL",
            description:"Thank you for purchasing, JAI BARAK!",
            image:Logo2,
            handler : function(res){
                alert("Payment Succesful"); 
                // backend post request using axios
            },
            prefill:{
                name:"Barak"
            }
        };
        // if(res.razorpay_payment_id){
            // backend post request using axios
        // }
        const paymentObject=new window.Razorpay(options)
        paymentObject.open(); 

    }
    const handleSubmit=(e)=>{
        console.log("data",data); 
        console.log("Handle Submit called");
        e.preventDefault();
        console.log("prevent default passed & calling handleorder"); 
        handleOrder(MERCHANDISE_AMOUNT);
        console.log("End of control ")
    }
    const DisplayFirst = () => {
      
        

        return (
            <div className={merchandise.textcontainer}>
                <p className={merchandise.heading}>Barak T-Shirt</p>

                <form
                    className={merchandise.form}
                    method=""
                    action=""
                    onSubmit={handleSubmit}
                >
                    <input
                        name="name"
                        className={merchandise.inputbox}
                        type="text"
                        id="name"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Name"
                        required
                    ></input>
                    <input
                        name="rollNo"
                        className={merchandise.inputbox}
                        type="string"
                        id="rollNo"
                        min={0}
                        onChange={(e)=>handleChange(e)}
                        placeholder="roll number"
                        required
                    ></input>
                    <input
                        name="phone"
                        className={merchandise.inputbox}
                        type="tel"
                        id="phone"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Phone number" 
                        pattern="[0-9]{10}"
                        required
                    ></input>
                    {/* <input 
                        type="text" 
                        className={merchandise.inputbox}
                        id="room" 
                        name="room" 
                        onChange={(e)=>handleChange(e)}
                        required>
                    </input> */}
                    <input
                        name="nameOnTshirt"
                        className={merchandise.inputbox}
                        type="text"
                        id="nameOnTshirt"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Name on T-Shirt"
                        required
                    ></input>
                    <input
                        name="numberOnTshirt"
                        className={merchandise.inputbox}
                        type="text"
                        id="numberOnTshirt"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Number on T-shirt"
                        required
                    ></input>
                    {/* <input
                        name="shirtSize"
                        className={merchandise.inputbox}
                        type="number"
                        id="shirtSize"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Size"
                        min={1}
                        required
                    ></input> */}
                    {/* <label for="shirtSize"> Shirt Size </label>   */}
                    <select id="shirtSize"  onChange={(e)=>handleChange(e)}>  
                    <option value = "NULL"> Select shirt size   
                    </option>  
                    <option value = "S"> S   
                    </option>  
                    <option value = "M"> M   
                    </option>  
                    <option value = "XL"> XL  
                    </option>  
                    <option value = "XXL"> XXL  
                    </option>  
                    </select>  

                    {/* <input
                        name="course"
                        className={merchandise.inputbox}
                        type="text"
                        id="course"
                        onChange={(e)=>handleChange(e)}
                        placeholder="course"
                        required
                    ></input> */}
                    <button
                      type="submit"
                    >
                        Pay 400
                    </button>
                </form>
            </div>
        );
    };

    // const DisplaySecond = () => {
    //     return (
    //         <>
    //             <p className={merchandise.confirmedup}>Booking confirmed</p>
    //             <p className={merchandise.confirmeddown}>
    //                 Your booking confirmation has been sent to your email.
    //             </p>
    //         </>
    //     );
    // };

    const [display] = useState(DisplayFirst);
    // setdisplay(DisplayFirst); 

    return (
        <div className={merchandise.fullcontainer}>
            <div className={merchandise.leftcontainer}></div>
            <div className={merchandise.rightcontainer}>{display}</div>
        </div>
    );
}

export default Merchandise;