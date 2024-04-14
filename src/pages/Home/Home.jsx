import FirstSection from "./FirstSection";
import { motion } from "framer-motion";
import SecSection from "./SecSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <FirstSection />
      <SecSection />
    </motion.div>
  );
};

export default Home;
