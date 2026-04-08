
import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2';

const App = () => {
  const segmentationData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      customerType: 'Prime customers, that have access to bank credit and are satisfied with the current product',
      status: 'Satisfied',
      statusColor: 'bg-blue-500',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      customerType: 'Prime customers, that have access to bank credit and are not satisfied with the current service',
      status: 'Underserved',
      statusColor: 'bg-purple-500',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      customerType: 'Customers from near-prime and sub-prime segments with no access to bank credit',
      status: 'Underbanked',
      statusColor: 'bg-lime-400',
    },
  ];

  return (
    <div>
      <Section1 segmentationData={segmentationData} />
      <Section2 />
    </div>
  )
}

export default App
