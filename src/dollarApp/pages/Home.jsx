import { motion } from "framer-motion";
import { HomePage } from "../components/HomePage";

export const Home = () => {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%", backgroundColor: "#5f7ff5" }}
         exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
         <HomePage />
      </motion.div>
   );
};
