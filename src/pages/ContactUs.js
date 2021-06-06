
//Animations 
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";


const ContactUs = () => {
    return (
        <motion.div 
        variants={pageAnimation} 
        exit="exit" 
        initial="hidden" 
        animate="show"
        style={{background:"#fff"}}
        >
            <h1>Our Contact </h1>
        </motion.div>
    );
};

export default ContactUs;