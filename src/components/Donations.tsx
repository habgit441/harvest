import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building } from 'lucide-react';

const Donations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const accounts = [
    { id: 1, accountName: 'Isheri Cathedral CCC', accountNumber: '1234567890', bank: 'GTBank' },
    { id: 2, accountName: 'Isheri Cathedral CCC', accountNumber: '0987654321', bank: 'Access Bank' },
    { id: 3, accountName: 'Isheri Cathedral CCC', accountNumber: '1122334455', bank: 'First Bank' },
    { id: 4, accountName: 'Isheri Cathedral CCC', accountNumber: '5566778899', bank: 'Union Bank' }
  ];

  const [copiedId, setCopiedId] = React.useState<number | null>(null);
  const [lastUpdated] = React.useState(new Date());

  const copyAccountNumber = async (acct: string, id: number) => {
    try {
      await navigator.clipboard.writeText(acct);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      // fallback for older browsers
      const input = document.createElement('input');
      input.value = acct;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="donations" className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Support Our Ministry</h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Thank you for your generosity. To give via bank transfer, use the account details below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Building className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Bank Accounts</h3>
                <p className="text-sm text-blue-600">Use any of the accounts below to give via bank transfer</p>
              </div>
            </div>
            <div className="text-sm text-blue-500">Last updated: <strong>{lastUpdated.toLocaleString()}</strong></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accounts.map((acct) => (
              <div key={acct.id} className="p-6 border rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-sm text-blue-600">Account Name</div>
                  <div className="font-semibold text-blue-900 mb-3">{acct.accountName}</div>
                  <div className="text-sm text-blue-600">Account Number</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">{acct.accountNumber}</div>
                  <div className="text-sm text-blue-600">Bank: <strong className="text-blue-800">{acct.bank}</strong></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => copyAccountNumber(acct.accountNumber, acct.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Copy
                  </button>
                  <div className="text-sm text-green-600">
                    {copiedId === acct.id ? 'Copied!' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donations;