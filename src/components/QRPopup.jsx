import React from "react";
import { MdClose, MdDownload, MdQrCode2 } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import qrCode from "../assets/qr-code.webp";

const QRPopup = ({ onClose }) => {
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.ml.supportsystemsoft.mlsoftech";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999] p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 w-full max-w-md shadow-2xl relative animate-scaleIn border border-gray-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 text-gray-600 hover:text-gray-800 shadow-sm"
        >
          <MdClose size={20} />
        </button>

        {/* Header with Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MdQrCode2 className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get Our Mobile App
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Scan the QR code below to download our app from the Google Play Store and enjoy exclusive features!
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-inner border border-gray-100">
          <div className="flex justify-center">
            <img
              src={qrCode}
              alt="Scan to download app"
              className="w-48 h-48 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
          >
            <FaGooglePlay size={20} />
            Download from Play Store
          </a>
          
          <button className="flex items-center justify-center gap-3 w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium">
            <MdDownload size={18} />
            Share Download Link
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Available on Android devices
        </p>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { 
            transform: scale(0.8) translateY(-10px); 
            opacity: 0; 
          }
          to { 
            transform: scale(1) translateY(0); 
            opacity: 1; 
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default QRPopup;