import Keto from "../components/Keto";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      //transition={{ duration: 0.75 }}
    >
      <Keto />
      <Popular />
    </motion.div>
  );
}

export default Home;