import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function History() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="min-h-screen bg-[radial-gradient(circle_at_center,#1E1B4B,#0B0F1A,#020617)]
                 px-3 md:px-16 py-6"
    >
      <Navbar />

      <section className="max-w-5xl mb-10 mx-auto">
        {/* Header */}
        <div className="mt-12 bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7C3AED]">
            Stream History
          </h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">
            View all past streams, withdrawals, and completed payment flows on
            ArbiStream.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="px-5 py-2 rounded-full bg-[#7C3AED] text-white text-sm font-medium">
            All
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-white/60 hover:text-[#38BDF8] transition text-sm">
            Completed
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-white/60 hover:text-[#38BDF8] transition text-sm">
            Withdrawals
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-white/60 hover:text-[#38BDF8] transition text-sm">
            Cancelled
          </button>
        </div>

        {/* History Cards */}
        <div className="mt-10 space-y-6">

          {/* Completed */}
          <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-white/10
                          text-white/70 hover:-translate-y-1 transition transform">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-white/50">Stream ID #1023</p>
              <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400">
                Completed
              </span>
            </div>

            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <p><span className="font-semibold">FROM:</span> 0x4fg...abxd</p>
                <p><span className="font-semibold">TO:</span> 0x9da...98af</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-white">5.00 ETH</p>
                <p className="text-xs text-white/50">Duration: 7 days</p>
              </div>
            </div>
          </div>

          {/* Withdrawn */}
          <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-white/10
                          text-white/70 hover:-translate-y-1 transition transform">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-white/50">Withdrawal</p>
              <span className="px-3 py-1 rounded-full text-xs bg-sky-500/20 text-sky-400">
                Withdrawn
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p><span className="font-semibold">FROM STREAM:</span> #1021</p>
                <p className="text-xs text-white/50">0x9da...98af</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-white">1.42 ETH</p>
              </div>
            </div>
          </div>

          {/* Cancelled */}
          <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-white/10
                          text-white/70 hover:-translate-y-1 transition transform">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-white/50">Stream ID #1018</p>
              <span className="px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-400">
                Cancelled
              </span>
            </div>

            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <p><span className="font-semibold">FROM:</span> 0x4fg...abxd</p>
                <p><span className="font-semibold">TO:</span> 0x7ac...21dd</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-white">0.80 ETH</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F1A] border-t border-[#1E293B]
                   py-4 md:hidden flex justify-center space-x-7 text-[#F8FAFC]"
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "#7C3AED" : "" })}
          className="hover:text-[#38BDF8] transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/stream"
          style={({ isActive }) => ({ color: isActive ? "#7C3AED" : "" })}
          className="hover:text-[#38BDF8] transition"
        >
          Stream
        </NavLink>
        <NavLink
          to="/withdraw"
          style={({ isActive }) => ({ color: isActive ? "#7C3AED" : "" })}
          className="hover:text-[#38BDF8] transition"
        >
          Withdraw
        </NavLink>
        <NavLink
          to="/history"
          style={({ isActive }) => ({ color: isActive ? "#7C3AED" : "" })}
          className="hover:text-[#38BDF8] transition"
        >
          History
        </NavLink>
      </div>
    </motion.div>
  );
}

export default History;
