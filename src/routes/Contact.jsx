import React, { useState } from 'react'

const Contact = () => {
  const [phone, setPhone] = useState('')

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  // Web3Forms API
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "91fe85f0-01df-43b2-82c6-a30895f67435");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("success");
        event.target.reset();
        setPhone("");
        // Auto-hide success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gray-800 max-w-lg mx-auto mt-4 p-4 rounded-lg shadow-md mb-10 text-gray-100'>
      <h2 className='text-3xl font-bold text-center mb-4 text-[#00df9a]'>Contact Us</h2>
      
      {/* Success Alert */}
      {result === "success" && (
        <div className='mb-4 p-4 bg-green-600/50 border border-green-600 text-white rounded-md text-center animate-fade-in'>
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      
      {/* Error Alert */}
      {result === "error" && (
        <div className='mb-4 p-4 bg-red-600 text-white rounded-md text-center font-semibold'>
          ✗ Something went wrong. Please try again.
        </div>
      )}
      
      <form action="" onSubmit={onSubmit} 
      className='[&_div]:mb-4 [&_input]:bg-gray-800 [&_input]:w-full [&_input]:px-3 [&_input]:py-2 [&_input]:border 
      [&_input]:rounded-md [&_input]:focus:border-blue-500 [&_input]:focus:outline-none [&_label]:block [&_label]:text-sm 
      [&_label]:font-semibold'>
        <div>
          <label htmlFor="name">Name</label>
          <input placeholder='John Doe' required type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input placeholder='name@example.com' required type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input 
            placeholder='(123) 456-7890' 
            required 
            type="tel" 
            id="phone" 
            name="phone" 
            value={phone}
            onChange={handlePhoneChange}
            maxLength={14}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea placeholder='Type your message here...' 
          className='bg-gray-800 w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none' 
          required rows={4} id="message" name="message" />
        </div>
        <div className='flex justify-center'>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className='bg-[#00df9a] hover:bg-[#00df9a]/80 disabled:bg-gray-600 disabled:cursor-not-allowed
             text-black w-[200px] rounded-xs font-bold py-2 mt-3 cursor-pointer'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact