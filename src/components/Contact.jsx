import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";





function Contact() {

    // Function to copy email to clipboard
    const copyToClipboard = () => {
      const email = "priyanshushri5645@gmail.com"; // Replace with the email you want
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    }

  return (
    <div id="contact" className="pt-8 md:pt-0">
      <div className="container max-w-[1200px] mx-auto p-[20px] md:mt-[160px] mt-[50px] mb-[70px] md:mb-[145px]">
        <div className="text-center mb-12 ">
          <div className="mb-3 text-[#555555]">Get in Touch</div>
          <div className="text-[40px] md:text-[45px] font-bold">Contact Me</div>
        </div>
        <div className="shadow-lg hover:shadow-xl hover:cursor-pointer grid grid-cols-1 gap-6 md:flex md:gap-7 border-[2px] border-[#A3A3A3] rounded-[2rem] p-[15px] md:p-8 w-fit m-auto">
          
            <div className="flex flex-col items-center m-auto gap-3 md:flex md:flex-row md:gap-3">
                <IoMail fontSize={27}/>
                <a onClick={copyToClipboard}  className="hover:text-[#d41515] hover:underline hover:decoration-[#d41515] cursor-pointer md:text-[20px]" href="">priyanshushri5645@gmail.com</a>
            </div>

            <div className="flex flex-col items-center m-auto gap-3 md:flex md:flex-row md:gap-3">
                <BsLinkedin fontSize={25} />
                <a target="_blank" className="hover:text-[#d41515] hover:underline  hover:decoration-[#d41515] cursor-pointer md:text-[20px]" href="https://www.linkedin.com/in/priyanshu-shrivastav-4b7141218/">Linkedin</a>
            </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
