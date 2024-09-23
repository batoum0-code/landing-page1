import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircleMore , X, Send } from 'lucide-react'
import logo from '../assets/logo/d.png';






const ChatBoot = () => {

  const phoneNumber = 212696550985;




  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState('')

  
  const whatsappNumber = "+212696550985"
  const companyName = "Elite Access"

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white rounded-lg shadow-xl w-80 mb-4 overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <img src={logo} alt="Company Logo" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h3 className="text-white font-semibold">{companyName}</h3>
                  <p className="text-green-100 text-sm">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 bg-gray-100 h-64 overflow-y-auto">
              <div className="bg-white p-3 rounded-lg shadow mb-2 max-w-[80%]">
                Hello! How can we assist you with your property search today?
              </div>
              {/* Add more messages here as needed */}
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
                />
                <button
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-bandPrimary transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Click the send button to continue on WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-green-600 text-white p-3  rounded-full shadow-lg hover:bg-bandPrimary transition-colors"
      >
        <MessageCircleMore  size={33} />
      </motion.button>
    </div>
  )
}

export default ChatBoot;