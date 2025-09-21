import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Gift, Coins, CreditCard, Smartphone, Building } from 'lucide-react';

const Donations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('harvest');

  const donationTypes = [
    {
      id: 'harvest',
      name: 'Harvest Offering',
      description: 'Special harvest thanksgiving offering',
      icon: Gift
    },
    {
      id: 'tithe',
      name: 'Tithe',
      description: 'Regular tithe contribution',
      icon: Coins
    },
    {
      id: 'donation',
      name: 'General Donation',
      description: 'Support church activities',
      icon: Heart
    }
  ];

  const quickAmounts = ['₦1,000', '₦2,500', '₦5,000', '₦10,000', '₦25,000', '₦50,000'];

  const handlePaystackPayment = () => {
    const amount = selectedAmount ? selectedAmount.replace('₦', '').replace(',', '') : customAmount;
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please select or enter a valid amount');
      return;
    }

    // Paystack integration - Replace with your actual Paystack public key
    // This is a demonstration - you'll need to implement actual Paystack integration
    const handler = (window as any).PaystackPop?.setup({
      key: 'pk_test_your_paystack_public_key_here', // Replace with your Paystack public key
      email: 'donor@example.com', // You can get this from a form
      amount: parseFloat(amount) * 100, // Amount in kobo
      currency: 'NGN',
      ref: `harvest_${Date.now()}`,
      metadata: {
        donation_type: donationType,
        church: 'Isheri Cathedral - Celestial Church of Christ'
      },
      callback: function(response: any) {
        alert(`Payment successful! Reference: ${response.reference}`);
        // Handle successful payment here
      },
      onClose: function() {
        alert('Payment cancelled');
      }
    });

    handler?.openIframe();
  };

  return (
    <section id="donations" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Support Our Ministry
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Your generous contributions help us continue God's work in our community. 
            Give from your heart and be blessed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
        >
          {/* Donation Types */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Choose Donation Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {donationTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => setDonationType(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    donationType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-blue-200 hover:border-blue-400'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <type.icon className={`w-8 h-8 mx-auto mb-2 ${
                    donationType === type.id ? 'text-blue-600' : 'text-blue-400'
                  }`} />
                  <h4 className="font-semibold text-blue-900 mb-1">{type.name}</h4>
                  <p className="text-sm text-blue-600">{type.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Select Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {quickAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-300 ${
                    selectedAmount === amount
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-blue-200 text-blue-600 hover:border-blue-400'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {amount}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-4">
              <label className="block text-blue-900 font-medium mb-2">Or enter custom amount (₦)</label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('');
                }}
                placeholder="Enter amount in Naira"
                className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Payment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <span className="text-blue-900 font-medium">Credit/Debit Card</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <span className="text-blue-900 font-medium">Mobile Money</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Building className="w-6 h-6 text-blue-600" />
                <span className="text-blue-900 font-medium">Bank Transfer</span>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <motion.button
            onClick={handlePaystackPayment}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Donate Securely with Paystack
          </motion.button>

          <p className="text-center text-blue-600 mt-4 text-sm">
            Secure payments powered by Paystack. Your donation is safe and encrypted.
          </p>
        </motion.div>

        {/* Alternative Giving Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Other Ways to Give</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-900 mb-2">Bank Transfer</h4>
              <p className="text-blue-700 text-sm mb-2">
                Account Name: Isheri Cathedral CCC<br />
                Account Number: 1234567890<br />
                Bank: GTBank
              </p>
            </div>
            <div className="text-center">
              <Gift className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-900 mb-2">Physical Offerings</h4>
              <p className="text-blue-700 text-sm">
                Bring your harvest offerings, first fruits, and donations during our services
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add Paystack script */}
      <script src="https://js.paystack.co/v1/inline.js" async></script>
    </section>
  );
};

export default Donations;