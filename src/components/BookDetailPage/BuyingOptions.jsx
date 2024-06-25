import React from 'react';

const BuyingOptions = ({ option, price }) => {
  return (
    <div className='flex my-4 font-bold'>
      <span className='dt flex gap-4'>
        <svg
          width={24}
          height={24}
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'>
          <path
            d='M11.782 11L9.3 8.518c-.393-.392-.4-1.022-.02-1.403a1.001 1.001 0 011.417 0l4.176 4.177a1.001 1.001 0 010 1.416l-4.176 4.177a.991.991 0 01-1.4.016 1 1 0 01.003-1.42L11.782 13l1.013-.998L11.782 11z'
            fill='#666'
            fillRule='evenodd'
          />
        </svg>
        <span className='px-3'>{option}</span>
      </span>{' '}
      <span className='dd price-amount'> ৳ {price} </span>
    </div>
  );
};

export default BuyingOptions;
