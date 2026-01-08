import {
  Podcast,
  Home,
  BanknoteArrowDown,
  History,
  ArrowRightFromLine,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useWalletStore } from "../store/Connect";
import WalletDetails from "./WalletDetails";
import { useState } from "react";

function Navbar() {
  const { connectWallet, walletAddress, disconnectWallet } = useWalletStore();
  const [showWalletDetails, setShowWallets] = useState(false);

  return (
    <nav className="w-full bg-[#0B0F1A] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:px-6 px-3 pb-6 pt-2">

        {/* Logo */}
        <div className="text-3xl font-bold text-[#7C3AED]">
          ArbiStream
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-14 text-[#F8FAFC] font-light">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#7C3AED" : "",
            })}
            className="hover:text-[#38BDF8] transition flex space-x-2"
          >
            <Home />
            <span>HOME</span>
          </NavLink>

          <NavLink
            to="/stream"
            style={({ isActive }) => ({
              color: isActive ? "#7C3AED" : "",
            })}
            className="hover:text-[#38BDF8] transition flex space-x-2"
          >
            <Podcast />
            <span>STREAM</span>
          </NavLink>

          <NavLink
            to="/withdraw"
            style={({ isActive }) => ({
              color: isActive ? "#7C3AED" : "",
            })}
            className="hover:text-[#38BDF8] transition flex space-x-2"
          >
            <BanknoteArrowDown />
            <span>WITHDRAW</span>
          </NavLink>

          <NavLink
            to="/history"
            style={({ isActive }) => ({
              color: isActive ? "#7C3AED" : "",
            })}
            className="hover:text-[#38BDF8] transition flex space-x-2"
          >
            <History />
            <span>HISTORY</span>
          </NavLink>
        </div>

        {/* Wallet Section */}
        {walletAddress ? (
          <div className="flex items-center text-[#E5E7EB]">

            {/* Wallet Dropdown */}
            <div
              onClick={() => setShowWallets(!showWalletDetails)}
              className="flex items-center space-x-2 px-3 py-1 rounded-full cursor-pointer hover:bg-[#1A2238]"
            >
              <span>
                {walletAddress.slice(0, 6)}...
                {walletAddress.slice(-4)}
              </span>
              <ChevronDown />
            </div>

            {/* Disconnect Button */}
            <div
              onClick={disconnectWallet}
              className="ml-3 px-4 py-2 rounded-xl border border-[#7C3AED] text-[#F8FAFC]
                         hover:bg-[#7C3AED] transition transform hover:scale-95"
            >
              <ArrowRightFromLine size={20} />
            </div>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="
              flex items-center space-x-2
              text-[#F8FAFC]
              border border-[#7C3AED]
              px-4 py-2 rounded-xl
              hover:bg-[#7C3AED]
              transition font-medium text-lg
            "
          >
            <Wallet />
            <span>Connect Wallet</span>
          </button>
        )}

        {showWalletDetails && (
          <WalletDetails setShowWallets={() => setShowWallets(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
