import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="bg-linear-to-r from-[#0B0F1A] to-[#121826] min-h-screen md:px-15 py-3"
    >
      <Navbar />

      <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 bg-[#0B0F1A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#F8FAFC] leading-tight">
            Stream{" "}
            <span className="text-[#7C3AED]">Money</span>
            <br />
            In Real Time
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            ArbiStream lets you send & receive crypto{" "}
            <span className="text-[#38BDF8]">per-second</span>.
            <br />
            No waiting. No batching. Just continuous on-chain money flow.
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="/stream"
              className="
                md:px-8 px-4 py-3 text-lg rounded-xl font-medium
                bg-[#7C3AED] text-white
                hover:bg-[#6D28D9] transition
              "
            >
              Create Stream
            </a>

            <a
              href="/withdraw"
              className="
                md:px-8 px-4 py-3 text-lg rounded-xl font-medium
                border border-[#7C3AED] text-[#F8FAFC]
                hover:bg-[#7C3AED] transition
              "
            >
              Withdraw Stream
            </a>
          </div>

          <p className="text-[#94A3B8] text-sm mt-6">
            Powered by Arbitrum • Gas-optimized streaming protocol
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F1A] border-t border-[#1E293B]
                      py-4 md:hidden flex justify-center space-x-7 text-[#F8FAFC] font-light">

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#7C3AED" : "",
          })}
          className="hover:text-[#38BDF8] transition"
        >
          Home
        </NavLink>

        <NavLink
          to="/stream"
          style={({ isActive }) => ({
            color: isActive ? "#7C3AED" : "",
          })}
          className="hover:text-[#38BDF8] transition"
        >
          Stream
        </NavLink>

        <NavLink
          to="/withdraw"
          style={({ isActive }) => ({
            color: isActive ? "#7C3AED" : "",
          })}
          className="hover:text-[#38BDF8] transition"
        >
          Withdraw
        </NavLink>

        <NavLink
          to="/history"
          style={({ isActive }) => ({
            color: isActive ? "#7C3AED" : "",
          })}
          className="hover:text-[#38BDF8] transition"
        >
          History
        </NavLink>
      </div>
    </motion.div>
  );
}
