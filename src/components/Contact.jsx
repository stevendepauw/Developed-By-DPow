import React from "react";

const Contact = () => {
    return (
        <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/d7fb6a75-664d-4ca4-9ed6-1a2c73677623 " className="flex flex-col max-w-[600px] w-full">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-red-400 text-[#97D6D0]">Contact</p>
                    <p className="text-[#97D6D0] py-4">Submit the form below or email me at stevendepauw@rocketmail.com</p>
                </div>
                <input className="my-2 p-2 placeholder:text-black bg-gray-400" type="text" placeholder="Name" name='name' />
                <input className="my-2 p-2 placeholder:text-black bg-gray-400" type="email" placeholder="Email" name='enail' />
                <textarea className="my-2 p-2 placeholder:text-black bg-gray-400" name="message" cols='30' rows='10' placeholder="Enter message"></textarea>
                <button className="text-[#97D6D0] border-2 border-current px-3 py-2 my-2 flex items-center mx-auto hover:bg-red-400 hover:border-red-400">Send Message</button>
            </form>
        </div>
    )
}

export default Contact 